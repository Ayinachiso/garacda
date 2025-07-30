'use client';

import { FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-black/40 to-black/40">
      {/* Background Video */}
      <video
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/images/animatedLogo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-5"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-8 md:px-12 mx-auto">
        <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 drop-shadow-lg animate-fade-in leading-snug sm:leading-tight">
          GBEMISOLA ADENUBI COMMUNITY DEVELOPMENT ASSOCIATION
        </h1>
        <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 lg:mb-16 opacity-95 animate-fade-in-delay">
          Building a Stronger Community Together
        </p>

        {/* Hero Links */}
        <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-8 justify-center mb-8 sm:mb-14 lg:mb-20 animate-fade-in-delay-2">
          <a
            href="#about"
            className="text-white bg-transparent border-2 border-white rounded-full px-5 py-2 sm:px-8 sm:py-4 md:px-12 md:py-5 no-underline font-semibold text-sm sm:text-lg md:text-xl transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
          >
            About Us
          </a>
          <a
            href="#news"
            className="text-white bg-transparent border-2 border-white rounded-full px-5 py-2 sm:px-8 sm:py-4 md:px-12 md:py-5 no-underline font-semibold text-sm sm:text-lg md:text-xl transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
          >
            News
          </a>
          <a
            href="#guidelines"
            className="text-white bg-transparent border-2 border-white rounded-full px-5 py-2 sm:px-8 sm:py-4 md:px-12 md:py-5 no-underline font-semibold text-sm sm:text-lg md:text-xl transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
          >
            Community Guidelines
          </a>
          <a
            href="#benefits"
            className="text-white bg-transparent border-2 border-white rounded-full px-5 py-2 sm:px-8 sm:py-4 md:px-12 md:py-5 no-underline font-semibold text-sm sm:text-lg md:text-xl transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
          >
            Residents Benefits
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="
        absolute
        left-1/2 -translate-x-1/2
        bottom-4 sm:bottom-8 md:bottom-14 lg:bottom-8 xl:bottom-4
        flex flex-col items-center
        z-20
        w-fit
        text-white
        text-center
        animate-bounce
        pointer-events-none
      ">
        <span className="block text-white text-base sm:text-base lg:text-xl mb-1 sm:mb-2 lg:mb-3">Scroll Down</span>
        <FiChevronDown size={20} className="text-white sm:size-24 md:size-20 lg:size-15" />
      </div>
    </header>
  );
}