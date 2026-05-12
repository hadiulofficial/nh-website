import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SendIcon, MessageCircleIcon, GlobeIcon, CheckCircleIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        formData,
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
          `Error: ${response.data.message || "Failed to submit inquiry."}`,
        );
      }
    } catch (error: unknown) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      setSubmitMessage(
        `Error: ${axiosError.response?.data?.message || "Something went wrong. Please try again later."}`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Bangladesh Office",
      details: ["Darus-Salam Arcade, 6th Floor (5th lift)", "14 Purana Paltan, Dhaka 1000, Bangladesh"],
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: MapPinIcon,
      title: "Malaysia Office",
      details: ["Suite 32-01, 32nd Floor, Menara Keck Seng", "203 Jalan Bukit Bintang, 55100 Kuala Lumpur"],
      color: "bg-emerald-500/10 text-emerald-600",
    },
  ];

  const quickContacts = [
    {
      icon: PhoneIcon,
      title: "Phone Numbers",
      items: [
        "+880 1961-656769 (BD)",
        "+880 1618-660577 (BD)",
        "+60 11-6117 5133 (MY)",
        "+60 11-6178 5257 (MY)",
      ],
      color: "bg-violet-500/10 text-violet-600",
    },
    {
      icon: MailIcon,
      title: "Email Address",
      items: ["enquiry@nhglobaleducation.com"],
      color: "bg-rose-500/10 text-rose-600",
    },
    {
      icon: ClockIcon,
      title: "Office Hours",
      items: [
        "10AM - 6PM Mon-Sat (Malaysia)",
        "10AM - 6PM Sat-Thu (Bangladesh)",
      ],
      color: "bg-amber-500/10 text-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | NH Global Education</title>
        <meta
          name="description"
          content="Get in touch with NH Global Education. Start your study abroad journey today with our expert counselors."
        />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-primary">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
            <div className="relative py-16 md:py-24 px-6 md:px-12 text-center">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <MessageCircleIcon className="w-4 h-4" />
                Get In Touch
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
                We&apos;re Here to Help You Succeed
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Ready to start your study abroad journey? Connect with our expert counselors and take the first step towards your international education dream.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 md:mt-10 grid grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: GlobeIcon, number: "2", label: "Office Locations" },
              { icon: MessageCircleIcon, number: "24h", label: "Response Time" },
              { icon: CheckCircleIcon, number: "5000+", label: "Students Guided" },
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

      {/* Contact Form and Info */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <Card className="border border-border rounded-2xl overflow-hidden bg-card shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-8">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                      Send a Message
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Let&apos;s Start a Conversation
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          required
                          className="h-12 rounded-xl border-border bg-background focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          required
                          className="h-12 rounded-xl border-border bg-background focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="h-12 rounded-xl border-border bg-background focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+880 1XXX-XXXXXX"
                          required
                          className="h-12 rounded-xl border-border bg-background focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Preferred Destination
                      </label>
                      <Input
                        name="preference"
                        value={formData.preference}
                        onChange={handleChange}
                        placeholder="e.g., Malaysia, Australia, Canada"
                        className="h-12 rounded-xl border-border bg-background focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your study abroad goals and any questions you have..."
                        rows={5}
                        required
                        className="rounded-xl border-border bg-background focus:border-primary focus:ring-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 rounded-xl text-base font-medium shadow-lg shadow-primary/20"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <SendIcon className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </Button>

                    {submitMessage && (
                      <div
                        className={`p-4 rounded-xl text-center font-medium ${
                          isSuccess
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {submitMessage}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office Locations */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <GlobeIcon className="w-5 h-5 text-primary" />
                  Our Offices
                </h3>
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border border-border rounded-2xl overflow-hidden bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${info.color}`}>
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground mb-1.5">
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-primary" />
                  Quick Contact
                </h3>
                {quickContacts.map((contact, index) => (
                  <Card key={index} className="border border-border rounded-2xl overflow-hidden bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${contact.color}`}>
                          <contact.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground mb-1.5">
                            {contact.title}
                          </h4>
                          {contact.items.map((item, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Card className="border border-green-200 rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center mx-auto mb-4">
                    <FaWhatsapp className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Chat on WhatsApp
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant response from our team
                  </p>
                  <a
                    href="https://wa.me/601161175133"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-green-500 text-white font-medium px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Start Chat
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              Find Us
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Visit Our Offices
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We have offices in Bangladesh and Malaysia to serve you better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bangladesh Office Map */}
            <Card className="border border-border rounded-2xl overflow-hidden bg-card">
              <CardContent className="p-0">
                <div className="aspect-[16/10] bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5095892547187!2d90.41144771498186!3d23.73486048458985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ee0f0cdd8f%3A0x1a1e3c2a3e3b3a3e!2sPurana%20Paltan%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bangladesh Office Location"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1">Bangladesh Office</h3>
                  <p className="text-sm text-muted-foreground">14 Purana Paltan, Dhaka 1000</p>
                </div>
              </CardContent>
            </Card>

            {/* Malaysia Office Map */}
            <Card className="border border-border rounded-2xl overflow-hidden bg-card">
              <CardContent className="p-0">
                <div className="aspect-[16/10] bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.786714992745!2d101.7101!3d3.1480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d3f0000001%3A0x0!2sMenara%20Keck%20Seng!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Malaysia Office Location"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1">Malaysia Office</h3>
                  <p className="text-sm text-muted-foreground">203 Jalan Bukit Bintang, Kuala Lumpur</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
