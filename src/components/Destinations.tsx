import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCapIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: 'Malaysia',
    city: 'Kuala Lumpur',
    // image: "https://cdn.nhglobaleducation.com/destination/malaysia.jpg",
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
    // image: 'https://cdn.nhglobaleducation.com/destination/Australia.jpg',
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
    // image: 'https://cdn.nhglobaleducation.com/destination/Canada.jpg',
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
    <section id='destinations' className='md:py-20 bg-muted/30'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-2xl md:text-4xl font-bold text-foreground mb-6'>
            Popular Study Destinations
          </h2>
          <p className='md:text-xl text-muted-foreground max-w-3xl mx-auto'>
            Explore top destinations where thousands of students have built
            their futures.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {destinations.map((destination, index) => (
            <Card
              key={destination.id}
              className='group overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-gradient-card'
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className='relative overflow-hidden'>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent' />
                <div className='absolute top-4 left-4'>
                  <span className='bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium'>
                    {destination.city}
                  </span>
                </div>
              </div>

              <CardContent className='p-6'>
                <h3 className='text-2xl font-bold text-foreground mb-2'>
                  {destination.name}
                </h3>
                <p className='text-muted-foreground mb-4'>
                  {destination.description}
                </p>

                <div className='space-y-3 mb-6'>
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <GraduationCapIcon className='h-4 w-4 mr-2 text-primary' />
                    <span>{destination.universities} Universities</span>
                  </div>
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <UsersIcon className='h-4 w-4 mr-2 text-primary' />
                    <span>{destination.students} Students Placed</span>
                  </div>
                  <div className='flex items-center text-sm text-muted-foreground'>
                    <MapPinIcon className='h-4 w-4 mr-2 text-primary' />
                    <span>{destination.programs}</span>
                  </div>
                </div>

                <Link to='/universities'>
                  <Button variant='default' className='w-full'>
                    Explore Programs
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
