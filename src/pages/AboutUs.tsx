import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe2,
  Lightbulb,
  Shield,
  HandHeart,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { icon: GraduationCap, number: "10K+", label: "Applications Supported" },
  { icon: Globe2, number: "150+", label: "Partner Universities" },
  { icon: Users, number: "20+", label: "Expert Advisors" },
  { icon: Award, number: "98%", label: "Success Rate" },
];

const values = [
  {
    icon: Heart,
    title: "Student First",
    description:
      "Every decision we make puts our students' aspirations and success at the center.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honest, transparent guidance throughout every step of the journey abroad.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    description:
      "Connecting students to opportunities that broaden horizons across cultures.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging modern tools and insights to simplify complex admission processes.",
  },
  {
    icon: HandHeart,
    title: "Inclusivity",
    description:
      "We welcome and support students from all backgrounds and walks of life.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to high standards in counseling, applications, and after-care.",
  },
];

const journey = [
  {
    year: "2014",
    title: "Founded",
    description:
      "NH Global Education was founded by alumni of top global universities with a mission to remove barriers from the study abroad process.",
  },
  {
    year: "2017",
    title: "Expanded Network",
    description:
      "Built partnerships with 50+ universities across Malaysia, the UK, Australia, and Canada.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Launched online counseling and application tracking to support students globally during challenging times.",
  },
  {
    year: "2022",
    title: "5,000+ Students",
    description:
      "Crossed the milestone of supporting over 5,000 students in their international education journey.",
  },
  {
    year: "2024",
    title: "Global Leader",
    description:
      "Recognized as a trusted name in study-abroad consulting with 150+ partner universities worldwide.",
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
                <Sparkles className="w-4 h-4" />
                About NH Global Education
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
                Empowering Students to Achieve Global Education
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                We empower aspiring students with comprehensive guidance and
                personalized support to access world-class educational
                opportunities across the globe.
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

      {/* Featured Image Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
          <img
            src="https://cdn.nhglobaleducation.com/hero/5.jpg"
            alt="NH Global Education advisors guiding students to universities abroad"
            loading="lazy"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-2xl text-balance">
              Your trusted partner for international education since 2014
            </h2>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            What Drives Us
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 text-balance">
            Our Mission &amp; Vision
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Guided by purpose. Driven by impact. Anchored in student success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <div className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower aspiring students with comprehensive guidance,
              personalized support, and expert counseling, facilitating their
              seamless access to global educational opportunities. We are
              dedicated to nurturing academic aspirations, fostering cultural
              exchange, and shaping future leaders through international
              education.
            </p>
          </div>

          <div className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6 md:w-7 md:h-7 text-accent" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a global leader in educational consultancy, recognized
              for our commitment to excellence, innovative solutions, and
              unwavering support for students. We aim to create a world where
              education transcends boundaries, empowering individuals to make a
              positive impact on their communities and global society.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Our Core Values
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 text-balance">
            The Principles That Guide Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These values shape every interaction, decision, and outcome at NH
            Global Education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 text-balance">
            A Decade of Empowering Dreams
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a small advisory team to a global education partner trusted by
            thousands.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start md:items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-2xl p-5 md:p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                      <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
              Ready to Begin Your Study Abroad Journey?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Talk to our experienced counselors and get a personalized
              roadmap to your dream university.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-6 md:px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground font-medium px-6 md:px-8 py-3 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                Meet Our Team
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Expert advisors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>End-to-end support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
