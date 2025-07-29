'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-green-700 mb-3">
            About Us
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            Discover the values that bring our community together
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">
                A Shared Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gbemisola Adenubi CDA is a collaborative effort, uniting
                residents of Gbemisola Adenubi Street and five adjoining streets
                to work together for the betterment of our community.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-2">
                Empowering Our Neighbors
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of community, fostering a sense of
                belonging, responsibility, and collective action to create a
                thriving environment for all.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <Image
              src="/images/groupPhoto.jpg"
              alt="Community Gathering"
              width={600}
              height={400}
              className="rounded-xl shadow-xl object-cover w-full h-80 lg:h-96 transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-xl bg-green-600/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
