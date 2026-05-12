import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CalendarIcon, MapPinIcon, SearchIcon, UsersIcon } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Placeholder image (used as fallback if data.image is missing)
const DEFAULT_IMAGE = "https://via.placeholder.com/400x200?text=University+Campus";

interface University {
  id: number;
  name: string;
  city: string;
  country: string;
  founded: string;
  students: string;
  description: string;
  programs: string[];
  tuitionFee: string;
  acceptanceRate: string;
  applicationDeadline: string;
  ranking: string;
  image: string;
}

interface Country {
  id: number;
  name: string;
}

interface Pagination {
  current_page: number;
  total_pages: number;
  total_items: number;
  per_page: number;
}

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [universities, setUniversities] = useState<University[]>([]);
  const [countries, setCountries] = useState<Country[]>([{ id: 0, name: "all" }]);
  const [pagination, setPagination] = useState<Pagination>({
    current_page: 1,
    total_pages: 1,
    total_items: 0,
    per_page: 5,
  });
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch universities with query parameters
  const fetchUniversities = async (params: { [key: string]: string }) => {
    setLoading(true);
    setImageLoading(true);
    setError("");
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
    const storageUrl = import.meta.env.VITE_STORAGE_URL || "http://localhost:5000/storage";
    console.log("Fetching universities with base URL:", baseUrl);
    console.log("Storage URL:", storageUrl);
    console.log("Request params:", params);

    try {
      const response = await axios.get(`${baseUrl}/api/universities`, { params });
      console.log("Universities response:", response.data);
      if (response.data.status === "success") {
        const universitiesData = response.data.data.map((data: any) => {
          return {
            id: data.id,
            name: data.name,
            image: data.image ? `${storageUrl}/${data.image}` : DEFAULT_IMAGE,
          };
        });

        // Wait for all images to load
        const imagePromises = universitiesData.map((uni) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = uni.image;
            img.onload = () => resolve();
            img.onerror = () => resolve(); // Resolve even on error to avoid hanging
          })
        );

        await Promise.all(imagePromises);
        console.log("All images loaded");

        setUniversities(universitiesData);
        setPagination(response.data.pagination);
        console.log("Set universities:", universitiesData);
        console.log("Set pagination:", response.data.pagination);
      } else {
        setError("No universities found.");
        console.warn("Unexpected response status:", response.data);
      }
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || "Failed to fetch universities.";
      setError(errorMsg);
      console.error("Error fetching universities:", err.message, err.response?.data);
    } finally {
      setLoading(false);
      setImageLoading(false);
      console.log("Loading and imageLoading set to false");
    }
  };

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      console.log("Fetching countries with base URL:", baseUrl);

      try {
        const response = await axios.get(`${baseUrl}/api/countries`);
        console.log("Countries response:", response.data);
        if (response.data.status === "success") {
          setCountries([{ id: 0, name: "all" }, ...response.data.data]);
          console.log("Set countries:", [{ id: 0, name: "all" }, ...response.data.data]);
        } else {
          setError("Failed to fetch countries.");
          console.warn("Unexpected countries response status:", response.data);
        }
      } catch (err: any) {
        const errorMsg = err.response?.data?.message || "Failed to fetch countries.";
        setError(errorMsg);
        console.error("Error fetching countries:", err.message, err.response?.data);
      }
    };

    fetchCountries();

    // Initial fetch for universities
    fetchUniversities({ limit: "5", page: "1" });
  }, []);

  // Handle search button click
  const handleSearch = () => {
    const params: { [key: string]: string } = { limit: "5", page: "1" };
    if (searchTerm) params.search = searchTerm;
    if (selectedCountry !== "all") {
      const country = countries.find((c) => c.name === selectedCountry);
      if (country && country.id !== 0) params.country = country.id.toString();
    }
    console.log("Search triggered with params:", params);
    setPagination({ ...pagination, current_page: 1 }); // Reset to page 1 on new search
    fetchUniversities(params);
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    const params: { [key: string]: string } = { limit: "5", page: newPage.toString() };
    if (searchTerm) params.search = searchTerm;
    if (selectedCountry !== "all") {
      const country = countries.find((c) => c.name === selectedCountry);
      if (country && country.id !== 0) params.country = country.id.toString();
    }
    console.log("Page change triggered with params:", params);
    fetchUniversities(params);
  };

  // Handle loading state with spinner
  if (loading || imageLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-foreground text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">{error}</h1>
          <Button onClick={handleSearch}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 pt-[120px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
            World-Class Universities
          </h1>
          <p className="md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover top-ranked universities worldwide and find your perfect academic destination.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md w-full">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 "
              />
            </div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4  w-full md:w-auto py-2 border border-border rounded-md bg-background text-foreground"
            >
              {countries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name === "all" ? "All Countries" : country.name}
                </option>
              ))}
            </select>
            <Button onClick={handleSearch} className="bg-primary text-primary-foreground w-full md:w-auto">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university) => (
              <Card
                key={university.id}
                className="group hover:shadow-glow transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => (window.location.href = `/university/${university.id}`)}
              >
                <div className="relative">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {university.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">

                  <div className="space-y-3">
                    <Button
                      className="w-full mt-4"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/university/${university.id}`;
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {universities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No universities found matching your search criteria.
              </p>
            </div>
          )}

          {/* Pagination Controls */}
          {universities.length > 0 && (
            <div className="mt-8 flex justify-center items-center gap-4">
              <Button
                onClick={() => handlePageChange(pagination.current_page - 1)}
                disabled={pagination.current_page === 1}
                variant="outline"
              >
                Previous
              </Button>
              <span className="text-foreground">
                Page {pagination.current_page} of {pagination.total_pages}
              </span>
              <Button
                onClick={() => handlePageChange(pagination.current_page + 1)}
                disabled={pagination.current_page === pagination.total_pages}
                variant="outline"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;