import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarDays, GraduationCap, User } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

// Define form schema with Zod
const formSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select your gender",
  }),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  preferred_universities: z.string().min(1, "Preferred universities are required"),
  passport_number: z.string().min(1, "Passport number is required"),
  nationality: z.string().min(2, "Please enter your nationality"),
});

type FormData = z.infer<typeof formSchema>;

const Application = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize react-hook-form with Zod resolver
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      gender: undefined,
      date_of_birth: "",
      preferred_universities: "",
      passport_number: "",
      nationality: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    try {
      const response = await axios.post(`${baseUrl}/api/submit-application`, data);

      if (response.status === 200 || response.status === 201) {
        toast({
          title: "Application Submitted!",
          description: "We'll review your application and get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: response.data.message || "Failed to submit application.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background mt-10">
      <Navbar />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              University Application Form
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Take the first step towards your international education journey
            </p>
          </div>

          {/* Form Card */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Please fill out all required fields to submit your application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* First Name */}
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Last Name */}
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Gender */}
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="male" id="male" />
                              <label htmlFor="male" className="text-sm font-medium">
                                Male
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="female" id="female" />
                              <label htmlFor="female" className="text-sm font-medium">
                                Female
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <label htmlFor="other" className="text-sm font-medium">
                                Other
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Date of Birth */}
                  <FormField
                    control={form.control}
                    name="date_of_birth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4" />
                          Date of Birth *
                        </FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Preferred Universities */}
                  <FormField
                    control={form.control}
                    name="preferred_universities"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Universities *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., University of Oxford, Harvard University"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Passport Number */}
                  <FormField
                    control={form.control}
                    name="passport_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Passport Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="A12345678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Nationality */}
                  <FormField
                    control={form.control}
                    name="nationality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nationality *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., American, British, Canadian" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button type="submit" className="w-full" disabled={isSubmitting} variant="hero">
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Application;