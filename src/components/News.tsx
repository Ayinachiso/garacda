'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    image: '/images/road2.jpg',
    title: 'Major Road Rehabilitation Project Begins',
    description: 'We are thrilled to announce the start of a major road rehabilitation project that will significantly improve our community\'s infrastructure and driving experience.',
    alt: 'Road Rehabilitation',
  },
  {
    id: 2,
    image: '/images/gate.jpg',
    title: 'New Automated Security Gate Installed',
    description: 'Our new state-of-the-art automated security gate is now operational, enhancing the safety and security of all residents. Your peace of mind is our priority.',
    alt: 'Automated Security Gate',
  },
  {
    id: 3,
    image: '/images/secretariat.jpg',
    title: 'Grand Opening of the New Community Secretariat',
    description: 'The new community secretariat is officially open! This modern facility will serve as a hub for all community activities and administrative functions.',
    alt: 'Community Secretariat',
  },
];

const News = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="news"
      className="py-24 bg-green-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl font-sans font-bold text-green-800 mb-2">
            Latest News & Updates
          </h2>
          <p className="text-lg font-body text-green-700">
            Stay informed with the latest happenings in our community.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {newsItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-300 group"
              variants={itemVariants}
            >
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-sans font-semibold text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-green-700 mb-4">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 font-semibold hover:underline"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default News;
