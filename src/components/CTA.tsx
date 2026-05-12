import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-primary text-primary-foreground">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_50%)]" />

          <div className="relative px-6 md:px-12 lg:px-16 py-14 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80 mb-4">
                Ready to begin?
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-balance leading-tight">
                Your study abroad dream is one conversation away
              </h2>
              <p className="text-base md:text-lg text-primary-foreground/85 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Book a free consultation with our expert counsellors and get a personalised roadmap to your dream university.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group rounded-xl px-7 py-6 text-base font-semibold shadow-lg"
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl px-7 py-6 text-base font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat with us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
