import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Shield,
  Clock,
  FileText,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type StatusTone = "green" | "amber" | "red" | "neutral";

interface SummaryItem {
  label: string;
  value: string;
}

interface HistoryItem {
  date: string;
  status: string;
  remark: string;
}

interface TrackResult {
  found: boolean;
  name?: string;
  percentage?: number | null;
  status?: string | null;
  type?: string | null;
  travelDoc?: string | null;
  applicationNumber?: string | null;
  summary?: SummaryItem[];
  history?: HistoryItem[];
  message?: string;
}

const NATIONALITIES = [
  "Bangladesh",
  "Pakistan",
  "India",
  "Nepal",
  "Sri Lanka",
  "Bhutan",
  "Maldives",
  "Afghanistan",
  "Indonesia",
  "Vietnam",
  "Philippines",
  "China",
  "Nigeria",
  "Yemen",
  "Iran",
  "Iraq",
  "Egypt",
  "Sudan",
  "Somalia",
  "Kenya",
  "Other",
];

function getStatusTone(status: string | null | undefined, pct: number | null | undefined): StatusTone {
  const s = (status || "").toLowerCase();
  if (s.includes("reject") || s.includes("expire") || s.includes("cancel")) return "red";
  if (s.includes("pending") || s.includes("additional") || s.includes("correct")) return "amber";
  if (s.includes("complete") || s.includes("approved") || s.includes("issued") || s.includes("returned")) return "green";
  if (typeof pct === "number") {
    if (pct >= 100) return "green";
    if (pct >= 50) return "green";
    if (pct > 0) return "amber";
  }
  return "neutral";
}

