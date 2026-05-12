import { useState } from "react";
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
  Search,
  FileText,
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
    <div className="relative w-44 h-44 md:w-52 md:h-52">
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
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
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

      {/* Main Content - Form at Top */}
      <section className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Check Application Status
              </h1>
              <p className="text-muted-foreground">
                Enter your travel document number and nationality to track your application
              </p>
            </div>

            {/* Search Form Card */}
            <Card className="border border-border rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-primary px-5 py-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                  <span className="font-semibold text-primary-foreground text-sm uppercase tracking-wide">
                    Check Application Status
                  </span>
                </div>
              </div>

              <CardContent className="p-5 md:p-6">
                <div className="space-y-5">
                  {/* Travel Document Number Field */}
                  <div className="space-y-2">
                    <Label htmlFor="passport" className="text-sm font-medium text-foreground">
                      Travel Document Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="passport"
                      placeholder="Enter your passport number"
                      value={passportNumber}
                      onChange={(e) => setPassportNumber(e.target.value.toUpperCase())}
                      className="h-11 rounded-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
                        className="h-11 rounded-lg border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary"
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

                  {/* Error Message */}
                  {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg border border-red-200">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    onClick={handleSearch}
                    disabled={isLoading}
                    className="w-full h-11 rounded-lg text-base font-medium"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Check Status
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Search Result - Success - EMGS Style */}
            {searchResult?.found && (
              <div className="mt-8 space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Summary Card - EMGS Style */}
                <Card className="border border-border rounded-lg overflow-hidden">
                  <CardContent className="p-5 md:p-6">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      {/* Donut Chart - Left Side */}
                      <div className="flex justify-center md:justify-start">
                        <DonutChart percentage={searchResult.summary?.percentageNum || 0} />
                      </div>

                      {/* Summary Details - Right Side */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground border-b-2 border-foreground pb-2 mb-4">
                          Summary
                        </h3>
                        
                        <div className="space-y-2.5 text-sm">
                          {searchResult.summary?.fullName || searchResult.name ? (
                            <div className="flex flex-wrap gap-1">
                              <span className="font-semibold text-foreground min-w-[180px]">Full Name:</span>
                              <span className="text-muted-foreground">{searchResult.summary?.fullName || searchResult.name}</span>
                            </div>
                          ) : null}
                          
                          <div className="flex flex-wrap gap-1">
                            <span className="font-semibold text-foreground min-w-[180px]">Travel Document Number:</span>
                            <span className="text-muted-foreground">{searchResult.summary?.travelDocument || searchResult.passport}</span>
                          </div>
                          
                          {searchResult.summary?.applicationNumber && (
                            <div className="flex flex-wrap gap-1">
                              <span className="font-semibold text-foreground min-w-[180px]">Application Number:</span>
                              <span className="text-muted-foreground">{searchResult.summary.applicationNumber}</span>
                            </div>
                          )}
                          
                          {searchResult.summary?.applicationType && (
                            <div className="flex flex-wrap gap-1">
                              <span className="font-semibold text-foreground min-w-[180px]">Application Type:</span>
                              <span className="text-muted-foreground">{searchResult.summary.applicationType}</span>
                            </div>
                          )}
                          
                          {(searchResult.summary?.applicationStatus || searchResult.status) && (
                            <div className="flex flex-wrap gap-1">
                              <span className="font-semibold text-foreground min-w-[180px]">Application Status:</span>
                              <span className="text-muted-foreground">{searchResult.summary?.applicationStatus || searchResult.status}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Important Notice */}
                  <div className="bg-amber-400 px-5 py-3">
                    <p className="text-sm text-amber-900 font-medium">
                      <span className="font-bold">IMPORTANT:</span> Kindly read the explanation below to understand the percentage.
                    </p>
                  </div>
                </Card>

                {/* Percentage Meaning & Color Info */}
                <Card className="border border-border rounded-lg overflow-hidden">
                  <CardContent className="p-5 md:p-6">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      {/* What does percentage mean */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-3">What does the percentage mean?</h4>
                        <div className="flex items-center gap-3">
                          <span 
                            className="px-3 py-1.5 rounded text-white text-sm font-bold"
                            style={{ 
                              backgroundColor: (searchResult.summary?.percentageNum || 0) >= 100 
                                ? "#22c55e" 
                                : (searchResult.summary?.percentageNum || 0) >= 50 
                                  ? "#f59e0b" 
                                  : "#dc2626" 
                            }}
                          >
                            {searchResult.summary?.percentageNum || 0}%
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {getPercentageMeaning(searchResult.summary?.percentageNum, searchResult.summary?.applicationType)}
                          </span>
                        </div>
                      </div>

                      {/* Color Info Box */}
                      <div className="md:w-80">
                        <div className="border border-red-500 rounded overflow-hidden">
                          <div className="bg-red-500 px-3 py-2">
                            <span className="text-white font-semibold text-sm">Color Info:</span>
                          </div>
                          <div className="divide-y divide-gray-200">
                            <div className="flex items-start gap-3 p-3">
                              <RingIcon color="#22c55e" />
                              <span className="text-xs text-muted-foreground">Your application is progressing accordingly.</span>
                            </div>
                            <div className="flex items-start gap-3 p-3">
                              <RingIcon color="#f59e0b" />
                              <span className="text-xs text-muted-foreground">Your application is pending additional documents or correction by your institution.</span>
                            </div>
                            <div className="flex items-start gap-3 p-3">
                              <RingIcon color="#dc2626" />
                              <span className="text-xs text-muted-foreground">Your application has been rejected/expired at the current stage. Please contact your institution for advice.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Application Progress History */}
                {searchResult.history && searchResult.history.length > 0 && (
                  <Card className="border border-border rounded-lg overflow-hidden">
                    {/* Collapsible Header */}
                    <button
                      onClick={() => setHistoryExpanded(!historyExpanded)}
                      className="w-full bg-red-600 hover:bg-red-700 px-5 py-3 flex items-center justify-between transition-colors"
                    >
                      <span className="font-semibold text-white text-sm">Application Progress History</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-white transition-transform duration-200 ${
                          historyExpanded ? "rotate-180" : ""
                        }`} 
                      />
                    </button>

                    {/* History Table */}
                    {historyExpanded && (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-green-600 text-white">
                              <th className="px-4 py-3 text-left text-sm font-semibold w-32">Date</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold w-44">Status</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold">Remark</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {searchResult.history.map((entry, index) => (
                              <tr 
                                key={index} 
                                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                              >
                                <td className="px-4 py-3 text-sm text-muted-foreground whitespace-nowrap">
                                  {entry.date}
                                </td>
                                <td className="px-4 py-3 text-sm text-muted-foreground">
                                  {entry.status}
                                </td>
                                <td className="px-4 py-3 text-sm text-muted-foreground">
                                  {entry.remark}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </Card>
                )}

                {/* Disclaimer */}
                <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/30 px-4 py-3 rounded-lg">
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>
                    This tracker retrieves data from the official EMGS portal. For official verification, please visit{" "}
                    <a 
                      href="https://visa.educationmalaysia.gov.my/emgs/application/track/index" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      EMGS Portal <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </div>
              </div>
            )}

            {/* Not Found State */}
            {hasSearched && !isLoading && !searchResult?.found && !error && (
              <Card className="mt-8 border border-border rounded-lg overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Application Found</h3>
                  <p className="text-muted-foreground text-sm mb-4 max-w-md mx-auto">
                    We couldn&apos;t find any application matching the provided details. Please check your travel document number and nationality.
                  </p>
                  <Button variant="outline" onClick={() => { setHasSearched(false); setPassportNumber(""); setNationality(""); }}>
                    Try Again
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationStatus;
