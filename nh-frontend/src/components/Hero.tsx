import { useState } from 'react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  {
    // image: "https://cdn.nhglobaleducation.com/hero/1.jpg",
    image: '/hero/2.jpg',
  },
  {
    // image: 'https://cdn.nhglobaleducation.com/hero/5.jpg',
    image: '/hero/1.jpg',
  },
  {
    // image: 'https://cdn.nhglobaleducation.com/hero/4.jpg',
    image: '/hero/3.jpg',
  },

  {
    // image: 'https://cdn.nhglobaleducation.com/hero/2.jpg',
    image: '/hero/4.jpg',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const totalSlides = slides.length;

  return (
    <section className='mt-[70px] sm:mt-0'>
      <div className='container mx-auto pt-10 pb-10 md:pt-20 px-4 sm:px-6 lg:px-8'>
        <div className='relative w-full h-[30vh] sm:h-[40vh] lg:h-[70vh] overflow-hidden rounded-xl shadow-2xl'>
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={false}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet bg-white opacity-50',
              bulletActiveClass:
                'swiper-pagination-bullet-active bg-white opacity-100',
            }}
            effect='fade'
            fadeEffect={{ crossFade: true }}
            className='w-full h-full'
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className='relative w-full h-full'>
                  <img
                    src={slide.image}
                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10'></div>
                  <div className='absolute inset-0 z-20 flex flex-col justify-end pb-12'>
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8'></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom Navigation Arrows */}
            {currentIndex > 0 && (
              <div
                className='absolute left-4 sm:left-6 top-1/2 -translate-y-1/2  hidden  z-30 w-12 h-12 sm:w-14 sm:h-14 bg-white/95 hover:bg-white rounded-full md:flex items-center justify-center shadow-xl cursor-pointer transition-all duration-300'
                onClick={() => swiper?.slidePrev()}
              >
                <svg
                  className='w-6 h-6 sm:w-7 sm:h-7 text-gray-800'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </div>
            )}
            {currentIndex < totalSlides - 1 && (
              <div
                className='absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 hidden z-30 w-12 h-12 sm:w-14 sm:h-14 bg-white/95 hover:bg-white rounded-full md:flex items-center justify-center shadow-xl cursor-pointer transition-all duration-300'
                onClick={() => swiper?.slideNext()}
              >
                <svg
                  className='w-6 h-6 sm:w-7 sm:h-7 text-gray-800'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </div>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
