import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

      <section className="relative bg-gradient-hero py-20 pt-[120px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
            About NH Global Education
          </h1>
          <p className="md:text-xl text-white/90 max-w-2xl mx-auto">
            We empower aspiring students with comprehensive guidance and
            personalized support to access global educational opportunities.
          </p>
        </div>
      </section>
      <main>
        <section className="container mx-auto px-4 lg:px-8 mt-8">
          <img
            src="https://cdn.nhglobaleducation.com/hero/5.jpg"
            alt="NH Global Education advisors guiding students to universities abroad"
            loading="lazy"
            className="w-full h-70 md:h-70 object-cover rounded-lg shadow-elegant animate-fade-in"
          />
        </section>

        <section className="container mx-auto px-4 lg:px-8 mt-12 grid md:grid-cols-3 gap-6">
          <article className="p-6 rounded-lg border border-border bg-card shadow-sm animate-fade-in transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-foreground">
              Our Mission
            </h2>
            <p className="mt-2 text-muted-foreground">
              To empower aspiring students with comprehensive guidance,
              personalized support, and expert counseling, facilitating their
              seamless access to global educational opportunities. We are
              dedicated to nurturing academic aspirations, fostering cultural
              exchange, and shaping future leaders through international
              education.
            </p>
          </article>
          <article className="p-6 rounded-lg border border-border bg-card shadow-sm animate-fade-in transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-foreground">
              Our Vision
            </h2>
            <p className="mt-2 text-muted-foreground">
              To become a global leader in educational consultancy, recognized
              for our commitment to excellence, innovative solutions, and
              unwavering support for students. We aim to create a world where
              education transcends boundaries, empowering individuals to make a
              positive impact on their communities and global society.
            </p>
          </article>
          <article className="p-6 rounded-lg border border-border bg-card shadow-sm animate-fade-in transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-foreground">
              Our Values
            </h2>
            <p className="mt-2 text-muted-foreground">
              We prioritize students with a personalized approach, uphold
              integrity, celebrate inclusivity, drive innovation, foster a
              global perspective, and engage in social responsibility. These
              values guide our mission to empower students on their educational
              journey.
            </p>
          </article>
        </section>

        <section className="container mx-auto px-4 lg:px-8 mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-muted text-foreground text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <p className="text-3xl font-bold">10k+</p>
            <p className="text-muted-foreground">Applications Supported</p>
          </div>
          <div className="p-6 rounded-lg bg-muted text-foreground text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <p className="text-3xl font-bold">150+</p>
            <p className="text-muted-foreground">Partner Universities</p>
          </div>
          <div className="p-6 rounded-lg bg-muted text-foreground text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <p className="text-3xl font-bold">20</p>
            <p className="text-muted-foreground">Expert Advisors</p>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 my-16">
          <div className="rounded-lg border border-border p-6 bg-card shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-foreground">Our Story</h2>
            <p className="mt-2 text-muted-foreground">
              Founded by alumni of top global universities, NH Global Education
              was created to remove barriers and confusion from the study abroad
              process. Today, we help thousands of students every year connect
              with the right opportunities, fostering academic aspirations and
              cultural exchange.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
