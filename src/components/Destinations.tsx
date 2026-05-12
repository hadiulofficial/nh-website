import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: 'Malaysia',
    city: 'Kuala Lumpur',
    image: '/destination/malaysia.jpg',
    universities: '120+',
    students: '5,000+',
    programs: 'Engineering, Business, Arts',
    description:
      'Experience world-renowned education in the heart of history and innovation.',
  },
  {
    id: 2,
    name: 'Australia',
    city: 'Sydney',
    image: '/destination/Australia.jpg',
    universities: '85+',
    students: '3,500+',
    programs: 'Medicine, IT, Marine Science',
    description:
      "Study in one of the world's most liveable cities with stunning coastal views.",
  },
  {
    id: 3,
    name: 'Canada',
    city: 'Toronto',
    image: '/destination/Canada.jpg',
    universities: '95+',
    students: '4,200+',
    programs: 'AI, Healthcare, Finance',
    description:
      "Discover multicultural excellence in North America's education hub.",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Study Destinations
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            Popular Study Destinations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore top destinations where thousands of students have built
            their futures with world-class education opportunities.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-foreground backdrop-blur-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    {destination.city}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">
                    {destination.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {destination.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{destination.universities} Universities</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{destination.students} Students Placed</span>
                  </div>
                </div>

                <Link to="/universities">
                  <Button variant="outline" className="w-full group/btn">
                    Explore Programs
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link to="/universities">
            <Button variant="link" className="text-primary font-medium group">
              View All Destinations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
