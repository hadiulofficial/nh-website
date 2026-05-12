import { Award, Globe2, HeartHandshake, Sparkles } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Network",
    description: "Partnered with 100+ top-ranked universities across Malaysia, Australia, Canada, and beyond.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Guidance",
    description: "One-on-one counselling tailored to your goals, profile, and budget at every step.",
  },
  {
    icon: Award,
    title: "98% Visa Success",
    description: "A proven track record with thousands of successful student visa approvals and placements.",
  },
  {
    icon: Sparkles,
    title: "End-to-End Support",
    description: "From application to landing, accommodation and career — we stand by you all the way.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance leading-tight">
            Built around your future, not paperwork
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We blend a decade of experience with a deeply human approach to make studying abroad simple, transparent, and exciting.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-6 md:p-7 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
