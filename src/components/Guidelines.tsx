'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, Trash2, Car } from 'lucide-react';
import Image from 'next/image';

const guidelines = [
  {
    icon: ShieldCheck,
    title: 'Security & Safety First',
    description: 'Adhere to all security protocols and report suspicious activity.',
  },
  {
    icon: Handshake,
    title: 'Prompt Payment of Dues',
    description: 'Timely payment of dues is crucial for community maintenance.',
  },
  {
    icon: Trash2,
    title: 'Proper Waste Management',
    description: 'Dispose of waste in designated areas and keep our community clean.',
  },
  {
    icon: Car,
    title: 'Responsible Parking',
    description: 'Park in designated areas and respect parking regulations.',
  },
];

const Guidelines = () => {
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
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <motion.section
      id="guidelines"
      className="py-24 bg-green-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sans font-bold text-green-800 mb-2">
            Living in Harmony
          </h2>
          <p className="text-lg font-body text-green-700">
            A few guidelines to ensure a peaceful and orderly community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Guidelines List */}
          <motion.div className="space-y-8" variants={containerVariants}>
            {guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="bg-green-800 text-white rounded-full p-3 mr-4">
                  <guideline.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-sans font-semibold text-green-800">
                    {guideline.title}
                  </h3>
                  <p className="font-body text-green-700 mt-1">
                    {guideline.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
            variants={imageVariants}
          >
            <Image
              src="/images/road3.jpg"
              alt="A clean and orderly street in the community"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Guidelines; 