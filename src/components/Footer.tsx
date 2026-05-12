import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  GraduationCap,
  BookOpenCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    "University Selection",
    "Application Support",
    "Visa Assistance",
    "Accommodation",
    "Pre-Departure",
    "Post-Arrival Support",
  ];

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@travelwithnoushad", label: "YouTube" },
    { icon: Facebook, href: "https://web.facebook.com/nhglobaleducation", label: "Facebook" },
    { icon: GraduationCap, href: "https://web.facebook.com/nhglobaleducationmalaysia", label: "Education Malaysia" },
    { icon: BookOpenCheck, href: "https://web.facebook.com/studynhglobaleducation", label: "Study NH" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Start Your Journey?
              </h3>
              <p className="text-background/70">
                Get free consultation from our expert advisors today.
              </p>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/favicon.png"
                alt="NH Global Education Logo"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              Your trusted partner for international education. We&apos;ve been
              helping students achieve their global education dreams for over a
              decade.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Link key={social.label} to={social.href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-background/70 hover:text-background hover:bg-background/10 h-10 w-10"
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bangladesh Office */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Bangladesh Office</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-background/70" />
                <p className="text-background/70 text-sm leading-relaxed">
                  Darus-Salam Arcade, 6th Floor (5th lift)<br />
                  14 Purana Paltan, Dhaka 1000, Bangladesh
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-background/70" />
                <span className="text-background/70 text-sm">+880 1961-656769</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-background/70" />
                <span className="text-background/70 text-sm">+880 1618-660577</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-background/70" />
                <span className="text-background/70 text-sm">enquiry@nhglobaleducation</span>
              </div>
              <div className="mt-4 pt-4 border-t border-background/10">
                <p className="text-xs text-background/50">
                  Saturday - Thursday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Malaysia Office */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Malaysia Office</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-background/70" />
                <p className="text-background/70 text-sm leading-relaxed">
                  Suite 32-01, 32nd Floor, Menara Keck Seng<br />
                  203 Jalan Bukit Bintang, 55100 Kuala Lumpur
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-background/70" />
                <span className="text-background/70 text-sm">+60 11-6117 5133</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-background/70" />
                <span className="text-background/70 text-sm">+60 11-6178 5257</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-background/70" />
                <span className="text-background/70 text-sm">enquiry@nhglobaleducation</span>
              </div>
              <div className="mt-4 pt-4 border-t border-background/10">
                <p className="text-xs text-background/50">
                  Monday - Saturday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © 2025{" "}
              <a href="https://softulas.com/" className="text-background/70 hover:text-background transition-colors">
                Softulas
              </a>
              . All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
