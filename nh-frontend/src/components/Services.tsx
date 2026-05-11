import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileTextIcon, 
  HeadphonesIcon, 
  CreditCardIcon, 
  ShieldCheckIcon,
  PlaneIcon,
  HomeIcon
} from "lucide-react";

const services = [
  {
    icon: FileTextIcon,
    title: "Application Assistance",
    description: "Complete guidance through university applications, document preparation, and submission process.",
    features: ["Document Review", "Essay Writing Help", "Application Tracking"]
  },
  {
    icon: CreditCardIcon,
    title: "Scholarship Guidance",
    description: "Maximize your funding opportunities with our comprehensive scholarship search and application support.",
    features: ["Scholarship Search", "Application Support", "Financial Planning"]
  },
  {
    icon: ShieldCheckIcon,
    title: "Visa Support",
    description: "Expert assistance with visa applications, interviews, and documentation for smooth approval.",
    features: ["Visa Documentation", "Interview Prep", "Status Tracking"]
  },
  {
    icon: PlaneIcon,
    title: "Pre-Departure",
    description: "Comprehensive preparation for your journey including travel, accommodation, and cultural orientation.",
    features: ["Travel Planning", "Cultural Training", "Packing Guidance"]
  },
  {
    icon: HomeIcon,
    title: "Accommodation",
    description: "Find the perfect place to call home with our extensive network of verified accommodations.",
    features: ["University Housing", "Private Rentals", "Homestay Options"]
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your study abroad journey from arrival to graduation.",
    features: ["Emergency Support", "Academic Guidance", "Career Counseling"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Study Abroad Services
          </h2>
          <p className="md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to graduation day, we provide end-to-end support 
            to ensure your study abroad journey is smooth and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-1 bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-center">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Services;