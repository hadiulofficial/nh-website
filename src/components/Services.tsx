import {
  FileText,
  Headphones,
  CreditCard,
  ShieldCheck,
  Plane,
  Home,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Application Assistance",
    description: "Complete guidance through university applications, document preparation, and submission process.",
    features: ["Document Review", "Essay Writing Help", "Application Tracking"],
  },
  {
    icon: CreditCard,
    title: "Scholarship Guidance",
    description: "Maximize your funding opportunities with our comprehensive scholarship search and application support.",
    features: ["Scholarship Search", "Application Support", "Financial Planning"],
  },
  {
    icon: ShieldCheck,
    title: "Visa Support",
    description: "Expert assistance with visa applications, interviews, and documentation for smooth approval.",
    features: ["Visa Documentation", "Interview Prep", "Status Tracking"],
  },
  {
    icon: Plane,
    title: "Pre-Departure",
    description: "Comprehensive preparation for your journey including travel, accommodation, and cultural orientation.",
    features: ["Travel Planning", "Cultural Training", "Packing Guidance"],
  },
  {
    icon: Home,
    title: "Accommodation",
    description: "Find the perfect place to call home with our extensive network of verified accommodations.",
    features: ["University Housing", "Private Rentals", "Homestay Options"],
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your study abroad journey from arrival to graduation.",
    features: ["Emergency Support", "Academic Guidance", "Career Counseling"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance leading-tight">
            Comprehensive Study Abroad Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            From initial consultation to graduation day, we provide end-to-end support
            to ensure your study abroad journey is smooth and successful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-7 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                {/* Decorative arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <IconComponent className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 pt-5 border-t border-border">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
