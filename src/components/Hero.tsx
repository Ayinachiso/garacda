'use client';

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-black/40 to-black/40">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/images/animatedLogo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-5"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl px-8 mx-auto">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-lg animate-fade-in">
          GBEMISOLA ADENUBI COMMUNITY DEVELOPMENT ASSOCIATION
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl mb-14 opacity-95 animate-fade-in-delay">
          Building a Stronger Community Together
        </p>
        
        {/* Hero Links */}
        <div className="flex gap-6 justify-center flex-wrap mb-8 animate-fade-in-delay-2">
          <a
            href="#about"
            className="text-white bg-transparent border-2 border-white rounded-full px-8 py-4 no-underline font-medium transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
          >
            About Us
          </a>
          <a
            href="#news"
            className="text-white bg-transparent border-2 border-white rounded-full px-8 py-4 no-underline font-medium transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
          >
            News
          </a>
          <a
            href="#guidelines"
            className="text-white bg-transparent border-2 border-white rounded-full px-8 py-4 no-underline font-medium transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
          >
            Community Guidelines
          </a>
          <a
            href="#benefits"
            className="text-white bg-transparent border-2 border-white rounded-full px-8 py-4 no-underline font-medium transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
          >
            Residents Benefits
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
        <span className="block text-sm mb-2">Scroll Down</span>
        <ChevronDown size={20} />
      </div>
    </header>
  );
} 