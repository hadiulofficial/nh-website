import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import * as cheerio from "cheerio";

// Nationality ISO2 mapping
const nationalityMap: Record<string, string> = {
  afghanistan: "AF",
  albania: "AL",
  algeria: "DZ",
  andorra: "AD",
  angola: "AO",
  argentina: "AR",
  armenia: "AM",
  australia: "AU",
  austria: "AT",
  azerbaijan: "AZ",
  bahrain: "BH",
  bangladesh: "BD",
  belarus: "BY",
  belgium: "BE",
  bhutan: "BT",
  bolivia: "BO",
  "bosnia and herzegovina": "BA",
  botswana: "BW",
  brazil: "BR",
  brunei: "BN",
  bulgaria: "BG",
  cambodia: "KH",
  cameroon: "CM",
  canada: "CA",
  chile: "CL",
  china: "CN",
  colombia: "CO",
  "costa rica": "CR",
  croatia: "HR",
  cuba: "CU",
  cyprus: "CY",
  "czech republic": "CZ",
  denmark: "DK",
  ecuador: "EC",
  egypt: "EG",
  estonia: "EE",
  ethiopia: "ET",
  finland: "FI",
  france: "FR",
  georgia: "GE",
  germany: "DE",
  ghana: "GH",
  greece: "GR",
  guatemala: "GT",
  "hong kong": "HK",
  hungary: "HU",
  iceland: "IS",
  india: "IN",
  indonesia: "ID",
  iran: "IR",
  iraq: "IQ",
  ireland: "IE",
  israel: "IL",
  italy: "IT",
  jamaica: "JM",
  japan: "JP",
  jordan: "JO",
  kazakhstan: "KZ",
  kenya: "KE",
  kuwait: "KW",
  kyrgyzstan: "KG",
  latvia: "LV",
  lebanon: "LB",
  libya: "LY",
  lithuania: "LT",
  luxembourg: "LU",
  macau: "MO",
  malaysia: "MY",
  maldives: "MV",
  malta: "MT",
  mexico: "MX",
  moldova: "MD",
  monaco: "MC",
  mongolia: "MN",
  morocco: "MA",
  myanmar: "MM",
  nepal: "NP",
  netherlands: "NL",
  "new zealand": "NZ",
  nigeria: "NG",
  "north korea": "KP",
  norway: "NO",
  oman: "OM",
  pakistan: "PK",
  palestine: "PS",
  panama: "PA",
  peru: "PE",
  philippines: "PH",
  poland: "PL",
  portugal: "PT",
  qatar: "QA",
  romania: "RO",
  russia: "RU",
  "saudi arabia": "SA",
  serbia: "RS",
  singapore: "SG",
  slovakia: "SK",
  slovenia: "SI",
  "south africa": "ZA",
  "south korea": "KR",
  spain: "ES",
  "sri lanka": "LK",
  sudan: "SD",
  sweden: "SE",
  switzerland: "CH",
  syria: "SY",
  taiwan: "TW",
  tajikistan: "TJ",
  tanzania: "TZ",
  thailand: "TH",
  tunisia: "TN",
  turkey: "TR",
  turkmenistan: "TM",
  uae: "AE",
  "united arab emirates": "AE",
  uganda: "UG",
  ukraine: "UA",
  "united kingdom": "GB",
  "united states": "US",
  uzbekistan: "UZ",
  venezuela: "VE",
  vietnam: "VN",
  yemen: "YE",
  zambia: "ZM",
  zimbabwe: "ZW",
};

