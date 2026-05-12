import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  Users,
  Calendar,
  Award,
  GraduationCap,
  ArrowRight,
  Globe2,
  Building2,
  Sparkles,
  X,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface University {
  id: number;
  name: string;
  shortName: string;
  city: string;
  country: string;
  countryCode: string;
  founded: string;
  students: string;
  description: string;
  programs: string[];
  ranking: string;
  featured?: boolean;
  image: string;
}

const COUNTRIES = [
  { code: "all", name: "All Countries", flag: "🌍" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
];

const UNIVERSITIES: University[] = [
  {
    id: 1,
    name: "City University Malaysia",
    shortName: "CityU",
    city: "Petaling Jaya",
    country: "Malaysia",
    countryCode: "MY",
    founded: "1984",
    students: "12,000+",
    description:
      "A premier private university offering industry-relevant programs in business, engineering, and creative arts.",
    programs: ["Business", "Engineering", "IT", "Design"],
    ranking: "Top 50 Malaysia",
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "INTI International University",
    shortName: "INTI",
    city: "Nilai",
    country: "Malaysia",
    countryCode: "MY",
    founded: "1986",
    students: "17,000+",
    description:
      "Part of the Laureate International Universities network with strong industry partnerships and global recognition.",
    programs: ["Business", "Engineering", "Hospitality", "Health Sciences"],
    ranking: "QS 5-Star Rated",
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "University of Cyberjaya",
    shortName: "UoC",
    city: "Cyberjaya",
    country: "Malaysia",
    countryCode: "MY",
    founded: "2005",
    students: "8,500+",
    description:
      "Leading institution for medical, pharmacy, and health sciences education in Malaysia's tech hub.",
    programs: ["Medicine", "Pharmacy", "Health Sciences", "Psychology"],
    ranking: "Top Medical School",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    name: "SEGi University & Colleges",
    shortName: "SEGi",
    city: "Kota Damansara",
    country: "Malaysia",
    countryCode: "MY",
    founded: "1977",
    students: "25,000+",
    description:
      "One of Malaysia's largest private higher education providers with 5 campuses nationwide.",
    programs: ["Business", "Engineering", "Medicine", "Education"],
    ranking: "QS 5-Star University",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    name: "Asia Pacific University",
    shortName: "APU",
    city: "Kuala Lumpur",
    country: "Malaysia",
    countryCode: "MY",
    founded: "1993",
    students: "13,000+",
    description:
      "Premier university for technology and innovation with strong tech industry connections.",
    programs: ["IT", "Computing", "Business", "Engineering"],
    ranking: "Premier Digital Tech",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    name: "Taylor's University",
    shortName: "Taylor's",
    city: "Subang Jaya",
    country: "Malaysia",
    countryCode: "MY",
    founded: "1969",
    students: "14,000+",
    description:
      "Ranked #1 private university in Malaysia and Southeast Asia by QS World University Rankings.",
    programs: ["Hospitality", "Business", "Design", "Engineering"],
    ranking: "#1 Private Malaysia",
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
];

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");

  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES.filter((uni) => {
      const matchesCountry =
        selectedCountry === "all" || uni.countryCode === selectedCountry;
      const matchesSearch =
        !searchTerm ||
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.programs.some((p) =>
          p.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCountry && matchesSearch;
    });
  }, [searchTerm, selectedCountry]);

  const countryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: UNIVERSITIES.length };
    UNIVERSITIES.forEach((uni) => {
      counts[uni.countryCode] = (counts[uni.countryCode] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-8 md:pb-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 px-6 py-16 md:px-12 md:py-24">
            {/* Radial gradient overlays */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)",
              }}
            />

            <div className="relative max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm font-medium mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>150+ Partner Universities Worldwide</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-balance leading-tight">
                Find Your Perfect University
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
                Explore world-class universities across the globe. Filter by
                country, search by program, and discover your ideal academic
                destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Building2, label: "Universities", value: "150+" },
              { icon: Globe2, label: "Countries", value: "12+" },
              { icon: GraduationCap, label: "Programs", value: "500+" },
              { icon: Award, label: "Top Ranked", value: "QS 5-Star" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-foreground leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6 md:mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by university name, city, or program..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-12 h-14 text-base rounded-2xl border-border bg-card shadow-sm focus-visible:ring-primary"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Country Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {COUNTRIES.map((country) => {
              const count = countryCounts[country.code] || 0;
              const isActive = selectedCountry === country.code;
              if (country.code !== "all" && count === 0) return null;
              return (
                <button
                  key={country.code}
                  onClick={() => setSelectedCountry(country.code)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-card text-foreground border-border hover:border-primary/30 hover:bg-primary/5"
                  }`}
                >
                  <span className="text-base leading-none">{country.flag}</span>
                  <span>{country.name}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Header */}
      <section className="pb-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                {filteredUniversities.length}{" "}
                {filteredUniversities.length === 1 ? "University" : "Universities"}{" "}
                Found
              </h2>
              {(searchTerm || selectedCountry !== "all") && (
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedCountry !== "all" && (
                    <>
                      in{" "}
                      {COUNTRIES.find((c) => c.code === selectedCountry)?.name}
                    </>
                  )}
                  {searchTerm && (
                    <>
                      {selectedCountry !== "all" ? " matching " : "matching "}
                      <span className="font-medium text-foreground">
                        "{searchTerm}"
                      </span>
                    </>
                  )}
                </p>
              )}
            </div>
            {(searchTerm || selectedCountry !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCountry("all");
                }}
                className="text-sm font-medium text-primary hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* University Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {filteredUniversities.length === 0 ? (
            <div className="text-center py-16 md:py-24">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                No Universities Found
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                We couldn't find any universities matching your filters. Try
                adjusting your search or selecting a different country.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCountry("all");
                }}
                variant="outline"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {filteredUniversities.map((university) => {
                const countryFlag =
                  COUNTRIES.find((c) => c.code === university.countryCode)
                    ?.flag || "🌍";
                return (
                  <Link
                    key={university.id}
                    to={`/university/${university.id}`}
                    className="group relative bg-card rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                      <img
                        src={university.image || "/placeholder.svg"}
                        alt={university.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Country flag badge */}
                      <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-foreground shadow-sm">
                        <span className="text-base leading-none">
                          {countryFlag}
                        </span>
                        <span>{university.country}</span>
                      </div>

                      {/* Featured badge */}
                      {university.featured && (
                        <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold shadow-sm">
                          <Sparkles className="w-3 h-3" />
                          <span>Featured</span>
                        </div>
                      )}

                      {/* Ranking badge */}
                      <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
                        <Award className="w-3 h-3" />
                        <span>{university.ranking}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>
                          {university.city}, {university.country}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight text-balance">
                        {university.name}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        {university.description}
                      </p>

                      {/* Programs */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {university.programs.slice(0, 3).map((program) => (
                          <Badge
                            key={program}
                            variant="secondary"
                            className="text-xs font-medium rounded-full"
                          >
                            {program}
                          </Badge>
                        ))}
                        {university.programs.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs font-medium rounded-full"
                          >
                            +{university.programs.length - 3} more
                          </Badge>
                        )}
                      </div>

                      {/* Stats row */}
                      <div className="flex items-center gap-4 pb-4 mb-4 border-b border-border">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Users className="w-3.5 h-3.5" />
                          <span>{university.students}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Est. {university.founded}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary group-hover:underline">
                          View Details
                        </span>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-6 py-12 md:px-12 md:py-16">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              }}
            />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-balance leading-tight">
                  Can't decide which university is right for you?
                </h2>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  Our expert counsellors will guide you through the selection
                  process, applications, and admissions—at no cost to you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/team">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto"
                  >
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;
