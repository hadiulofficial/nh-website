import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Globe2,
  Users,
  Headphones,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    preference: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setIsSuccess(false);

    try {
      const response = await axios.post(
        `${baseUrl}/api/submit-inquiry`,
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitMessage("Your inquiry has been submitted successfully!");
        setIsSuccess(true);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          preference: "",
          message: "",
        });
      } else {
        setSubmitMessage(
          response.data.message || "Failed to submit inquiry."
        );
      }
    } catch (error: any) {
      setSubmitMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | NH Global Education</title>
        <meta
          name="description"
          content="Get in touch with NH Global Education for expert guidance on studying abroad. Visit our offices in Dhaka and Kuala Lumpur, or contact us by phone or email."
        />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-12 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-primary">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative py-16 md:py-20 px-6 md:px-12 text-center">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                Get In Touch
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
                Let&apos;s Plan Your Study Abroad Journey
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Ready to take the next step? Our expert counsellors are here to
                guide you every step of the way. Reach out today.
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-8 md:mt-10 grid grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Globe2, number: "2", label: "Office Locations" },
              { icon: Headphones, number: "24/7", label: "Support" },
              { icon: Users, number: "5000+", label: "Students Helped" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-4 md:p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-8">
            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 lg:p-10">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                      className="h-11 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      required
                      className="h-11 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="h-11 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                      required
                      className="h-11 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Destination
                  </label>
                  <Input
                    name="preference"
                    value={formData.preference}
                    onChange={handleChange}
                    placeholder="e.g., Malaysia, Australia, Canada"
                    className="h-11 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your study abroad goals and any questions you have..."
                    rows={5}
                    required
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl shadow-md shadow-primary/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitMessage && (
                  <div
                    className={`flex items-start gap-2 p-3.5 rounded-xl text-sm ${
                      isSuccess
                        ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}
                  >
                    {isSuccess ? (
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    )}
                    <span>{submitMessage}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/601161175133"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Chat on WhatsApp</h3>
                    <p className="text-sm text-white/85">
                      Fastest response — usually within minutes
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium">
                  Start chatting
                  <span aria-hidden>→</span>
                </div>
              </a>

              {/* Offices */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Our Offices
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      Bangladesh Office
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Darus-Salam Arcade, 6th Floor (5th lift), 14 Purana
                      Paltan, Dhaka 1000, Bangladesh
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm font-semibold text-foreground mb-1">
                      Malaysia Office
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Suite 32-01, 32nd Floor, Menara Keck Seng (Opposite
                      Pavilion Mall), 203 Jalan Bukit Bintang, 55100 Kuala
                      Lumpur, Malaysia
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                </div>
                <div className="space-y-1.5 text-sm">
                  <a
                    href="tel:+8801961656769"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    +880 1961-656769 (Bangladesh)
                  </a>
                  <a
                    href="tel:+8801618660577"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    +880 1618-660577
                  </a>
                  <a
                    href="tel:+601161175133"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    +60 11-6117 5133 (Malaysia)
                  </a>
                  <a
                    href="tel:+601161785257"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    +60 11-6178 5257
                  </a>
                </div>
              </div>

              {/* Email + Hours grid */}
              <div className="grid sm:grid-cols-1 gap-5">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                  </div>
                  <a
                    href="mailto:enquiry@nhglobaleducation.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    enquiry@nhglobaleducation.com
                  </a>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>10 AM - 6 PM, Mon - Sat (Malaysia)</p>
                    <p>10 AM - 6 PM, Sat - Thu (Bangladesh)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-3">
              Visit Us
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Find Us On the Map
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-border flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Bangladesh Office
                </span>
              </div>
              <iframe
                src="https://www.google.com/maps?q=Darus-Salam+Arcade,+14+Purana+Paltan,+Dhaka+1000&output=embed"
                className="w-full h-64 md:h-80 border-0"
                loading="lazy"
                title="Bangladesh Office Location"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-border flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Malaysia Office
                </span>
              </div>
              <iframe
                src="https://www.google.com/maps?q=Menara+Keck+Seng,+203+Jalan+Bukit+Bintang,+Kuala+Lumpur&output=embed"
                className="w-full h-64 md:h-80 border-0"
                loading="lazy"
                title="Malaysia Office Location"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
