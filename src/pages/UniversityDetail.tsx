import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  MapPin,
  Sparkles,
  Users,
  Globe2,
  DollarSign,
  TrendingUp,
  BookOpen,
  Library,
  Phone,
  Mail,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  COUNTRIES,
  UNIVERSITIES,
  getUniversityById,
  type University,
} from "@/data/universities";

const UniversityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<
    "overview" | "programs" | "admission" | "campus"
  >("overview");

  const university = useMemo(
    () => (id ? getUniversityById(id) : undefined),
    [id]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!university) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-10">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-muted-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                University Not Found
              </h1>
              <p className="text-muted-foreground mb-8">
                We couldn&apos;t find the university you&apos;re looking for.
                Try one of the universities below.
              </p>
              <Button onClick={() => navigate("/universities")} size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universities
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {UNIVERSITIES.slice(0, 4).map((u) => (
                <Link
                  key={u.id}
                  to={`/university/${u.id}`}
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      {u.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {u.city}, {u.country}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const countryFlag =
    COUNTRIES.find((c) => c.code === university.countryCode)?.flag || "🌍";

  const relatedUniversities = UNIVERSITIES.filter(
    (u) => u.countryCode === university.countryCode && u.id !== university.id
  ).slice(0, 3);

  const heroStats = [
    { icon: Calendar, label: "Founded", value: university.founded },
    { icon: Users, label: "Students", value: university.students },
    { icon: Globe2, label: "International", value: university.internationalStudents },
    { icon: TrendingUp, label: "Acceptance", value: university.acceptanceRate },
  ];

  const tabs = [
    { id: "overview" as const, label: "Overview", icon: BookOpen },
    { id: "programs" as const, label: "Programs", icon: GraduationCap },
    { id: "admission" as const, label: "Admission", icon: CheckCircle2 },
    { id: "campus" as const, label: "Campus & Life", icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-24 md:pt-28 pb-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              to="/universities"
              className="hover:text-primary transition-colors"
            >
              Universities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
              {university.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-secondary">
              <img
                src={university.image || "/placeholder.svg"}
                alt={university.name}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

              <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 flex items-start justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-foreground shadow-sm">
                    <span className="text-base leading-none">{countryFlag}</span>
                    <span>{university.country}</span>
                  </div>
                  {university.featured && (
                    <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
                <Link
                  to="/universities"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-foreground shadow-sm hover:bg-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>All Universities</span>
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium mb-4">
                    <Award className="w-3.5 h-3.5" />
                    <span>{university.ranking}</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight text-balance">
                    {university.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/90 text-sm md:text-base">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {university.city}, {university.country}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>Established {university.founded}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      <span>{university.students} students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="relative -mt-8 md:-mt-10 mx-4 md:mx-8 z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-card border border-border shadow-lg">
              {heroStats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 ${
                    i < heroStats.length - 1
                      ? "md:border-r md:border-border md:pr-4"
                      : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-base md:text-lg font-bold text-foreground leading-none truncate">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-y border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide -mx-1 px-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 md:px-5 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-10">
              {activeTab === "overview" && (
                <OverviewTab university={university} />
              )}
              {activeTab === "programs" && (
                <ProgramsTab university={university} />
              )}
              {activeTab === "admission" && (
                <AdmissionTab university={university} />
              )}
              {activeTab === "campus" && <CampusTab university={university} />}
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-32 space-y-5">
                {/* Apply card */}
                <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-6 md:p-7 text-white relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 50%)",
                    }}
                  />
                  <div className="relative">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium mb-4">
                      <Sparkles className="w-3 h-3" />
                      <span>Start Your Journey</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                      Ready to apply to {university.shortName}?
                    </h3>
                    <p className="text-sm text-white/85 mb-5 leading-relaxed">
                      Get free consultation from our expert advisors. We&apos;ll
                      guide you through the entire application process.
                    </p>
                    <div className="space-y-2.5">
                      <Link to="/contact" className="block">
                        <Button
                          size="lg"
                          variant="secondary"
                          className="w-full bg-white text-primary hover:bg-white/90"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Link to="/contact" className="block">
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
                        >
                          Free Consultation
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Quick info */}
                <div className="rounded-3xl bg-card border border-border p-6">
                  <h4 className="text-base font-bold text-foreground mb-4">
                    Quick Information
                  </h4>
                  <dl className="space-y-3.5">
                    <InfoRow
                      icon={DollarSign}
                      label="Tuition From"
                      value={university.tuitionFrom}
                    />
                    <InfoRow
                      icon={Calendar}
                      label="Intakes"
                      value={university.intakes.join(", ")}
                    />
                    <InfoRow
                      icon={Building2}
                      label="Campus"
                      value={university.campus}
                    />
                    <InfoRow
                      icon={Award}
                      label="Ranking"
                      value={university.ranking}
                    />
                    {university.website && (
                      <div className="pt-3.5 border-t border-border">
                        <a
                          href={university.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        >
                          Visit Official Website
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </dl>
                </div>

                {/* Contact card */}
                <div className="rounded-3xl bg-secondary/50 border border-border p-6">
                  <h4 className="text-base font-bold text-foreground mb-1">
                    Need Help?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our counselors are here for you
                  </p>
                  <div className="space-y-2.5">
                    <a
                      href="tel:+60123456789"
                      className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Phone className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground">
                          Call us
                        </div>
                        <div className="text-sm font-semibold text-foreground truncate">
                          +60 12-345 6789
                        </div>
                      </div>
                    </a>
                    <a
                      href="mailto:info@nhglobaledu.com"
                      className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Mail className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground">
                          Email us
                        </div>
                        <div className="text-sm font-semibold text-foreground truncate">
                          info@nhglobaledu.com
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Universities */}
      {relatedUniversities.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8 md:mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  Explore More
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
                  More Universities in {university.country}
                </h2>
              </div>
              <Link
                to="/universities"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline whitespace-nowrap"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedUniversities.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/university/${rel.id}`}
                  className="group bg-card rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={rel.image || "/placeholder.svg"}
                      alt={rel.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
                      <Award className="w-3 h-3" />
                      <span>{rel.ranking}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1.5">
                      <MapPin className="w-3 h-3" />
                      <span>{rel.city}</span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                      {rel.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {rel.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

/* ----------------- Tab Components ----------------- */

const OverviewTab = ({ university }: { university: University }) => (
  <div className="space-y-10">
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
        About {university.shortName}
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed mb-4">
        {university.longDescription}
      </p>
      <p className="text-base text-muted-foreground leading-relaxed">
        {university.description}
      </p>
    </div>

    <div>
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5 leading-tight">
        Why Choose {university.shortName}?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {university.highlights.map((highlight, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground leading-relaxed pt-1">
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5 leading-tight">
        Fields of Study
      </h3>
      <div className="flex flex-wrap gap-2">
        {university.programs.map((program) => (
          <Badge
            key={program}
            variant="secondary"
            className="text-sm font-medium px-4 py-2 rounded-full"
          >
            {program}
          </Badge>
        ))}
      </div>
    </div>
  </div>
);

const ProgramsTab = ({ university }: { university: University }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
        Popular Programs
      </h2>
      <p className="text-muted-foreground">
        Explore some of the most sought-after programs offered at{" "}
        {university.shortName}
      </p>
    </div>

    <div className="space-y-3">
      {university.popularPrograms.map((program, i) => (
        <div
          key={i}
          className="group p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="min-w-0">
              <Badge
                variant="outline"
                className="text-xs font-medium rounded-full mb-2"
              >
                {program.level}
              </Badge>
              <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                {program.name}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
              <GraduationCap className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm pt-4 border-t border-border">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold text-foreground">
                {program.tuition}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="p-5 rounded-2xl bg-secondary/50 border border-border text-center">
      <p className="text-sm text-muted-foreground mb-3">
        Looking for a specific program not listed here?
      </p>
      <Link to="/contact">
        <Button variant="outline" size="sm">
          Ask Our Counselors
          <ArrowRight className="w-3.5 h-3.5 ml-2" />
        </Button>
      </Link>
    </div>
  </div>
);

const AdmissionTab = ({ university }: { university: University }) => (
  <div className="space-y-10">
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
        Admission Requirements
      </h2>
      <p className="text-muted-foreground">
        General requirements for admission to {university.shortName}. Specific
        program requirements may vary.
      </p>
    </div>

    <RequirementsBlock
      title="Undergraduate Admission"
      icon={GraduationCap}
      items={university.requirements.undergraduate}
    />

    <RequirementsBlock
      title="Postgraduate Admission"
      icon={Award}
      items={university.requirements.postgraduate}
    />

    <div>
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5 leading-tight">
        Intake Periods
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {university.intakes.map((intake) => (
          <div
            key={intake}
            className="p-5 rounded-2xl bg-card border border-border text-center"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="text-base font-bold text-foreground">{intake}</div>
            <div className="text-xs text-muted-foreground mt-0.5">Intake</div>
          </div>
        ))}
      </div>
    </div>

    <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
          <Library className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg md:text-xl font-bold text-foreground mb-1">
            Need help with documentation?
          </h4>
          <p className="text-sm text-muted-foreground">
            Our team handles everything from translation to certification — so
            you can focus on your studies.
          </p>
        </div>
        <Link to="/contact" className="md:flex-shrink-0">
          <Button>
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

const CampusTab = ({ university }: { university: University }) => (
  <div className="space-y-10">
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
        Campus & Student Life
      </h2>
      <p className="text-muted-foreground">
        Discover what makes life at {university.shortName} truly special.
      </p>
    </div>

    {university.gallery.length > 0 && (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {university.gallery.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl bg-secondary ${
              i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
            }`}
          >
            <img
              src={img || "/placeholder.svg"}
              alt={`${university.name} campus ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    )}

    <div>
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5 leading-tight">
        Campus Facilities
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {university.facilities.map((facility) => (
          <div
            key={facility}
            className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">
              {facility}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5 leading-tight">
        Location
      </h3>
      <div className="rounded-3xl bg-card border border-border overflow-hidden">
        <div className="aspect-[16/9] bg-secondary flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <p className="text-base font-semibold text-foreground">
              {university.campus}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {university.city}, {university.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ----------------- Helper Components ----------------- */

const InfoRow = ({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof DollarSign;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-3">
    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <div className="min-w-0 flex-1">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="text-sm font-semibold text-foreground leading-snug mt-0.5">
        {value}
      </dd>
    </div>
  </div>
);

const RequirementsBlock = ({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: typeof GraduationCap;
  items: string[];
}) => (
  <div>
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
        {title}
      </h3>
    </div>
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border"
        >
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-sm text-foreground leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default UniversityDetail;
