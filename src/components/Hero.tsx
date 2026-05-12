import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/hero/2.jpg',
    title: 'Your Journey to Global Education Starts Here',
    subtitle: 'Expert guidance for studying abroad in top universities worldwide',
  },
  {
    image: '/hero/1.jpg',
    title: 'Unlock Your Potential Abroad',
    subtitle: 'Personalized support from application to graduation',
  },
  {
    image: '/hero/3.jpg',
    title: 'Transform Your Future',
    subtitle: 'Join thousands of successful students across the globe',
  },
  {
    image: '/hero/4.jpg',
    title: 'World-Class Education Awaits',
    subtitle: 'Comprehensive visa and admission assistance',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const totalSlides = slides.length;

  return (
    <section className="relative pt-16">
      {/* Full-width hero with overlay content */}
      <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={false}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !w-2 !h-2 !bg-white/50 !opacity-100',
            bulletActiveClass: '!bg-white !w-8 !rounded-full',
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="w-full h-full"
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-2xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/universities">
                          <Button size="lg" className="group text-base px-8 py-6">
                            Explore Universities
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                        <Link to="/contact">
                          <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
                            Get Free Consultation
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="absolute bottom-8 right-8 z-30 hidden md:flex items-center gap-3">
          <button
            onClick={() => swiper?.slidePrev()}
            disabled={currentIndex === 0}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiper?.slideNext()}
            disabled={currentIndex === totalSlides - 1}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-8 left-8 z-30 hidden md:block">
          <div className="flex items-center gap-2 text-white/80 font-medium">
            <span className="text-2xl text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-sm">/</span>
            <span className="text-sm">{String(totalSlides).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/20">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '5000+', label: 'Students Placed' },
              { number: '100+', label: 'Partner Universities' },
              { number: '98%', label: 'Visa Success Rate' },
            ].map((stat, index) => (
              <div key={index} className="py-6 md:py-8 px-4 md:px-8 text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