const TONE_COLORS: Record<StatusTone, { ring: string; fill: string; text: string; bg: string; border: string }> = {
  green: { ring: "#16a34a", fill: "#dcfce7", text: "text-green-700", bg: "bg-green-50", border: "border-green-200" },
  amber: { ring: "#f59e0b", fill: "#fef3c7", text: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" },
  red: { ring: "#dc2626", fill: "#fee2e2", text: "text-red-700", bg: "bg-red-50", border: "border-red-200" },
  neutral: { ring: "#9ca3af", fill: "#f3f4f6", text: "text-muted-foreground", bg: "bg-muted", border: "border-border" },
};

const ApplicationStatus = () => {
  const [passport, setPassport] = useState("");
  const [nationality, setNationality] = useState("");
  const [result, setResult] = useState<TrackResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!passport.trim()) {
      setError("Please enter your travel document number.");
      return;
    }
    if (!nationality) {
      setError("Please select your nationality.");
      return;
    }

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post("/api/track", {
        passport: passport.trim(),
        nationality,
      });
      setResult(response.data);
      if (!response.data?.found) {
        setError(response.data?.message || "No application found. Please verify your details.");
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Unable to reach the tracking service. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const tone: StatusTone = result?.found
    ? getStatusTone(result.status, result.percentage ?? null)
    : "neutral";
  const colors = TONE_COLORS[tone];
  const pct = typeof result?.percentage === "number" ? result.percentage : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          {/* Title */}
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Track Your Application
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Check your EMGS Student Pass application status by entering your travel document number and nationality.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div className="space-y-2">
                <Label htmlFor="passport" className="text-sm font-semibold">
                  Travel Document Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="passport"
                  placeholder="Enter your passport number"
                  value={passport}
                  onChange={(e) => setPassport(e.target.value.toUpperCase())}
                  onKeyDown={handleKeyDown}
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationality" className="text-sm font-semibold">
                  Nationality <span className="text-red-500">*</span>
                </Label>
                <Select value={nationality} onValueChange={setNationality}>
                  <SelectTrigger id="nationality" className="h-12 rounded-xl">
                    <SelectValue placeholder="Select your nationality" />
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
            </div>

            <Button
              onClick={handleSearch}
              disabled={isLoading}
              className="w-full md:w-auto h-12 px-8 rounded-xl"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Checking status...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Check Application Status
                </>
              )}
            </Button>

            {error && (
              <div className="mt-5 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
          </div>

          {/* Trust strip */}
          {!result && (
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {[
                { icon: Shield, title: "Secure & Private", desc: "Your data is never stored." },
                { icon: Clock, title: "Real-time Data", desc: "Live status from EMGS portal." },
                { icon: FileText, title: "Official Source", desc: "Direct from immigration records." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-5 bg-card border border-border rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{item.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Result Section */}
          {result?.found && (
            <div className="space-y-6">
              {/* Donut + Summary */}
              <div className="bg-card border-2 border-amber-300 rounded-2xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Donut Chart */}
                  <div className="flex justify-center">
                    <div className="relative w-48 h-48 md:w-56 md:h-56">
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="14" />
                        {pct !== null && (
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke={colors.ring}
                            strokeWidth="14"
                            strokeDasharray={`${(pct / 100) * 251.2} 251.2`}
                            strokeLinecap="butt"
                          />
                        )}
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl md:text-5xl font-bold text-foreground">
                          {pct !== null ? `${pct}%` : "—"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b-2 border-red-600 inline-block">
                      Summary
                    </h2>
                    <dl className="space-y-2.5 text-sm">
                      {result.name && (
                        <div className="flex gap-2">
                          <dt className="font-bold text-foreground min-w-[160px]">Full Name:</dt>
                          <dd className="text-foreground">{result.name}</dd>
                        </div>
                      )}
                      {result.travelDoc && (
                        <div className="flex gap-2">
                          <dt className="font-bold text-foreground min-w-[160px]">Travel Document Number:</dt>
                          <dd className="text-foreground">{result.travelDoc}</dd>
                        </div>
                      )}
                      {result.applicationNumber && (
                        <div className="flex gap-2">
                          <dt className="font-bold text-foreground min-w-[160px]">Application Number:</dt>
                          <dd className="text-foreground">{result.applicationNumber}</dd>
                        </div>
                      )}
                      {result.type && (
                        <div className="flex gap-2">
                          <dt className="font-bold text-foreground min-w-[160px]">Application Type:</dt>
                          <dd className="text-foreground">{result.type}</dd>
                        </div>
                      )}
                      {result.status && (
                        <div className="flex gap-2">
                          <dt className="font-bold text-foreground min-w-[160px]">Application Status:</dt>
                          <dd className="text-foreground">{result.status}</dd>
                        </div>
                      )}
                    </dl>

                    <div className="mt-5 bg-slate-700 text-white text-xs md:text-sm px-4 py-2.5 rounded-md">
                      <strong>IMPORTANT:</strong> Kindly read the explanation below to understand the percentage.
                    </div>
                  </div>
                </div>
              </div>

              {/* Percentage explanation + Color Info */}
              <div className="bg-card border-2 border-amber-300 rounded-2xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-4">What does the percentage mean?</h3>
                    {pct !== null && result.status && (
                      <div className="flex items-start gap-3">
                        <div
                          className="px-3 py-2 rounded font-bold text-white text-sm min-w-[60px] text-center"
                          style={{ backgroundColor: colors.ring }}
                        >
                          {pct}%
                        </div>
                        <div className={`flex-1 px-4 py-2 rounded ${colors.bg} text-sm text-foreground`}>
                          {result.status}.
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-2 border-red-600 rounded-lg overflow-hidden">
                    <div className="bg-amber-500 text-white font-bold px-4 py-2 text-sm inline-block rounded-br-lg">
                      Color Info:
                    </div>
                    <div className="p-4 space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full border-[3px] border-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Your application is progressing accordingly.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full border-[3px] border-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">
                          Your application is pending additional documents or correction by your institution.
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full border-[3px] border-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">
                          Your application has been rejected/expired at the current stage. Please contact your institution for advice.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* History */}
              {result.history && result.history.length > 0 && (
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-red-700 text-white px-5 py-3 flex items-center gap-2 font-semibold">
                    <ChevronDown className="w-5 h-5" />
                    Application Progress History
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-green-600 text-white">
                          <th className="text-left px-4 py-3 font-semibold w-32">Date</th>
                          <th className="text-left px-4 py-3 font-semibold w-56">Status</th>
                          <th className="text-left px-4 py-3 font-semibold">Remark</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.history.map((row, idx) => (
                          <tr
                            key={idx}
                            className={idx % 2 === 0 ? "bg-background" : "bg-muted/40"}
                          >
                            <td className="px-4 py-3 align-top text-foreground whitespace-nowrap">{row.date}</td>
                            <td className="px-4 py-3 align-top text-foreground">{row.status}</td>
                            <td className="px-4 py-3 align-top text-foreground">{row.remark}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="flex items-start gap-3 p-4 bg-muted/50 border border-border rounded-xl text-xs md:text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  Data shown is fetched live from the official EMGS portal. For any discrepancies, please verify directly at{" "}
                  <a
                    href="https://visa.educationmalaysia.gov.my/guidelines/status-application.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    visa.educationmalaysia.gov.my
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  .
                </div>
              </div>
            </div>
          )}

          {/* Not found state */}
          {result && !result.found && (
            <div className="bg-card border border-border rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">No Application Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We couldn&apos;t find an application matching these details. Please verify your travel document number and nationality, then try again.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplicationStatus;
