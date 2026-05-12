import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  BookOpen,
  Globe,
  Shield,
  Lightbulb,
  Handshake,
  GraduationCap,
  Building2,
  ArrowRight
} from "lucide-react";

const stats = [
  { icon: BookOpen, number: "10K+", label: "Applications Supported" },
  { icon: Building2, number: "150+", label: "Partner Universities" },
  { icon: Users, number: "20+", label: "Expert Advisors" },
  { icon: Globe, number: "15+", label: "Countries Covered" },
];

const values = [
  {
    icon: Heart,
    title: "Student-Centered",
    description: "We prioritize students with a personalized approach, ensuring every individual receives tailored guidance.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our interactions and recommendations.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "We celebrate diversity and welcome students from all backgrounds and walks of life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously improve our services using the latest technology and methodologies.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We foster international understanding and prepare students for a connected world.",
  },
  {
    icon: Handshake,
    title: "Social Responsibility",
    description: "We engage in initiatives that give back to communities and support education access.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "Foundation",
    description: "NH Global Education was founded with a vision to help students achieve their dreams of studying abroad.",
  },
  {
    year: "2017",
    title: "Malaysia Expansion",
    description: "Opened our Malaysia office in Kuala Lumpur to better serve students in Southeast Asia.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched online counseling services, making education guidance accessible to students everywhere.",
  },
  {
    year: "2023",
    title: "10K Milestone",
    description: "Celebrated helping over 10,000 students achieve their international education dreams.",
  },
  {
    year: "2024",
    title: "Growing Strong",
    description: "Expanded partnerships to 150+ universities across 15+ countries worldwide.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us | NH Global Education</title>
        <meta
          name="description"
          content="Discover NH Global Education's mission to empower students with personalized guidance and support for global educational opportunities."
        />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-primary">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative py-16 md:py-24 px-6 md:px-12 text-center">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <GraduationCap className="w-4 h-4" />
                About Us
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
                Empowering Dreams Through Education
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                We empower aspiring students with comprehensive guidance and personalized support to access global educational opportunities.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
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

      {/* Featured Image */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
          <img
            src="https://cdn.nhglobaleducation.com/hero/5.jpg"
            alt="NH Global Education advisors guiding students to universities abroad"
            loading="lazy"
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8">
            <p className="text-white/90 text-sm md:text-base max-w-xl">
              Our team of expert counselors is dedicated to helping you navigate your journey to international education.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Our Purpose
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Mission & Vision
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Guiding principles that drive everything we do for our students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Mission Card */}
          <div className="group bg-card border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Target className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To empower aspiring students with comprehensive guidance, personalized support, and expert counseling, facilitating their seamless access to global educational opportunities. We are dedicated to nurturing academic aspirations, fostering cultural exchange, and shaping future leaders through international education.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group bg-card border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Eye className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become a global leader in educational consultancy, recognized for our commitment to excellence, innovative solutions, and unwavering support for students. We aim to create a world where education transcends boundaries, empowering individuals to make a positive impact on their communities and global society.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              What We Stand For
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide our mission to empower students on their educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            The NH Global Story
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From humble beginnings to helping thousands of students achieve their dreams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
          
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card border border-border rounded-2xl p-5 md:p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <span className="inline-block bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                </div>
                
                {/* Empty Space */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Connect with our expert team today and take the first step towards your international education dream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground font-medium px-8 py-3 rounded-xl border border-border hover:bg-muted hover:border-primary/20 transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
