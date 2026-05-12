import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  FileX,
  ArrowLeft,
  Building2,
  Download,
  ExternalLink,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const UniversityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [university, setUniversity] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUniversity = async () => {
      setLoading(true);
      setError("");
      const baseUrl = import.meta.env.VITE_API_BASE_URL;

      try {
        const response = await axios.get(`${baseUrl}/api/universities/${id}`);
        if (response.data.status === "success") {
          const data = response.data.data;
          setUniversity({
            id: data.id,
            name: data.name,
            image: data.image,
            pdf: data.pdf,
          });
        } else {
          setError("University not found.");
        }
      } catch (err: any) {
        setError(
          err.response?.data?.message || "Failed to fetch university data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUniversity();
  }, [id]);

  const storageUrl = import.meta.env.VITE_STORAGE_URL;
  const pdfUrl = university?.pdf ? `${storageUrl}/${university.pdf}` : null;

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl bg-card border border-border p-8 md:p-12 text-center">
                <div className="w-14 h-14 mx-auto mb-5 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                <h2 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                  Loading university details
                </h2>
                <p className="text-sm text-muted-foreground">
                  Just a moment while we fetch the information…
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Error / Not found state
  if (error || !university) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {error || "University Not Found"}
            </h1>
            <p className="text-muted-foreground mb-8">
              We couldn&apos;t load this university. It may have been moved or
              removed.
            </p>
            <Button
              onClick={() => navigate("/universities")}
              size="lg"
              className="rounded-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Universities
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-12 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Breadcrumb / Back */}
          <div className="mb-5 md:mb-6">
            <Link
              to="/universities"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Universities
            </Link>
          </div>

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-primary">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative py-12 md:py-16 px-6 md:px-12">
              <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
                {/* Icon / Image */}
                <div className="flex justify-center md:justify-start">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Building2 className="w-12 h-12 md:w-14 md:h-14 text-primary-foreground" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center md:text-left">
                  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground/90 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    Partner University
                  </span>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 text-balance leading-tight">
                    {university.name}
                  </h1>
                  <p className="text-sm md:text-base text-primary-foreground/80 max-w-2xl">
                    Explore programs, admissions, and everything you need to
                    know to begin your journey at {university.name}.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <Link to="/contact">
                      <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 rounded-xl"
                      >
                        Apply with Counsellor
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    {pdfUrl && (
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <Button
                          size="lg"
                          variant="outline"
                          className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm rounded-xl"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Brochure
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-6 md:gap-8">
            {/* PDF / Document viewer */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="px-5 md:px-6 py-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-sm md:text-base font-semibold text-foreground">
                      University Brochure
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Programs, fees, admissions & more
                    </p>
                  </div>
                </div>
                {pdfUrl && (
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open in new tab
                  </a>
                )}
              </div>

              {pdfUrl ? (
                <div className="bg-muted/30">
                  <iframe
                    src={pdfUrl}
                    className="w-full h-[70vh] md:h-[80vh] block"
                    title={`${university.name} brochure`}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <FileX className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    No brochure available yet
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Detailed information for this university is being prepared.
                    Get in touch with our counsellors for the latest details.
                  </p>
                  <Link to="/contact" className="mt-5">
                    <Button className="rounded-xl">
                      Contact a Counsellor
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* Apply card */}
              <div className="relative rounded-2xl bg-primary text-primary-foreground p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="relative">
                  <h3 className="text-lg font-bold mb-2">
                    Ready to apply?
                  </h3>
                  <p className="text-sm text-primary-foreground/80 mb-5 leading-relaxed">
                    Our experienced counsellors will guide you through the
                    entire application and visa process.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-xl">
                      Free Consultation
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Contact card */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Talk to an Expert
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+601161175133"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/60 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">Call us</div>
                      <div className="text-sm font-medium text-foreground truncate">
                        +60 11-6117 5133
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:enquiry@nhglobaleducation.com"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/60 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">Email us</div>
                      <div className="text-sm font-medium text-foreground truncate">
                        enquiry@nhglobaleducation.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* More unis */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Explore More
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Browse 150+ partner universities across top study
                  destinations.
                </p>
                <Link to="/universities">
                  <Button variant="outline" className="w-full rounded-xl">
                    View All Universities
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UniversityDetail;
