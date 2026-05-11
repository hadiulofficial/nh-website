import { Button } from "@/components/ui/button";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  FacebookIcon,
  Youtube,
  GraduationCap,
  BookOpenCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-white.png";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src={Logo}
                alt="Nhglobaleducation Logo"
                className="h-[40px] md:h-[50px] w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for international education. We've been
              helping students achieve their global education dreams for over a
              decade.
            </p>
            <div className="flex space-x-4">
              <Link to="https://www.youtube.com/@travelwithnoushad">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="https://web.facebook.com/nhglobaleducation">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <FacebookIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="https://web.facebook.com/nhglobaleducationmalaysia">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <GraduationCap className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="https://web.facebook.com/studynhglobaleducation">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <BookOpenCheck className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  University Selection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Application Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Visa Assistance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Accommodation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pre-Departure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Post-Arrival Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Bangladesh Office</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    Darus-Salam Arcade, 6th Floor (5th lift){" "}
                  </p>
                  <p className="text-primary-foreground/80">
                    14 Purana Paltan, Dhaka 1000, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  +880 1961-656769
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  +880 1618-660577
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  enquiry@nhglobaleducation
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Office Hours</h4>
              <p className="text-primary-foreground/80 text-sm">
                Saturday - Thursday: 10:00 AM - 6:00 PM
                <br />
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Malaysia Office</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    Suite 32-01, 32nd Floor, Menara Keck Seng (Opposite Pavilion
                    Mall){" "}
                  </p>
                  <p className="text-primary-foreground/80">
                    203 Jalan Bukit Bintang, 55100 Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  {" "}
                  +60 11-6117 5133
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  +60 11-6178 5257
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  enquiry@nhglobaleducation
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Office Hours</h4>
              <p className="text-primary-foreground/80 text-sm">
                Monday - Saturday: 10:00 AM - 6:00 PM
                <br />
              </p>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025{" "}
            <a href="https://softulas.com/" className="text-white">
              Softulas
            </a>
            . All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