// Reverse mapping for labels
const iso2ToCountry: Record<string, string> = {};
Object.entries(nationalityMap).forEach(([country, iso2]) => {
  if (!iso2ToCountry[iso2]) {
    iso2ToCountry[iso2] = country
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
});

interface RawRow {
  label: string;
  value: string;
}

interface HistoryEntry {
  date: string;
  status: string;
  remark: string;
}

interface Summary {
  fullName: string | null;
  travelDocument: string;
  applicationNumber: string | null;
  applicationType: string | null;
  applicationStatus: string | null;
  percentage: string | null;
  percentageNum: number | null;
  institution: string | null;
}

function resolveNationality(input: string): string | null {
  const trimmed = input.trim();
  // If it's already 2 letters, treat as ISO2
  if (/^[A-Za-z]{2}$/.test(trimmed)) {
    return trimmed.toUpperCase();
  }
  // Otherwise look up by country name
  const lower = trimmed.toLowerCase();
  return nationalityMap[lower] || null;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { passport, nationality } = req.body || {};

  if (!passport || typeof passport !== "string") {
    return res.status(400).json({ error: "Passport number is required" });
  }

  if (!nationality || typeof nationality !== "string") {
    return res.status(400).json({ error: "Nationality is required" });
  }

  const passportTrimmed = passport.trim().toUpperCase();
  const iso2 = resolveNationality(nationality);

  if (!iso2) {
    return res.status(400).json({
      error: `Unable to resolve nationality: ${escapeHtml(nationality)}. Please use a valid country name or ISO2 code.`,
    });
  }

  const nationalityLabel = iso2ToCountry[iso2] || iso2;

  const userAgent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

  const formUrl = "https://visa.educationmalaysia.gov.my/emgs/application/searchForm/";
  const postUrl = "https://visa.educationmalaysia.gov.my/emgs/application/searchPost/";

  try {
    // Step 1: GET the form to obtain session cookie and form_key
    const getResponse = await axios.get(formUrl, {
      headers: {
        "User-Agent": userAgent,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      timeout: 15000,
      maxRedirects: 5,
    });

    const setCookieHeaders = getResponse.headers["set-cookie"] || [];
    const cookies = setCookieHeaders
      .map((c: string) => c.split(";")[0])
      .join("; ");

    const $form = cheerio.load(getResponse.data);
    const formKey = $form('input[name="form_key"]').val() as string;

    if (!formKey) {
      return res.status(502).json({
        error: "Unable to load application form. Please try again later.",
      });
    }

    // Step 2: POST the search
    const postData = new URLSearchParams({
      form_key: formKey,
      travel_doc_no: passportTrimmed,
      nationality: iso2,
      agreement: "1",
    }).toString();

    const postResponse = await axios.post(postUrl, postData, {
      headers: {
        "User-Agent": userAgent,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie: cookies,
        Referer: formUrl,
        Origin: "https://visa.educationmalaysia.gov.my",
      },
      timeout: 20000,
      maxRedirects: 5,
    });

    const $ = cheerio.load(postResponse.data);

    // Remove search form from parsing
    $("#search-form-validate").remove();

    // Use .col-main or body
    let $main = $(".col-main");
    if ($main.length === 0) {
      $main = $("body");
    }

    // Parse data
    const rawRows: RawRow[] = [];
    const seenRows = new Set<string>();
    const history: HistoryEntry[] = [];

    let inferredName: string | null = null;
    let inferredInstitution: string | null = null;
    let inferredStatus: string | null = null;
    let inferredPercentage: string | null = null;

    const pushRow = (label: string, value: string) => {
      const trimLabel = label.replace(/\s+/g, " ").trim();
      const trimValue = value.replace(/\s+/g, " ").trim();

      if (!trimValue || trimValue.length > 2000) return;

      // Skip nationality ISO noise
      if (
        trimLabel.toLowerCase() === "nationality" &&
        /^[A-Z]{2,3}$/.test(trimValue)
      ) {
        return;
      }

      const key = `${trimLabel.toLowerCase()}|${trimValue.toLowerCase()}`;
      if (seenRows.has(key)) return;
      seenRows.add(key);

      rawRows.push({ label: trimLabel, value: trimValue });

      // Infer summary fields
      const lowerLabel = trimLabel.toLowerCase();
      if (
        lowerLabel.includes("full name") ||
        lowerLabel === "name" ||
        lowerLabel.includes("student name")
      ) {
        inferredName = trimValue;
      }
      if (
        lowerLabel.includes("institution") ||
        lowerLabel.includes("university") ||
        lowerLabel.includes("college")
      ) {
        inferredInstitution = trimValue;
      }
      if (
        lowerLabel.includes("application status") ||
        lowerLabel === "status"
      ) {
        // Avoid date-like values
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(trimValue)) {
          inferredStatus = trimValue;
        }
      }
      if (lowerLabel.includes("percentage") || lowerLabel.includes("progress")) {
        inferredPercentage = trimValue;
      }
    };

    // Strategy 1: Blob regex pass
    const mainText = $main.clone().find("script,style,noscript").remove().end().text().replace(/\s+/g, " ");

    const regexPatterns = [
      { label: "Full name", regex: /full\s*name\s*[:\-]?\s*([A-Za-z\s@.'-]+?)(?=\s*(?:travel|application|nationality|$))/i },
      { label: "Travel document number", regex: /travel\s*document\s*(?:number|no\.?)?\s*[:\-]?\s*([A-Z0-9]+)/i },
      { label: "Application number", regex: /application\s*(?:number|no\.?)?\s*[:\-]?\s*([A-Z0-9\-]+)/i },
      { label: "Application type", regex: /application\s*type\s*[:\-]?\s*([A-Za-z\s\-]+?)(?=\s*(?:application|status|$))/i },
      { label: "Application status", regex: /application\s*status\s*[:\-]?\s*([A-Za-z\s]+?)(?=\s*(?:\d|percentage|$))/i },
    ];

    regexPatterns.forEach(({ label, regex }) => {
      const match = mainText.match(regex);
      if (match && match[1]) {
        pushRow(label, match[1].trim());
      }
    });

    // Strategy 2: strong/b label pairs
    $main.find("strong, b").each((_, el) => {
      const labelText = $(el).text().trim().toLowerCase();
      const knownLabels = [
        "full name",
        "travel document number",
        "application number",
        "application type",
        "application status",
      ];
      for (const known of knownLabels) {
        if (labelText.includes(known)) {
          const parent = $(el).parent();
          const fullText = parent.text();
          const value = fullText
            .replace($(el).text(), "")
            .replace(/[:\-]/g, "")
            .trim();
          if (value) {
            pushRow(
              known
                .split(" ")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" "),
              value
            );
          }
          break;
        }
      }
    });

    // Strategy 3: Summary heading walker
    $main.find("h1, h2, h3, h4, h5, h6").each((_, heading) => {
      const headingText = $(heading).text().toLowerCase();
      if (headingText.startsWith("summary")) {
        let sibling = $(heading).next();
        let count = 0;
        while (sibling.length && count < 20) {
          const text = sibling.text().trim();
          const match = text.match(
            /^(Full Name|Travel Document Number|Application Number|Application Type|Application Status)\s*:\s*(.+)$/i
          );
          if (match) {
            pushRow(match[1], match[2]);
          }
          sibling = sibling.next();
          count++;
        }
      }
    });

    // Strategy 4: Short element line match
    $main.find("p, li, div, span, td, th").each((_, el) => {
      const text = $(el).text().trim();
      if (text.length < 200 && text.length > 5) {
        const match = text.match(
          /^(Full Name|Travel Document Number|Application Number|Application Type|Application Status|Institution|University|Status)\s*[:\-]\s*(.+)$/i
        );
        if (match) {
          pushRow(match[1], match[2]);
        }
      }
    });

    // Parse history tables
    $main.find("table").each((_, table) => {
      const $table = $(table);
      const headerRow = $table.find("tr").first();
      const headers = headerRow
        .find("th, td")
        .map((_, cell) => $(cell).text().toLowerCase().trim())
        .get();

      const hasDate = headers.some((h) => h.includes("date"));
      const hasStatus = headers.some((h) => h.includes("status"));

      if (hasDate && hasStatus) {
        // This is a history table
        $table.find("tr").slice(1).each((_, row) => {
          const cells = $(row).find("td");
          if (cells.length >= 2) {
            const dateText = $(cells[0]).text().trim();
            const statusText = $(cells[1]).text().trim();
            const remarkText = cells.length > 2 ? $(cells[2]).text().trim() : "";

            // Validate date format
            if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateText) || /^\d{4}-\d{2}-\d{2}/.test(dateText)) {
              history.push({
                date: dateText,
                status: statusText,
                remark: remarkText,
              });
            }
          }
        });
        // Mark this table as processed
        $table.addClass("history-table-processed");
      }
    });

    // Generic table parsing (skip history tables)
    $main.find("table:not(.history-table-processed)").each((_, table) => {
      $(table)
        .find("tr")
        .each((_, row) => {
          const cells = $(row).find("td, th");
          if (cells.length >= 2) {
            const label = $(cells[0]).text().trim();
            const value = $(cells[1]).text().trim();
            if (label && value) {
              pushRow(label, value);
            }
          }
        });
    });

    // Parse dl elements
    $main.find("dl").each((_, dl) => {
      $(dl)
        .find("dt")
        .each((_, dt) => {
          const label = $(dt).text().trim();
          const dd = $(dt).next("dd");
          if (dd.length) {
            const value = dd.text().trim();
            if (label && value) {
              pushRow(label, value);
            }
          }
        });
    });

    // Parse fieldset/field patterns
    $main.find(".fieldset .field, .field").each((_, field) => {
      const $field = $(field);
      const labelEl = $field.find("> label, .label").first();
      const label = labelEl.text().trim();
      const input = $field.find("input[value]");
      let value = "";
      if (input.length) {
        value = (input.val() as string) || "";
      } else {
        const inputBox = $field.find(".input-box");
        if (inputBox.length) {
          value = inputBox.text().trim();
        }
      }
      if (label && value) {
        pushRow(label, value);
      }
    });

    // Cleanup: remove bare date patterns from rawRows
    const cleanedRows = rawRows.filter((row) => {
      return !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(row.label);
    });

    // Extract percentage from text if not found
    if (!inferredPercentage) {
      const percentMatch = mainText.match(/(\d{1,3})\s*%/);
      if (percentMatch) {
        inferredPercentage = percentMatch[1] + "%";
      }
    }

    // Build summary
    const summary: Summary = {
      fullName: inferredName,
      travelDocument: passportTrimmed,
      applicationNumber: null,
      applicationType: null,
      applicationStatus: inferredStatus,
      percentage: inferredPercentage,
      percentageNum: null,
      institution: inferredInstitution,
    };

    // Extract from rawRows
    for (const row of cleanedRows) {
      const lowerLabel = row.label.toLowerCase();
      if (lowerLabel.includes("application number") && !summary.applicationNumber) {
        summary.applicationNumber = row.value;
      }
      if (lowerLabel.includes("application type") && !summary.applicationType) {
        summary.applicationType = row.value;
      }
      if (lowerLabel.includes("travel document") && !summary.travelDocument) {
        summary.travelDocument = row.value;
      }
      if (
        (lowerLabel.includes("full name") || lowerLabel === "name") &&
        !summary.fullName
      ) {
        summary.fullName = row.value;
      }
    }

    // Parse percentage number
    if (summary.percentage) {
      const numMatch = summary.percentage.match(/(\d+)/);
      if (numMatch) {
        summary.percentageNum = parseInt(numMatch[1], 10);
      }
    }

    // Try status text fallback
    if (!summary.applicationStatus) {
      const statusEl = $main.find(
        ".application-status, .status-label, [class*='application-status'], [class*='percent'], .progress"
      );
      if (statusEl.length) {
        const statusText = statusEl.first().text().trim();
        if (statusText && !/^\d+%?$/.test(statusText)) {
          summary.applicationStatus = statusText;
        }
      }
    }

    // Check if found
    const found = cleanedRows.length > 0 || history.length > 0 || !!summary.applicationStatus;

    // Not found detection
    if (!found) {
      const bodyText = $("body").text().toLowerCase();
      const notFoundPhrases = [
        "no record",
        "record not found",
        "no matching record",
        "invalid passport",
        "no application found",
        "unable to find",
      ];

      for (const phrase of notFoundPhrases) {
        if (bodyText.includes(phrase)) {
          return res.status(200).json({
            found: false,
            message: "No application found for the provided details. Please verify your passport number and nationality.",
            passport: passportTrimmed,
            nationality: iso2,
            nationalityLabel,
          });
        }
      }

      // No parse / unknown
      const debugText = $main.text().replace(/\s+/g, " ").trim().substring(0, 500);
      return res.status(200).json({
        found: false,
        message: "No application data found.",
        debug: debugText,
        passport: passportTrimmed,
        nationality: iso2,
        nationalityLabel,
      });
    }

    // Success response
    return res.status(200).json({
      found: true,
      passport: passportTrimmed,
      nationality: iso2,
      nationalityLabel,
      status: summary.applicationStatus,
      percentage: summary.percentage,
      name: summary.fullName,
      institution: summary.institution,
      rawRows: cleanedRows,
      summary,
      history,
    });
  } catch (error: any) {
    console.error("EMGS API Error:", error.message);

    if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
      return res.status(504).json({
        error: "Request timed out. Please try again.",
      });
    }

    return res.status(502).json({
      error: "Unable to connect to the application portal. Please try again later.",
    });
  }
}
