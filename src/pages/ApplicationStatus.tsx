import { useState } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertCircle, CheckCircle, Clock, Search, XCircle } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Define status configuration
type StatusType = "pending" | "approved" | "rejected" | "in_review";

const statusConfig: Record<StatusType, {
  variant: "default" | "destructive" | "outline" | "secondary";
  color: string;
  icon: any;
  bgColor: string;
  label: string;
}> = {
  pending: {
    variant: "secondary",
    color: "text-yellow-600",
    icon: Clock,
    bgColor: "bg-yellow-50",
    label: "Pending Review",
  },
  approved: {
    variant: "default",
    color: "text-green-600",
    icon: CheckCircle,
    bgColor: "bg-green-50",
    label: "Approved",
  },
  rejected: {
    variant: "destructive",
    color: "text-red-600",
    icon: XCircle,
    bgColor: "bg-red-50",
    label: "Rejected",
  },
  in_review: {
    variant: "outline",
    color: "text-blue-600",
    icon: AlertCircle,
    bgColor: "bg-blue-50",
    label: "In Review",
  },
};

const ApplicationStatus = () => {
  const [passportNumber, setPassportNumber] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle search submission
  const handleSearch = async () => {
    if ( !passportNumber) {
      setError("Please enter both email and passport number.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSearchResult(null);

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await axios.post(`${baseUrl}/api/application-status`, {
        passport_number: passportNumber,
      });

      if (response.data.status === "success") {
        setSearchResult(response.data.data);
      } else {
        setError(response.data.message || "Application not found.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Render status icon
  const StatusIcon = ({ status }: { status: StatusType }) => {
    const config = statusConfig[status] || statusConfig.pending;
    const IconComponent = config.icon;
    return <IconComponent className={`w-5 h-5 ${config.color}`} />;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle mt-10">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4">
              Application Status Tracker
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Check the status of your university application
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Track Your Application
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="md:flex items-center">
                <Input
                  placeholder="Enter Passport Number (e.g., AB123456)"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value)}
                  className="flex-1"
                />
                <Button className="mt-3 md:mt-auto w-full md:w-auto" onClick={handleSearch} variant="hero" disabled={isLoading}>
                  {isLoading ? "Searching..." : "Search"}
                </Button>
                {error && (
                  <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Search Result */}
          {searchResult && (
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Application Details</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm text-muted-foreground">Passport Number</label>
                        <p className="font-medium">{searchResult.application_id}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Name</label>
                        <p className="font-medium">{searchResult.name}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Submitted Date</label>
                        <p className="font-medium">
                          {new Date(searchResult.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Last Update</label>
                        <p className="font-medium">
                          {new Date(searchResult.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Current Status</h3>
                    <div className={`p-4 rounded-lg ${statusConfig[searchResult.status]?.bgColor || statusConfig.pending.bgColor} mb-4`}>
                      <div className="flex items-center gap-3 mb-2">
                        <StatusIcon status={searchResult.status} />
                        <Badge variant={statusConfig[searchResult.status]?.variant || statusConfig.pending.variant}>
                          {statusConfig[searchResult.status]?.label || "Pending Review"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your application is currently {statusConfig[searchResult.status]?.label.toLowerCase() || "pending review"}.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Error or Not Found */}
          {error && !searchResult && (
            <Card className="mb-8">
              <CardContent className="text-center py-8">
                <XCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Application Not Found</h3>
                <p className="text-muted-foreground">
                  Please check your email and passport number and try again.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApplicationStatus;