import { useState } from "react";
import axios from "axios";
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
  Loader2
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";

// Countries list
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", 
  "Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Belarus", "Belgium", 
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
  "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia", 
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Ecuador", 
  "Egypt", "Estonia", "Ethiopia", "Finland", "France", "Georgia", "Germany", "Ghana", 
  "Greece", "Guatemala", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", 
  "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", 
  "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Libya", 
  "Lithuania", "Luxembourg", "Macau", "Malaysia", "Maldives", "Malta", "Mexico", 
  "Moldova", "Monaco", "Mongolia", "Morocco", "Myanmar", "Nepal", "Netherlands", 
  "New Zealand", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palestine", 
  "Panama", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
  "Saudi Arabia", "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", 
  "South Korea", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", 
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tunisia", "Turkey", "Turkmenistan", 
  "UAE", "Uganda", "Ukraine", "United Kingdom", "United States", "Uzbekistan", 
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// Define status configuration
type StatusType = "pending" | "approved" | "rejected" | "in_review";

const statusConfig: Record<StatusType, {
  variant: "default" | "destructive" | "outline" | "secondary";
  color: string;
  icon: any;
  bgColor: string;
  borderColor: string;
  label: string;
}> = {
  pending: {
    variant: "secondary",
    color: "text-amber-600",
    icon: Clock,
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    label: "Pending Review",
  },
  approved: {
    variant: "default",
    color: "text-emerald-600",
    icon: CheckCircle,
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    label: "Approved",
  },
  rejected: {
    variant: "destructive",
    color: "text-red-600",
    icon: XCircle,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    label: "Rejected",
  },
  in_review: {
    variant: "outline",
    color: "text-blue-600",
    icon: AlertCircle,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    label: "In Review",
  },
};

const ApplicationStatus = () => {
  const [passportNumber, setPassportNumber] = useState("");
  const [nationality, setNationality] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  // Handle search submission
  const handleSearch = async () => {
    if (!passportNumber || !nationality) {
      setError("Please enter your passport number and select your nationality.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSearchResult(null);
    setHasSearched(true);

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await axios.post(`${baseUrl}/api/application-status`, {
        passport_number: passportNumber,
        nationality: nationality,
      });

      if (response.data.status === "success") {
        setSearchResult(response.data.data);
      } else {
        setError(response.data.message || "Application not found.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Application not found. Please check your details and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Render status icon
  const StatusIcon = ({ status }: { status: StatusType }) => {
    const config = statusConfig[status] || statusConfig.pending;
    const IconComponent = config.icon;
    return <IconComponent className={`w-6 h-6 ${config.color}`} />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Track Application Status | NH Global Education</title>
        <meta
          name="description"
          content="Check the status of your university application with NH Global Education. Track your application progress in real-time."
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
                Application Tracker
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
                Track Your Application Status
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Enter your passport number and nationality to check the current status of your university application.
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
          <div className="max-w-2xl mx-auto">
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
                <div className="space-y-6">
                  {/* Passport Number Field */}
                  <div className="space-y-2">
                    <Label htmlFor="passport" className="text-sm font-medium text-foreground">
                      Passport Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="passport"
                      placeholder="Enter your passport number (e.g., A00686202)"
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
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl border border-red-200">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button 
                    onClick={handleSearch} 
                    disabled={isLoading}
                    className="w-full h-12 rounded-xl text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
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
                </div>
              </CardContent>
            </Card>

            {/* Search Result */}
            {searchResult && (
              <Card className="mt-8 border border-border rounded-2xl overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className={`px-6 py-4 border-b ${statusConfig[searchResult.status]?.bgColor || 'bg-muted'} ${statusConfig[searchResult.status]?.borderColor || 'border-border'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <StatusIcon status={searchResult.status} />
                      <div>
                        <h3 className="font-semibold text-foreground">Application Found</h3>
                        <p className="text-sm text-muted-foreground">
                          Last updated: {new Date(searchResult.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Badge 
                      variant={statusConfig[searchResult.status]?.variant || "secondary"}
                      className="text-sm px-3 py-1"
                    >
                      {statusConfig[searchResult.status]?.label || "Pending Review"}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Application Details */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" />
                        Application Details
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Passport Number</span>
                          <span className="font-medium text-foreground">{searchResult.application_id}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Name</span>
                          <span className="font-medium text-foreground">{searchResult.name}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Submitted Date</span>
                          <span className="font-medium text-foreground">
                            {new Date(searchResult.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Status Details */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        Status Information
                      </h4>
                      <div className={`p-5 rounded-xl ${statusConfig[searchResult.status]?.bgColor || 'bg-muted'} border ${statusConfig[searchResult.status]?.borderColor || 'border-border'}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <StatusIcon status={searchResult.status} />
                          <span className={`font-semibold ${statusConfig[searchResult.status]?.color || 'text-foreground'}`}>
                            {statusConfig[searchResult.status]?.label || "Pending Review"}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Your application is currently {statusConfig[searchResult.status]?.label.toLowerCase() || "pending review"}. 
                          We will notify you of any updates via email.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Not Found State */}
            {hasSearched && !searchResult && !isLoading && error && (
              <Card className="mt-8 border border-border rounded-2xl overflow-hidden">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <XCircle className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Application Not Found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We couldn&apos;t find an application matching your details. Please verify your passport number and nationality, then try again.
                  </p>
                </CardContent>
              </Card>
            )}

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
