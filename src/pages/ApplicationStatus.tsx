import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  FileText,
  ArrowRight,
  Loader2,
  Info,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const NATIONALITIES = [
  "Bangladesh",
  "Afghanistan",
  "Albania",
  "Algeria",
  "India",
  "Pakistan",
  "Nepal",
  "Sri Lanka",
  "Indonesia",
  "Malaysia",
  "Vietnam",
  "China",
  "Philippines",
  "Nigeria",
  "Other",
];

type ColorTone = "green" | "amber" | "red" | "blue";

interface ResultData {
  found: boolean;
  passport?: string;
  nationality?: string;
  nationalityLabel?: string;
  status?: string;
  percentage?: number;
  name?: string;
  institution?: string;
  summary?: {
    fullName?: string;
    applicationNumber?: string;
    applicationType?: string;
    applicationStatus?: string;
    percentage?: number;
    institution?: string;
  };
  history?: Array<{ date: string; status: string; remark: string }>;
  message?: string;
}

const features = [
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description: "Your details are never stored on our servers.",
  },
  {
    icon: Clock,
    title: "Real-Time Status",
    description: "Get the latest update on your application progress.",
  },
  {
    icon: FileText,
    title: "Full History",
    description: "See every stage your application has been through.",
  },
];

// Derive color tone from percentage + status text
const getTone = (percentage: number, status?: string): ColorTone => {
  const s = (status || "").toLowerCase();
  if (s.includes("reject") || s.includes("expire")) return "red";
  if (percentage >= 100) return "green";
  if (percentage > 0) return "amber";
  return "amber";
};

const toneConfig: Record<
  ColorTone,
  {
    chartColor: string;
    badgeBg: string;
    icon: typeof Clock;
    label: string;
  }
> = {
  green: {
    chartColor: "text-emerald-600",
    badgeBg: "bg-emerald-600",
    icon: CheckCircle2,
    label: "Application Completed",
  },
  amber: {
    chartColor: "text-amber-500",
    badgeBg: "bg-amber-500",
    icon: AlertCircle,
    label: "In Progress",
  },
  red: {
    chartColor: "text-red-600",
    badgeBg: "bg-red-600",
    icon: XCircle,
    label: "Rejected / Expired",
  },
  blue: {
    chartColor: "text-blue-600",
    badgeBg: "bg-blue-600",
    icon: Clock,
    label: "Pending Review",
  },
};

