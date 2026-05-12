import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
  GraduationCap,
  Globe2,
  Sparkles,
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const DEFAULT_IMAGE = "https://via.placeholder.com/600x400?text=University+Campus";

interface University {
  id: number;
  name: string;
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
    per_page: 9,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUniversities = async (params: { [key: string]: string }) => {
    setLoading(true);
    setError("");
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
    const storageUrl = import.meta.env.VITE_STORAGE_URL || "http://localhost:5000/storage";

    try {
      const response = await axios.get(`${baseUrl}/api/universities`, { params });
      if (response.data.status === "success") {
        const universitiesData = response.data.data.map((data: any) => ({
          id: data.id,
          name: data.name,
          image: data.image ? `${storageUrl}/${data.image}` : DEFAULT_IMAGE,
        }));
        setUniversities(universitiesData);
        setPagination(response.data.pagination);
      } else {
        setError("No universities found.");
      }
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || "Failed to fetch universities.";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      try {
        const response = await axios.get(`${baseUrl}/api/countries`);
        if (response.data.status === "success") {
          setCountries([{ id: 0, name: "all" }, ...response.data.data]);
        }
      } catch (err) {
        // Silent fail — country list is optional
      }
    };

    fetchCountries();
    fetchUniversities({ limit: "9", page: "1" });
  }, []);

  const buildParams = (page: number) => {
    const params: { [key: string]: string } = { limit: "9", page: page.toString() };
    if (searchTerm) params.search = searchTerm;
    if (selectedCountry !== "all") {
      const country = countries.find((c) => c.name === selectedCountry);
      if (country && country.id !== 0) params.country = country.id.toString();
    }
    return params;
  };

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    setPagination({ ...pagination, current_page: 1 });
    fetchUniversities(buildParams(1));
  };

  const handlePageChange = (newPage: number) => {
    fetchUniversities(buildParams(newPage));
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCountry("all");
    fetchUniversities({ limit: "9", page: "1" });
  };

  const hasActiveFilters = searchTerm.length > 0 || selectedCountry !== "all";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-12 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-primary">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative py-16 md:py-20 px-6 md:px-12 text-center">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                World-Class Universities
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
                Find Your Perfect University
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Discover top-ranked universities worldwide and find your perfect
                academic destination with expert guidance.
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-8 md:mt-10 grid grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Building2, number: "150+", label: "Partner Universities" },
              { icon: Globe2, number: "20+", label: "Countries" },
              { icon: GraduationCap, number: "5000+", label: "Students Placed" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-4 md:p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="pb-8 md:pb-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <form
              onSubmit={handleSearch}
              className="bg-card border border-border rounded-2xl shadow-lg p-4 md:p-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-3">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search universities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-11 pl-10 rounded-xl"
                  />
                </div>

                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="h-11 rounded-xl md:min-w-[200px]">
                    <SelectValue placeholder="All Countries" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.id} value={country.name}>
                        {country.name === "all" ? "All Countries" : country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  type="submit"
                  className="h-11 px-6 rounded-xl shadow-md shadow-primary/20"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>

              {hasActiveFilters && (
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Active filters:</span>
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium">
                      &quot;{searchTerm}&quot;
                    </span>
                  )}
                  {selectedCountry !== "all" && (
                    <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium">
                      {selectedCountry}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground ml-auto"
                  >
                    <X className="w-3 h-3" />
                    Clear all
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Results header */}
          {!loading && !error && universities.length > 0 && (
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-semibold text-foreground">
                {pagination.total_items > 0
                  ? `${pagination.total_items} Universities Found`
                  : "Universities"}
              </h2>
              <span className="text-sm text-muted-foreground hidden md:inline-flex">
                Page {pagination.current_page} of {pagination.total_pages}
              </span>
            </div>
          )}

          {/* Loading state */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl overflow-hidden animate-pulse"
                >
                  <div className="aspect-[16/10] bg-muted" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="h-9 bg-muted rounded-xl mt-4" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error state */}
          {!loading && error && (
            <div className="max-w-md mx-auto text-center py-12">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {error}
              </h3>
              <Button onClick={() => handleSearch()} className="mt-4 rounded-xl">
                Try Again
              </Button>
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && universities.length === 0 && (
            <div className="max-w-md mx-auto text-center py-12">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No universities found
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Try adjusting your filters or search with different keywords.
              </p>
              <Button onClick={clearFilters} variant="outline" className="rounded-xl">
                <X className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          )}

          {/* Cards Grid */}
          {!loading && !error && universities.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {universities.map((university) => (
                <Link
                  key={university.id}
                  to={`/university/${university.id}`}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={university.image}
                      alt={university.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = DEFAULT_IMAGE;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base md:text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {university.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm font-medium text-foreground">
                        View Details
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && !error && universities.length > 0 && pagination.total_pages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <Button
                onClick={() => handlePageChange(pagination.current_page - 1)}
                disabled={pagination.current_page === 1}
                variant="outline"
                size="sm"
                className="rounded-xl"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>

              <div className="flex items-center gap-1 px-3 text-sm text-foreground">
                Page <span className="font-semibold">{pagination.current_page}</span>
                <span className="text-muted-foreground">of</span>
                <span className="font-semibold">{pagination.total_pages}</span>
              </div>

              <Button
                onClick={() => handlePageChange(pagination.current_page + 1)}
                disabled={pagination.current_page === pagination.total_pages}
                variant="outline"
                size="sm"
                className="rounded-xl"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
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
