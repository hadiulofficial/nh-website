import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
    // image: 'https://cdn.nhglobaleducation.com/team/1000105894.png',
    image: '/team/1000105894.png',
    whatsapp: 'https://wa.me/601161175133',
    facebook: 'https://www.facebook.com/noushad.hossainrasel',
  },
  {
    name: 'Shahadat Hossain',
    role: 'Office Manager',
    // image: 'https://cdn.nhglobaleducation.com/team/Sahadat.png',
    image: '/team/Sahadat.png',
    whatsapp: 'https://wa.me/8801833758038',
    facebook: 'https://www.facebook.com/share/1BB7kTqc5U/',
  },
  {
    name: 'Shaima Promi',
    role: 'Global Education & Operation Manager',
    // image: 'https://cdn.nhglobaleducation.com/team/IMG-20250811-WA0000.jpg',
    image: '/team/IMG-20250811-WA0000.jpg',
    whatsapp: 'https://wa.me/601161785257',
    facebook: 'https://www.facebook.com/saima.binte.jahan.promi',
  },
  {
    name: 'Hasan Al Mamun',
    role: 'Visa & Counselling Officer',
    // image: 'https://cdn.nhglobaleducation.com/team/Hasan.jpeg',
    image: '/team/Hasan.jpeg',
    whatsapp: 'https://wa.me/8801618660577',
    facebook: 'https://www.facebook.com/hasan.nhglobal/',
  },
  {
    name: 'Sirajam Munira Nowshin',
    role: 'Administrative Officer',
    // image: 'https://cdn.nhglobaleducation.com/team/1000105888.png',
    image: '/team/1000105888.png',
    whatsapp: 'https://wa.me/601161175133',
    facebook: 'https://www.facebook.com/nowshin.munira.335589',
  },
  {
    name: 'Easmin Akter Sumi',
    role: 'Student counselor',
    // image: 'https://cdn.nhglobaleducation.com/team/sumi%20nh.jpeg',
    image: '/team/sumi.jpeg',
    whatsapp: 'https://wa.me/8801622816690',
    facebook: 'https://www.facebook.com/studynhglobaleducation',
  },
  {
    name: 'Sanjida Akter shanta',
    role: 'Student Counselor',
    // image: 'https://cdn.nhglobaleducation.com/team/Shanta.jpeg',
    image: '/team/Shanta.jpeg',
    whatsapp: 'https://wa.me/01989984867',
    facebook: 'https://www.facebook.com/shorna.amin.2025',
  },
  {
    name: 'Md Siam Hossain',
    role: 'Student Counselor',
    // image: 'https://cdn.nhglobaleducation.com/team/unnamed.jpg',
    image: '/team/unnamed.jpg',
    whatsapp: 'https://wa.me/601162040790',
    facebook: 'https://www.facebook.com/siam.hossain.nhglobal',
  },
  {
    name: 'Sanjana Afroj',
    role: 'Student Counselor',
    // image: 'https://cdn.nhglobaleducation.com/team/Sanjana.jpeg',
    image: '/team/Sanjana.jpeg',
    whatsapp: 'https://wa.me/8801609586771',
    facebook: 'https://www.facebook.com/tasnia.nh.global',
  },
  {
    name: 'Meherunnesa Mim',
    role: 'Student Counselor',
    // image: 'https://cdn.nhglobaleducation.com/team/mim.jpg',
    image: '/team/mim.jpg',
    whatsapp: 'https://wa.me/8801788761996',
    facebook: 'https://www.facebook.com/profile.php?id=61583458745581',
  },
  {
    name: 'Mehedi Hasan Ashik',
    role: 'Visual Content designer',
    // image: 'https://cdn.nhglobaleducation.com/team/Ashiq.png',
    image: '/team/Ashiq.png',
    whatsapp: 'https://wa.me/8801621233140',
    facebook: '#',
  },
  {
    name: 'Md Sifat Ullah',
    role: 'Office Assistant',
    // image: 'https://cdn.nhglobaleducation.com/team/Sifat.jpeg',
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
    <div className='min-h-screen bg-background'>
      <Helmet>
        <title>Our Team | StudyGlobal</title>
        <meta
          name='description'
          content='Meet the 20 expert advisors at StudyGlobal helping students study abroad: admissions, visas, scholarships, and more.'
        />
      </Helmet>
      <Navbar />

      <section className='relative bg-gradient-hero py-20 pt-[120px]'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-2xl md:text-4xl font-bold text-white mb-6'>
            Meet Our Team
          </h1>
          <p className='md:text-xl text-white/90 max-w-2xl mx-auto'>
            A diverse team of counselors and specialists committed to your
            journey abroad.
          </p>
        </div>
      </section>

      <main className='container mx-auto px-4 lg:px-8 my-12'>
        <section className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {members.map((member) => (
            <Card
              key={member.name}
              className='group relative overflow-hidden rounded-lg shadow hover:shadow transition-all duration-300 bg-white'
            >
              <CardContent className='p-6 flex flex-col items-center text-center'>
                <div className='relative w-36 h-48 mb-4 overflow-hidden rounded-md'>
                  <Avatar className='w-full h-full'>
                    <AvatarImage
                      src={member.image}
                      alt={`Team member ${member.name} - ${member.role} at StudyGlobal`}
                      loading='lazy'
                      className='object-cover object-top w-full h-full'
                    />
                    <AvatarFallback className='text-xl font-semibold bg-gray-200'>
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h2 className='text-xl font-semibold text-foreground mb-1'>
                  {member.name}
                </h2>
                <p className='text-primary font-medium text-sm mb-4'>
                  {member.role}
                </p>
                <div className='flex gap-4'>
                  <Link
                    to={member.whatsapp}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary hover:text-primary/80 transition-colors'
                    aria-label={`Contact ${member.name} on WhatsApp`}
                  >
                    <FaWhatsapp className='size-6' />
                  </Link>
                  <Link
                    to={member.facebook}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary hover:text-primary/80 transition-colors'
                    aria-label={`Visit ${member.name}'s Facebook profile`}
                  >
                    <FaFacebook className='size-6' />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
