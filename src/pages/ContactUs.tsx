import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    preference: "",
    message: "",
  });

  // State to manage submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Get base URL from Vite environment
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await axios.post(
        `${baseUrl}/api/submit-inquiry`,
        formData,
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitMessage("Your inquiry has been submitted successfully!");
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
    } catch (error) {
      setSubmitMessage(
        `Error: ${error.response?.data?.message || "Something went wrong. Please try again later."}`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 pt-[120px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="md:text-xl text-white/90 max-w-2xl mx-auto">
            Ready to start your study abroad journey? Get in touch with our
            expert counselors today.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
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
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your study abroad goals and any questions you have..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full mt-4"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </Button>

                  {submitMessage && (
                    <p
                      className={`mt-4 text-center ${submitMessage.startsWith("Error") ? "text-red-500" : "text-green-500"}`}
                    >
                      {submitMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPinIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Bangladesh Office{" "}
                      </h3>
                      <p className="text-muted-foreground">
                        Darus-Salam Arcade, 6th Floor (5th lift)
                        <br /> 14 Purana Paltan, Dhaka 1000, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPinIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Malaysia Office
                      </h3>
                      <p className="text-muted-foreground">
                        Suite 32-01, 32nd Floor, Menara Keck Seng (Opposite
                        Pavilion Mall)
                        <br /> 203 Jalan Bukit Bintang, 55100 Kuala Lumpur,
                        Malaysia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <PhoneIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">
                        +880 1961-656769 (Bangladesh)
                        <br />
                        +880 1618-660577
                        <br />
                        +60 11-6117 5133 (Malaysia) <br />
                        +60 11-6178 5257
                        <br />
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MailIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        enquiry@nhglobaleducation.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <ClockIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Office Hours
                      </h3>
                      <p className="text-muted-foreground">
                        10AM - 6 PM Monday - Saturday (Malaysia)
                      </p>
                      <p className="text-muted-foreground">
                        10AM - 6 PM Saturday - Thursday (Bangladesh)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
