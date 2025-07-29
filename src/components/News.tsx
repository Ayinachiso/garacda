'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function News() {
  const [modules, setModules] = useState<any[]>([]);

  useEffect(() => {
    const loadModules = async () => {
      const { Navigation, Pagination, Autoplay } = await import('swiper/modules');
      setModules([Navigation, Pagination, Autoplay]);
    };
    loadModules();
  }, []);

  const newsItems = [
    {
      id: 1,
      image: '/images/garaLogo.png',
      title: 'GARA CDA Now Has a Website',
      description:
        'We are excited to announce that Gbemisola Adenubi Community Development Association has launched its official website!',
      alt: 'GARA Website',
    },
    {
      id: 2,
      image: '/icons/comingSoon.jpg',
      title: 'Payment Section Coming Soon',
      description:
        'Stay tuned for our new payment section, which will be available shortly!',
      alt: 'Payment Coming Soon',
    },
    {
      id: 3,
      image: '/icons/advertisementComingSoon.png',
      title: 'Advertisement Section Coming Soon',
      description:
        'Stay tuned for exciting ads and offers coming your way!',
      alt: 'Advertisement Coming Soon',
    },
  ];

  return (
    <section id="news" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-green-700 mb-2">Latest News</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded"></div>
          <p className="text-gray-500 mt-3 text-sm">
            Updates and announcements from our vibrant community
          </p>
        </div>

        {/* News Slider */}
        <div className="relative group">
          <Swiper
            modules={modules}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="news-swiper"
          >
            {newsItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-green-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm transition-colors"
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="swiper-button-prev !text-green-700 !bg-white !w-10 !h-10 !rounded-full !shadow-lg after:!text-lg hover:!bg-green-100"></div>
          <div className="swiper-button-next !text-green-700 !bg-white !w-10 !h-10 !rounded-full !shadow-lg after:!text-lg hover:!bg-green-100"></div>

          {/* Pagination Dots */}
          <div className="swiper-pagination !bottom-0 !mt-10"></div>
        </div>
      </div>

      {/* Scoped Style Overrides */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #4CAF50 !important;
        }
      `}</style>
    </section>
  );
}
