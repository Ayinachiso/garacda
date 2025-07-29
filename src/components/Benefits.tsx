'use client';

import {
  Star,
  Network,
  Percent,
  Calendar,
  BookOpen,
  Handshake,
} from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      icon: Star,
      title: 'Exclusive Access',
      description:
        'Enjoy exclusive access to community events and workshops.',
    },
    {
      id: 2,
      icon: Network,
      title: 'Support Network',
      description:
        'Join a network of supportive neighbors and resources.',
    },
    {
      id: 3,
      icon: Percent,
      title: 'Member Discounts',
      description:
        'Receive discounts at local businesses and services.',
    },
    {
      id: 4,
      icon: Calendar,
      title: 'Community Events',
      description:
        'Participate in regular community gatherings and activities.',
    },
    {
      id: 5,
      icon: BookOpen,
      title: 'Educational Resources',
      description:
        'Access workshops and learning programs for personal growth.',
    },
    {
      id: 6,
      icon: Handshake,
      title: 'Networking Opportunities',
      description:
        'Connect with other residents for collaboration and support.',
    },
  ];

  return (
    <section id="benefits" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-green-700 mb-3">
            Resident Benefits
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded"></div>
          <p className="text-gray-500 mt-4 text-sm max-w-lg mx-auto">
            See the rewards of active membership in our growing community.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center hover:shadow-md hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <benefit.icon size={28} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
