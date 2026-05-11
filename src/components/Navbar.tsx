import { Button } from "@/components/ui/button";
import {  MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <div className="flex">
              <img
                src={Logo}
                alt="Nhglobaleducation Logo"
                className="h-[40px] md:h-[50px] w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-semibold hover:text-primary transition-colors">
              Home
            </a>
            <Link to="/universities" className="font-semibold hover:text-primary transition-colors">
              Universities
            </Link>
            <Link to="/application-status" className="font-semibold hover:text-primary transition-colors">
              Track Application
            </Link>
            <a href="/#services" className="font-semibold hover:text-primary transition-colors">
              Services
            </a>
            <a href="/#testimonials" className="font-semibold hover:text-primary transition-colors">
              Reviews            </a>
            <Link to="/success-stories" className="font-semibold hover:text-primary transition-colors">
              Success Stories
            </Link>

            <Link to="/about" className="font-semibold hover:text-primary transition-colors">
                  About Us
            </Link>

            <Link to="/team" className="font-semibold hover:text-primary transition-colors">
               Our Team
            </Link>
            <Link to="/contact">
              <Button  size="sm">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            <a href="/" className="block py-2 font-semibold hover:text-primary transition-colors">
              Home
            </a>
            <Link to="/universities" className="block py-2 font-semibold hover:text-primary transition-colors">
              Universities
            </Link>
            <Link to="/application-status" className="block py-2 font-semibold hover:text-primary transition-colors">
              Track Application
            </Link>
            <a href="/#services" className="block py-2 font-semibold hover:text-primary transition-colors">
              Services
            </a>
            <a href="/#testimonials" className="block py-2 font-semibold hover:text-primary transition-colors">
              Reviews            </a>
            <Link to="/success-stories" className="block py-2 font-semibold hover:text-primary transition-colors">
              Success Stories
            </Link>

              <Link to="/about"className="block py-2 font-semibold hover:text-primary transition-colors">
                  About Us
            </Link>

            <Link to="/team" className="block py-2 font-semibold hover:text-primary transition-colors">
               Our Team
            </Link>

            <Link to="/contact">
              <Button  size="sm" className="w-full mt-4">
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;