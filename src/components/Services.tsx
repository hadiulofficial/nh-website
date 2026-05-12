import { 
  FileText, 
  Headphones, 
  CreditCard, 
  ShieldCheck,
  Plane,
  Home
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Application Assistance",
    description: "Complete guidance through university applications, document preparation, and submission process.",
    features: ["Document Review", "Essay Writing Help", "Application Tracking"]
  },
  {
    icon: CreditCard,
    title: "Scholarship Guidance",
    description: "Maximize your funding opportunities with our comprehensive scholarship search and application support.",
    features: ["Scholarship Search", "Application Support", "Financial Planning"]
  },
  {
    icon: ShieldCheck,
    title: "Visa Support",
    description: "Expert assistance with visa applications, interviews, and documentation for smooth approval.",
    features: ["Visa Documentation", "Interview Prep", "Status Tracking"]
  },
  {
    icon: Plane,
    title: "Pre-Departure",
    description: "Comprehensive preparation for your journey including travel, accommodation, and cultural orientation.",
    features: ["Travel Planning", "Cultural Training", "Packing Guidance"]
  },
  {
    icon: Home,
    title: "Accommodation",
    description: "Find the perfect place to call home with our extensive network of verified accommodations.",
    features: ["University Housing", "Private Rentals", "Homestay Options"]
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your study abroad journey from arrival to graduation.",
    features: ["Emergency Support", "Academic Guidance", "Career Counseling"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Study Abroad Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From initial consultation to graduation day, we provide end-to-end support 
            to ensure your study abroad journey is smooth and successful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <IconComponent className="h-7 w-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
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
