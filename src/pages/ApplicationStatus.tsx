import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  AlertCircle,
  CheckCircle,
  Clock,
  Search,
  XCircle,
  FileText,
  Globe,
  Shield,
  Loader2,
  ExternalLink,
  Info,
  ChevronDown,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";

// Countries list with ISO2 codes
const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Brazil", code: "BR" },
  { name: "Brunei", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Colombia", code: "CO" },
  { name: "Costa Rica", code: "CR" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Greece", code: "GR" },
  { name: "Guatemala", code: "GT" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Libya", code: "LY" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macau", code: "MO" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Malta", code: "MT" },
  { name: "Mexico", code: "MX" },
  { name: "Moldova", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Morocco", code: "MA" },
  { name: "Myanmar", code: "MM" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nigeria", code: "NG" },
  { name: "North Korea", code: "KP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palestine", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Qatar", code: "QA" },
  { name: "Romania", code: "RO" },
  { name: "Russia", code: "RU" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Serbia", code: "RS" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "South Africa", code: "ZA" },
  { name: "South Korea", code: "KR" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syria", code: "SY" },
  { name: "Taiwan", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "UAE", code: "AE" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Venezuela", code: "VE" },
  { name: "Vietnam", code: "VN" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

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

interface RawRow {
  label: string;
  value: string;
}

interface SearchResult {
  found: boolean;
  passport: string;
  nationality: string;
  nationalityLabel: string;
  status?: string;
  percentage?: string;
  name?: string;
  institution?: string;
  rawRows?: RawRow[];
  summary?: Summary;
  history?: HistoryEntry[];
  message?: string;
}

// Large Donut Chart Component matching EMGS design
const DonutChart = ({ percentage }: { percentage: number }) => {
  const radius = 80;
  const strokeWidth = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  // Color based on percentage
  const getColor = () => {
    if (percentage >= 100) return "#22c55e"; // Green
    if (percentage >= 50) return "#f59e0b"; // Amber/Orange
    return "#dc2626"; // Red
  };

  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke={getColor()}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span 
          className="text-4xl md:text-5xl font-bold"
          style={{ color: getColor() }}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
};

// Small ring icon for color info
const RingIcon = ({ color }: { color: string }) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke={color}
      strokeWidth="4"
      fill="none"
      strokeDasharray="40 60"
      transform="rotate(-90 12 12)"
    />
  </svg>
);

const ApplicationStatus = () => {
  const [passportNumber, setPassportNumber] = useState("");
  const [nationality, setNationality] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [historyExpanded, setHistoryExpanded] = useState(true);

  // Handle search submission
  const handleSearch = async () => {
    if (!passportNumber || !nationality) {
      setError("Please enter your travel document number and select your nationality.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSearchResult(null);
    setHasSearched(true);

    try {
      const response = await fetch("/api/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passport: passportNumber,
          nationality: nationality,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "An error occurred. Please try again.");
        return;
      }

      setSearchResult(data);

      if (!data.found) {
        setError(data.message || "No application found for the provided details.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Get percentage meaning text
  const getPercentageMeaning = (percentage: number | null | undefined, applicationType?: string | null) => {
    if (!percentage) return "Your application status is being retrieved.";
    const isRenewal = applicationType?.toLowerCase().includes("renewal");
    if (percentage >= 100) {
      return isRenewal 
        ? "Your Student Pass Renewal application has been completed."
        : "Your Student Pass application has been completed.";
    }
    if (percentage >= 50) {
      return "Your application is being processed by the Immigration Department.";
    }
    return "Your application is in progress with EMGS.";
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Track Application Status | NH Global Education</title>
        <meta
          name="description"
          content="Check the status of your Malaysia student visa application. Track your EMGS application progress in real-time."
        />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-primary">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative py-16 md:py-24 px-6 md:px-12 text-center">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Search className="w-4 h-4" />
                EMGS Application Tracker
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
                Check Application Status
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Enter your travel document number and nationality to check the current status of your Malaysia student visa application.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-8 md:mt-10 grid grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Shield, label: "Secure & Private", desc: "Your data is protected" },
              { icon: Clock, label: "Real-time Updates", desc: "Instant status check" },
              { icon: Globe, label: "24/7 Available", desc: "Check anytime, anywhere" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-4 md:p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-sm md:text-base font-semibold text-foreground mb-1">
                  {item.label}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground hidden md:block">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Form Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className={`mx-auto transition-all duration-500 ${searchResult?.found ? "max-w-4xl" : "max-w-2xl"}`}>
            {/* Search Card */}
            <Card className="border border-border rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 px-6 py-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground">Check Application Status</h2>
                    <p className="text-sm text-muted-foreground">Enter your details below</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Travel Document Number Field */}
                  <div className="space-y-2">
                    <Label htmlFor="passport" className="text-sm font-medium text-foreground">
                      Travel Document Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="passport"
                      placeholder="e.g., B12345678"
                      value={passportNumber}
                      onChange={(e) => setPassportNumber(e.target.value.toUpperCase())}
                      className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  {/* Nationality Field */}
                  <div className="space-y-2">
                    <Label htmlFor="nationality" className="text-sm font-medium text-foreground">
                      Nationality <span className="text-red-500">*</span>
                    </Label>
                    <Select value={nationality} onValueChange={setNationality}>
                      <SelectTrigger
                        id="nationality"
                        className="h-12 rounded-xl border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <SelectValue placeholder="Select your nationality" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.name}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mt-6 flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl border border-red-200">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  onClick={handleSearch}
                  disabled={isLoading}
                  className="w-full h-12 rounded-xl text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all mt-6"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Track Application
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Search Result - Success - EMGS Style */}
            {searchResult?.found && (
              <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Summary Card - EMGS Style */}
                <Card className="border border-border rounded-2xl overflow-hidden shadow-lg">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                      {/* Donut Chart - Left Side */}
                      <div className="flex justify-center lg:justify-start">
                        <DonutChart percentage={searchResult.summary?.percentageNum || 0} />
                      </div>

                      {/* Summary Details - Right Side */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1 border-b-2 border-primary pb-2">
                          Summary
                        </h3>
                        
                        <div className="mt-4 space-y-3">
                          {searchResult.summary?.fullName || searchResult.name ? (
                            <div className="flex flex-wrap">
                              <span className="font-semibold text-foreground w-52">Full Name:</span>
                              <span className="text-muted-foreground">{searchResult.summary?.fullName || searchResult.name}</span>
                            </div>
                          ) : null}
                          
                          <div className="flex flex-wrap">
                            <span className="font-semibold text-foreground w-52">Travel Document Number:</span>
                            <span className="text-muted-foreground">{searchResult.summary?.travelDocument || searchResult.passport}</span>
                          </div>
                          
                          {searchResult.summary?.applicationNumber && (
                            <div className="flex flex-wrap">
                              <span className="font-semibold text-foreground w-52">Application Number:</span>
                              <span className="text-muted-foreground">{searchResult.summary.applicationNumber}</span>
                            </div>
                          )}
                          
                          {searchResult.summary?.applicationType && (
                            <div className="flex flex-wrap">
                              <span className="font-semibold text-foreground w-52">Application Type:</span>
                              <span className="text-muted-foreground">{searchResult.summary.applicationType}</span>
                            </div>
                          )}
                          
                          {(searchResult.summary?.applicationStatus || searchResult.status) && (
                            <div className="flex flex-wrap">
                              <span className="font-semibold text-foreground w-52">Application Status:</span>
                              <span className="text-muted-foreground">{searchResult.summary?.applicationStatus || searchResult.status}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Important Notice - Yellow Bar */}
                    <div className="mt-8 bg-amber-400 text-amber-900 px-4 py-3 rounded-lg">
                      <p className="text-sm font-medium">
                        <strong>IMPORTANT:</strong> Kindly read the explanation below to understand the percentage.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Percentage Meaning & Color Info Card */}
                <Card className="border border-border rounded-2xl overflow-hidden shadow-lg">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* What does the percentage mean? */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">What does the percentage mean?</h4>
                        <div className="flex items-center gap-3">
                          <Badge 
                            className="text-lg px-4 py-2 font-bold"
                            style={{ 
                              backgroundColor: searchResult.summary?.percentageNum && searchResult.summary.percentageNum >= 100 
                                ? "#22c55e" 
                                : searchResult.summary?.percentageNum && searchResult.summary.percentageNum >= 50 
                                  ? "#f59e0b" 
                                  : "#dc2626",
                              color: "white"
                            }}
                          >
                            {searchResult.summary?.percentageNum || 0}%
                          </Badge>
                          <span className="text-muted-foreground">
                            {getPercentageMeaning(searchResult.summary?.percentageNum, searchResult.summary?.applicationType)}
                          </span>
                        </div>
                      </div>

                      {/* Color Info */}
                      <div>
                        <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-t-lg font-semibold text-sm">
                          Color Info:
                        </div>
                        <div className="border-2 border-red-600 rounded-b-lg rounded-tr-lg overflow-hidden">
                          <div className="p-4 space-y-3">
                            <div className="flex items-start gap-3">
                              <RingIcon color="#22c55e" />
                              <span className="text-sm text-muted-foreground">Your application is progressing accordingly.</span>
                            </div>
                            <div className="flex items-start gap-3 pt-2 border-t border-border">
                              <RingIcon color="#f59e0b" />
                              <span className="text-sm text-muted-foreground">Your application is pending additional documents or correction by your institution.</span>
                            </div>
                            <div className="flex items-start gap-3 pt-2 border-t border-border">
                              <RingIcon color="#dc2626" />
                              <span className="text-sm text-muted-foreground">Your application has been rejected/expired at the current stage. Please contact your institution for advice.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Application Progress History - Collapsible */}
                {searchResult.history && searchResult.history.length > 0 && (
                  <Card className="border border-border rounded-2xl overflow-hidden shadow-lg">
                    {/* Red Header */}
                    <button
                      onClick={() => setHistoryExpanded(!historyExpanded)}
                      className="w-full bg-red-700 text-white px-6 py-4 flex items-center justify-between hover:bg-red-800 transition-colors"
                    >
                      <span className="font-semibold flex items-center gap-2">
                        <ChevronDown className={`w-5 h-5 transition-transform ${historyExpanded ? "" : "-rotate-90"}`} />
                        Application Progress History
                      </span>
                    </button>

                    {historyExpanded && (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          {/* Green Table Header */}
                          <thead className="bg-green-600 text-white">
                            <tr>
                              <th className="px-6 py-3 text-left text-sm font-semibold w-36">Date</th>
                              <th className="px-6 py-3 text-left text-sm font-semibold w-48">Status</th>
                              <th className="px-6 py-3 text-left text-sm font-semibold">Remark</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border bg-card">
                            {[...searchResult.history].reverse().map((entry, index) => (
                              <tr key={index} className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 text-sm text-foreground whitespace-nowrap">
                                  {entry.date}
                                </td>
                                <td className="px-6 py-4 text-sm text-foreground">{entry.status}</td>
                                <td className="px-6 py-4 text-sm text-muted-foreground">
                                  {entry.remark || "-"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </Card>
                )}
              </div>
            )}

            {/* Not Found State */}
            {hasSearched && !searchResult?.found && !isLoading && (
              <Card className="mt-8 border border-border rounded-2xl overflow-hidden">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <XCircle className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Application Not Found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    We couldn&apos;t find an application matching your details. Please verify your travel document number and nationality, then try again.
                  </p>
                  <Button variant="outline" onClick={() => setHasSearched(false)} className="rounded-xl">
                    Try Again
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Disclaimer */}
            <div className="mt-8 bg-muted/50 rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong>Disclaimer:</strong> This application status tracker retrieves data from the official
                    Education Malaysia Global Services (EMGS) portal. NH Global Education is <strong>not affiliated</strong> with EMGS or the Malaysian government.
                  </p>
                  <p>
                    For official verification, please visit the{" "}
                    <a
                      href="https://visa.educationmalaysia.gov.my/emgs/application/searchForm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      EMGS Official Portal
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If you&apos;re having trouble tracking your application or have any questions, our team is here to help.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-sm"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationStatus;
