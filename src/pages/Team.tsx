import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Users, Award, Heart } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  image: string;
  whatsapp: string;
  facebook: string;
}

const members: Member[] = [
  {
    name: 'Md Rasel Hossain',
    role: 'CEO and Founder',
    image: '/team/1000105894.png',
    whatsapp: 'https://wa.me/601161175133',
    facebook: 'https://www.facebook.com/noushad.hossainrasel',
  },
  {
    name: 'Shahadat Hossain',
    role: 'Office Manager',
    image: '/team/Sahadat.png',
    whatsapp: 'https://wa.me/8801833758038',
    facebook: 'https://www.facebook.com/share/1BB7kTqc5U/',
  },
  {
    name: 'Shaima Promi',
    role: 'Global Education & Operation Manager',
    image: '/team/IMG-20250811-WA0000.jpg',
    whatsapp: 'https://wa.me/601161785257',
    facebook: 'https://www.facebook.com/saima.binte.jahan.promi',
  },
  {
    name: 'Hasan Al Mamun',
    role: 'Visa & Counselling Officer',
    image: '/team/Hasan.jpeg',
    whatsapp: 'https://wa.me/8801618660577',
    facebook: 'https://www.facebook.com/hasan.nhglobal/',
  },
  {
    name: 'Sirajam Munira Nowshin',
    role: 'Administrative Officer',
    image: '/team/1000105888.png',
    whatsapp: 'https://wa.me/601161175133',
    facebook: 'https://www.facebook.com/nowshin.munira.335589',
  },
  {
    name: 'Easmin Akter Sumi',
    role: 'Student counselor',
    image: '/team/sumi.jpeg',
    whatsapp: 'https://wa.me/8801622816690',
    facebook: 'https://www.facebook.com/studynhglobaleducation',
  },
  {
    name: 'Sanjida Akter shanta',
    role: 'Student Counselor',
    image: '/team/Shanta.jpeg',
    whatsapp: 'https://wa.me/01989984867',
    facebook: 'https://www.facebook.com/shorna.amin.2025',
  },
  {
    name: 'Md Siam Hossain',
    role: 'Student Counselor',
    image: '/team/unnamed.jpg',
    whatsapp: 'https://wa.me/601162040790',
    facebook: 'https://www.facebook.com/siam.hossain.nhglobal',
  },
  {
    name: 'Sanjana Afroj',
    role: 'Student Counselor',
    image: '/team/Sanjana.jpeg',
    whatsapp: 'https://wa.me/8801609586771',
    facebook: 'https://www.facebook.com/tasnia.nh.global',
  },
  {
    name: 'Meherunnesa Mim',
    role: 'Student Counselor',
    image: '/team/mim.jpg',
    whatsapp: 'https://wa.me/8801788761996',
    facebook: 'https://www.facebook.com/profile.php?id=61583458745581',
  },
  {
    name: 'Mehedi Hasan Ashik',
    role: 'Visual Content designer',
    image: '/team/Ashiq.png',
    whatsapp: 'https://wa.me/8801621233140',
    facebook: '#',
  },
  {
    name: 'Md Sifat Ullah',
    role: 'Office Assistant',
    image: '/team/Sifat.jpeg',
    whatsapp: '#',
    facebook: '#',
  },
];

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Team | NH Global Education</title>
        <meta
          name="description"
          content="Meet the expert advisors at NH Global Education helping students study abroad: admissions, visas, scholarships, and more."
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
                <Users className="w-4 h-4" />
                Our Expert Team
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
                Meet the People Behind Your Success
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                A diverse team of counselors and specialists committed to guiding you through every step of your journey abroad.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 md:mt-10 grid grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Users, number: '12+', label: 'Team Members' },
              { icon: Award, number: '50+', label: 'Years Combined Experience' },
              { icon: Heart, number: '5000+', label: 'Students Helped' },
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

      {/* Team Grid */}
      <main className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Leadership & Team
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Dedicated Professionals
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get to know the experts who will guide you through your international education journey.
          </p>
        </div>

        {/* Team Cards Grid */}
        <section className="grid gap-5 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map((member, index) => (
            <Card
              key={member.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback Initials */}
                  <div
                    className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40"
                  >
                    <span className="text-3xl md:text-4xl font-bold text-primary">
                      {getInitials(member.name)}
                    </span>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links - Shown on Hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {member.whatsapp !== '#' && (
                      <Link
                        to={member.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors shadow-lg"
                        aria-label={`Contact ${member.name} on WhatsApp`}
                      >
                        <FaWhatsapp className="w-5 h-5" />
                      </Link>
                    )}
                    {member.facebook !== '#' && (
                      <Link
                        to={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white transition-colors shadow-lg"
                        aria-label={`Visit ${member.name}'s Facebook profile`}
                      >
                        <FaFacebook className="w-5 h-5" />
                      </Link>
                    )}
                  </div>

                  {/* Badge for CEO */}
                  {index === 0 && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
                        Founder
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 md:p-5 text-center">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 truncate">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium truncate">
                    {member.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Connect with our team today and take the first step towards your international education dream.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