const ApplicationStatus = () => {
  const [passportNumber, setPassportNumber] = useState("");
  const [nationality, setNationality] = useState("Bangladesh");
  const [searchResult, setSearchResult] = useState<ResultData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!passportNumber.trim()) {
      setError("Please enter your passport number.");
      return;
    }
    if (!nationality) {
      setError("Please select your nationality.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSearchResult(null);
    setHasSearched(true);

    try {
      const response = await axios.post<ResultData>("/api/track", {
        passport: passportNumber.trim(),
        nationality,
      });

      if (response.data?.found) {
        setSearchResult(response.data);
      } else {
        setError(
          response.data?.message ||
            "No application found. Please verify your passport number and nationality."
        );
      }
    } catch (err: any) {
      setError(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Pull values from the EMGS response
  const percentage = Math.max(
    0,
    Math.min(100, searchResult?.percentage ?? searchResult?.summary?.percentage ?? 0)
  );
  const statusText =
    searchResult?.status || searchResult?.summary?.applicationStatus || "";
  const tone = getTone(percentage, statusText);
  const config = toneConfig[tone];
  const fullName = searchResult?.name || searchResult?.summary?.fullName || "N/A";
  const appNumber = searchResult?.summary?.applicationNumber || "N/A";
  const appType = searchResult?.summary?.applicationType || "N/A";
  const displayStatus = statusText || config.label;

  const explanationText =
    tone === "green"
      ? "Your application has been completed successfully."
      : tone === "amber"
        ? "Your application is in progress. Please continue to monitor the status."
        : tone === "red"
          ? "Your application has been rejected or expired at the current stage. Please contact your institution for advice."
          : "Your application is awaiting review.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Track Application | NH Global Education</title>
        <meta
          name="description"
          content="Track your university application status in real time with NH Global Education's application status tracker."
        />
      </Helmet>
      <Navbar />

      <main className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Search className="w-3 h-3" />
              Application Tracker
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-balance">
              Check Your Application Status
            </h1>
            <p className="text-muted-foreground text-sm md:text-base text-pretty">
              Enter your passport number and nationality to view your latest
              application progress.
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-3xl mx-auto mb-10">
            <form
              onSubmit={handleSearch}
              className="bg-card border border-border rounded-2xl p-5 md:p-6 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_220px_auto] gap-3">
                <div>
                  <label
                    htmlFor="passport"
                    className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide"
                  >
                    Travel Document Number
                  </label>
                  <Input
                    id="passport"
                    type="text"
                    placeholder="Enter your passport number"
                    value={passportNumber}
                    onChange={(e) =>
                      setPassportNumber(e.target.value.toUpperCase())
                    }
                    className="h-11 rounded-xl bg-background"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="nationality"
                    className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide"
                  >
                    Nationality
                  </label>
                  <Select
                    value={nationality}
                    onValueChange={setNationality}
                    disabled={isLoading}
                  >
                    <SelectTrigger
                      id="nationality"
                      className="h-11 rounded-xl bg-background"
                    >
                      <SelectValue placeholder="Select nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      {NATIONALITIES.map((n) => (
                        <SelectItem key={n} value={n}>
                          {n}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="h-11 px-6 rounded-xl w-full md:w-auto"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Checking...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Track
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <div className="mt-4 flex items-start gap-2 text-sm text-red-600 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg px-4 py-2.5">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </form>

            {/* Trust strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-foreground">
                        {f.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Loading */}
          {isLoading && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-12 text-center">
                <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  Checking with the official portal. This may take up to 30
                  seconds...
                </p>
              </div>
            </div>
          )}

          {/* Result */}
          {searchResult?.found && !isLoading && (
            <div className="max-w-5xl mx-auto space-y-6">
              {/* Summary + Donut */}
              <div className="bg-card border-2 border-amber-400 rounded-2xl p-6 md:p-8">
                <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-center">
                  <div className="flex justify-center">
                    <div className="relative w-44 h-44 md:w-52 md:h-52">
                      <svg
                        className="w-full h-full -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          fill="none"
                          stroke="hsl(var(--muted))"
                          strokeWidth="12"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          fill="none"
                          strokeWidth="12"
                          strokeLinecap="round"
                          className={config.chartColor}
                          stroke="currentColor"
                          strokeDasharray={`${(percentage / 100) * 264} 264`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl md:text-5xl font-bold text-foreground">
                          {percentage}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 pb-3 border-b-2 border-primary/30">
                      Summary
                    </h3>
                    <dl className="space-y-2.5 text-sm md:text-base">
                      <div className="flex flex-wrap gap-x-3">
                        <dt className="font-semibold text-foreground">
                          Full Name:
                        </dt>
                        <dd className="text-muted-foreground">{fullName}</dd>
                      </div>
                      <div className="flex flex-wrap gap-x-3">
                        <dt className="font-semibold text-foreground">
                          Travel Document Number:
                        </dt>
                        <dd className="text-muted-foreground">
                          {passportNumber}
                        </dd>
                      </div>
                      <div className="flex flex-wrap gap-x-3">
                        <dt className="font-semibold text-foreground">
                          Application Number:
                        </dt>
                        <dd className="text-muted-foreground">{appNumber}</dd>
                      </div>
                      {appType !== "N/A" && (
                        <div className="flex flex-wrap gap-x-3">
                          <dt className="font-semibold text-foreground">
                            Application Type:
                          </dt>
                          <dd className="text-muted-foreground">{appType}</dd>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-x-3">
                        <dt className="font-semibold text-foreground">
                          Application Status:
                        </dt>
                        <dd className={`font-medium ${config.chartColor}`}>
                          {displayStatus}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-5 bg-foreground/90 text-background rounded-lg px-4 py-2.5 text-sm">
                      <span className="font-semibold">IMPORTANT:</span> Kindly
                      read the explanation below to understand the percentage.
                    </div>
                  </div>
                </div>
              </div>

              {/* Percentage Meaning + Color Info */}
              <div className="bg-card border border-amber-400 rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-4">
                    What does the percentage mean?
                  </h3>
                  <div className="flex items-stretch gap-3">
                    <div
                      className={`flex items-center justify-center px-4 rounded-md text-white font-bold text-lg min-w-[64px] ${config.badgeBg}`}
                    >
                      {percentage}%
                    </div>
                    <div className="flex-1 bg-muted/60 rounded-md px-4 py-3 text-sm text-muted-foreground">
                      {explanationText}
                    </div>
                  </div>
                </div>

                <div className="border-2 border-red-500/40 rounded-xl">
                  <div className="bg-amber-400 text-foreground font-bold text-sm px-4 py-2 rounded-t-lg inline-block ml-4 -mt-3">
                    Color Info:
                  </div>
                  <div className="p-4 space-y-3">
                    {[
                      {
                        color: "border-emerald-500",
                        text: "Your application is progressing accordingly.",
                      },
                      {
                        color: "border-amber-400",
                        text: "Your application is pending additional documents or correction by your institution.",
                      },
                      {
                        color: "border-red-500",
                        text: "Your application has been rejected/expired at the current stage. Please contact your institution for advice.",
                      },
                    ].map((row, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-4 ${row.color} flex-shrink-0 mt-0.5`}
                        />
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {row.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Application Progress History */}
              {searchResult.history && searchResult.history.length > 0 && (
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-red-600 text-white px-5 py-3 flex items-center gap-2">
                    <ChevronDown className="w-4 h-4" />
                    <span className="font-semibold text-sm">
                      Application Progress History
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-emerald-600 text-white">
                          <th className="text-left px-5 py-3 font-semibold w-32">
                            Date
                          </th>
                          <th className="text-left px-5 py-3 font-semibold w-48">
                            Status
                          </th>
                          <th className="text-left px-5 py-3 font-semibold">
                            Remark
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchResult.history.map((row, i) => (
                          <tr
                            key={i}
                            className={`border-b border-border last:border-0 ${
                              i % 2 === 0 ? "bg-background" : "bg-muted/40"
                            }`}
                          >
                            <td className="px-5 py-3.5 align-top text-foreground whitespace-nowrap">
                              {row.date}
                            </td>
                            <td className="px-5 py-3.5 align-top text-foreground font-medium">
                              {row.status}
                            </td>
                            <td className="px-5 py-3.5 align-top text-muted-foreground">
                              {row.remark}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Empty / Not Found State */}
          {hasSearched && !searchResult?.found && !isLoading && error && (
            <div className="max-w-2xl mx-auto mt-10">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
                  <Info className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  Application Not Found
                </h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                  We couldn&apos;t find an application matching the details you
                  provided. Please double-check your passport number and
                  nationality and try again.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                >
                  Need help? Contact our team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Help CTA */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10 flex flex-col md:flex-row items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-base md:text-lg font-bold text-foreground mb-1">
                  Need help with your application?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our counselors are ready to support you at every step.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors text-sm flex-shrink-0"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="max-w-3xl mx-auto text-xs text-muted-foreground text-center mt-6 leading-relaxed">
            This tracker mirrors information from official sources. For
            authoritative status updates, please visit the official portal{" "}
            <a
              href="https://visa.educationmalaysia.gov.my/emgs/application/searchForm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              educationmalaysia.gov.my
              <ExternalLink className="w-3 h-3" />
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplicationStatus;
