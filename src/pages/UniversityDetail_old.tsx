import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, ClockIcon, DollarSignIcon, GraduationCapIcon, MapPinIcon, TrendingUpIcon, UsersIcon } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



const UniversityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [university, setUniversity] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch university data from backend
  useEffect(() => {
    const fetchUniversity = async () => {
      setLoading(true);
      setError("");
      const baseUrl = import.meta.env.VITE_API_BASE_URL ;

      try {
        const response = await axios.get(`${baseUrl}/api/universities/${id}`);
        if (response.data.status === "success") {
          const data = response.data.data;
          // Parse location into city and country
          const [city, ...countryParts] = data.location.split(", ");
          const country = countryParts.join(", ");
          setUniversity({
            id: data.id,
            name: data.name,
            city,
            country,
            image:data.image,
            founded: data.founded,
            students: data.students.toLocaleString(),
            acceptanceRate: `${data.acceptance_rate}%`,
            tuitionFee: `$${data.tuition_fees.toLocaleString()}`,
            description: data.description, // HTML content
            programs: data.programs,
            highlights: data.highlights,
            requirements: data.requirements,
            campusLife: data.campus_life, // HTML content
            careerProspects: data.career_prospects, // HTML content
            applicationDeadline: new Date(data.deadline).toLocaleDateString(),
            ranking: `#${data.id} Global`, // Placeholder ranking
          });
        } else {
          setError("University not found.");
        }
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch university data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUniversity();
  }, [id]);

  // Handle loading state with spinner
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-foreground text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // Handle error or not found
  if (error || !university) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {error || "University Not Found"}
          </h1>
          <Button onClick={() => navigate("/universities")}>
            Back to Universities
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ import.meta.env.VITE_STORAGE_URL}/${university.image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center text-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-4xl font-bold mb-2">{university.name}</h1>
              <div className="flex items-center  text-xl">
                {university.city}, {university.country}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <CalendarIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{university.founded}</div>
              <div className="text-muted-foreground">Founded</div>
            </div>
            <div className="text-center">
              <UsersIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{university.students}</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <TrendingUpIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{university.acceptanceRate}</div>
              <div className="text-muted-foreground">Acceptance Rate</div>
            </div>
            <div className="text-center">
              <DollarSignIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{university.tuitionFee}</div>
              <div className="text-muted-foreground">Tuition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">About {university.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground leading-relaxed">
                    {parse(university.description)}
                  </div>
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">University Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {university.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Available Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {university.programs.map((program: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {program}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Campus Life */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Campus Life</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground leading-relaxed">
                    {parse(university.campusLife)}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Application Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Application Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium text-foreground">Application Deadline</div>
                      <div className="text-muted-foreground">{university.applicationDeadline}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <TrendingUpIcon className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium text-foreground">Acceptance Rate</div>
                      <div className="text-muted-foreground">{university.acceptanceRate}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <DollarSignIcon className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium text-foreground">Tuition Fee</div>
                      <div className="text-muted-foreground">{university.tuitionFee}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Entry Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {university.requirements.map((requirement: string, index: number) => (
                      <li key={index} className="text-muted-foreground text-sm">
                        • {requirement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Career Prospects */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Career Prospects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground text-sm leading-relaxed">
                    {parse(university.careerProspects)}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-4 mb-4">
                <Link to="/application">
                  <Button className="w-full" size="lg">
                    <GraduationCapIcon className="mr-2 h-5 w-5 " />
                    Apply Now
                  </Button>
                </Link>
                  </div>
                <Link to="/contact">
                  <Button variant="outline" className="w-full mt-4">
                    Contact Advisor
                  </Button>
                </Link>
            
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UniversityDetail;