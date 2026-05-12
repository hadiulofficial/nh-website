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
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Carousel with margins */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-secondary">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !w-2 !h-2 !bg-white/50 !opacity-100 !mx-1',
              bulletActiveClass: '!bg-white !w-8 !rounded-full',
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className="w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.4/1]"
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    {...(index === 0 ? { fetchPriority: 'high' as const } : {})}
                  />
                  {/* Refined gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/45 to-foreground/15" />
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full p-6 md:p-10 lg:p-14">
                      <div className="max-w-3xl">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-3 md:mb-5 text-balance">
                          {slide.title}
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl">
                          {slide.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link to="/universities">
                            <Button size="lg" className="group text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-lg">
                              Explore Universities
                              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                          <Link to="/contact">
                            <Button
                              size="lg"
                              variant="outline"
                              className="text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
                            >
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
          <div className="absolute top-1/2 -translate-y-1/2 left-3 md:left-5 z-30">
            <button
              onClick={() => swiper?.slidePrev()}
              aria-label="Previous slide"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-3 md:right-5 z-30">
            <button
              onClick={() => swiper?.slideNext()}
              aria-label="Next slide"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-lg"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Slide counter */}
          <div className="absolute top-4 md:top-6 right-4 md:right-6 z-30">
            <div className="flex items-center gap-1.5 text-white/90 font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs md:text-sm">
              <span className="font-bold text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-white/60">/</span>
              <span className="text-white/60">{String(totalSlides).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Stats bar - cleaner card style */}
        <div className="mt-6 md:mt-8 bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '5,000+', label: 'Students Placed' },
              { number: '100+', label: 'Partner Universities' },
              { number: '98%', label: 'Visa Success Rate' },
            ].map((stat, index) => (
              <div key={index} className="py-5 md:py-7 px-3 md:px-6 text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 tracking-tight">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
