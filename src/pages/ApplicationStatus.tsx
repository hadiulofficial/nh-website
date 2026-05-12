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

type StatusType = "pending" | "approved" | "rejected" | "in_review";

const statusConfig: Record<
  StatusType,
  {
    color: string;
    ring: string;
    icon: typeof Clock;
    label: string;
    description: string;
  }
> = {
  pending: {
    color: "text-amber-600",
    ring: "ring-amber-500",
    icon: Clock,
    label: "Pending Review",
    description: "Your application is awaiting review by the institution.",
  },
  in_review: {
    color: "text-blue-600",
    ring: "ring-blue-500",
    icon: AlertCircle,
    label: "In Review",
    description: "Your application is currently being reviewed.",
  },
  approved: {
    color: "text-emerald-600",
    ring: "ring-emerald-500",
    icon: CheckCircle2,
    label: "Application Completed",
    description: "Your application has been successfully completed.",
  },
  rejected: {
    color: "text-red-600",
    ring: "ring-red-500",
    icon: XCircle,
    label: "Rejected",
    description: "Your application has been rejected at the current stage.",
  },
};

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

const ApplicationStatus = () => {
  const [passportNumber, setPassportNumber] = useState("");
  const [nationality, setNationality] = useState("Bangladesh");
  const [searchResult, setSearchResult] = useState<any>(null);
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

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await axios.post(`${baseUrl}/api/application-status`, {
        passport_number: passportNumber.trim(),
        nationality,
      });

      if (response.data.status === "success") {
        setSearchResult(response.data.data);
      } else {
        setError(response.data.message || "Application not found.");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const currentStatus: StatusType = searchResult?.status || "pending";
  const config = statusConfig[currentStatus] || statusConfig.pending;
  const StatusIcon = config.icon;
  const percentage =
    currentStatus === "approved"
      ? 100
      : currentStatus === "in_review"
        ? 60
        : currentStatus === "pending"
          ? 25
          : 0;

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
          {/* Page Header */}
          <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              <Search className="w-4 h-4" />
              Application Tracker
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              Check Your Application Status
            </h1>
            <p className="text-muted-foreground">
              Enter your passport number and nationality to see the latest
              status of your application.
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-3xl mx-auto">
            <form
              onSubmit={handleSearch}
              className="bg-card border border-border rounded-2xl shadow-lg p-5 md:p-6"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* Passport */}
                <div>
                  <label
                    htmlFor="passport"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Travel Document Number{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="passport"
                    placeholder="Enter your passport number"
                    value={passportNumber}
                    onChange={(e) => setPassportNumber(e.target.value)}
                    className="h-11 rounded-xl"
                  />
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <Select value={nationality} onValueChange={setNationality}>
                    <SelectTrigger className="h-11 rounded-xl">
                      <SelectValue placeholder="Select nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      {NATIONALITIES.map((nat) => (
                        <SelectItem key={nat} value={nat}>
                          {nat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 rounded-xl shadow-md shadow-primary/20"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Track Application
                  </>
                )}
              </Button>

              {error && (
                <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </form>

            {/* Trust strip */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {f.title}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {f.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Result Section */}
          {searchResult && (
            <div className="max-w-5xl mx-auto mt-10 md:mt-12 space-y-5">
              {/* Summary Card */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-amber-400 text-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wide">
                  Application Summary
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-8 items-center">
                  {/* Donut */}
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
                          className={config.color}
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

                  {/* Summary Details */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 pb-3 border-b-2 border-primary/30">
                      Summary
                    </h3>
                    <dl className="space-y-2.5 text-sm md:text-base">
                      <div className="flex flex-wrap gap-x-3">
                        <dt className="font-semibold text-foreground">
                          Full Name:
                        </dt>
                        <dd className="text-muted-foreground">
                          {searchResult.name || "N/A"}
                        </dd>
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
                        <dd className="text-muted-foreground">
                          {searchResult.application_id || "N/A"}
                        </dd>
                      </div>
                      <div className="flex flex-wrap gap-x-3">
                        <dt className="font-semibold text-foreground">
                          Application Status:
                        </dt>
                        <dd className={`font-medium ${config.color}`}>
                          {config.label}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-5 bg-foreground/90 text-background rounded-lg px-4 py-2.5 text-sm">
                      <span className="font-semibold">IMPORTANT:</span>{" "}
                      Kindly read the explanation below to understand the
                      percentage.
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
                      className={`flex items-center justify-center px-4 rounded-md text-white font-bold text-lg min-w-[64px] ${
                        currentStatus === "approved"
                          ? "bg-emerald-600"
                          : currentStatus === "in_review"
                            ? "bg-blue-600"
                            : currentStatus === "pending"
                              ? "bg-amber-500"
                              : "bg-red-600"
                      }`}
                    >
                      {percentage}%
                    </div>
                    <div className="flex-1 bg-muted/60 rounded-md px-4 py-3 text-sm text-muted-foreground">
                      {config.description}
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
                      {(searchResult.history || [
                        {
                          date: new Date(
                            searchResult.updated_at || Date.now()
                          ).toLocaleDateString("en-GB"),
                          status: config.label,
                          remark: config.description,
                        },
                        {
                          date: new Date(
                            searchResult.created_at || Date.now()
                          ).toLocaleDateString("en-GB"),
                          status: "Application Submitted",
                          remark: "Your application has been submitted.",
                        },
                      ]).map((row: any, i: number) => (
                        <tr
                          key={i}
                          className={`border-b border-border last:border-0 ${
                            i % 2 === 0 ? "bg-background" : "bg-muted/40"
                          }`}
                        >
                          <td className="px-5 py-3.5 align-top text-foreground">
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
            </div>
          )}

          {/* Empty / Not Found State */}
          {hasSearched && !searchResult && !isLoading && error && (
            <div className="max-w-2xl mx-auto mt-10">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
                  <Info className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  Application Not Found
                </h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                  We couldn&apos;t find an application matching the details
                  you provided. Please double-check your passport number and
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
