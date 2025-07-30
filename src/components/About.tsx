'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Gem } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const values = [
    {
      icon: Users,
      title: 'Unity in Community',
      description: 'We believe in the power of togetherness. Our community thrives on mutual respect, collaboration, and a shared sense of belonging.',
    },
    {
      icon: TrendingUp,
      title: 'Progress & Innovation',
      description: 'We are committed to continuous improvement, embracing new ideas and technologies to enhance the lives of our residents.',
    },
    {
      icon: Gem,
      title: 'Quality of Life',
      description: 'Our focus is on creating a safe, comfortable, and beautiful environment where every resident can flourish and feel at home.',
    },
  ];

  return (
    <motion.section
      id="about"
      className="py-24 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        {/* Top Section: Welcome */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-sans font-bold text-[#0A4F0A] mb-4">
              Welcome to Our Vibrant Community
            </h2>
            <p className="font-body text-lg text-neutral-dark mb-6">
              Gbemisola Adenubi CDA is more than just a place to live; it's a thriving, welcoming community where neighbors become family. We are dedicated to creating a safe, beautiful, and connected environment for everyone.
            </p>
          </motion.div>
          <motion.div className="relative h-80 rounded-lg overflow-hidden shadow-lg" variants={itemVariants}>
            <Image
              src="/images/house1.jpg"
              alt="Beautiful house in the community"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Bottom Section: Our Values */}
        <motion.div variants={containerVariants}>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-sans font-bold text-primary mb-2">
              Our Core Values
            </h3>
            <p className="text-lg font-body text-neutral-dark">
              The principles that guide our community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-neutral-light p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
                variants={itemVariants}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary text-white rounded-full p-4">
                    <value.icon size={32} />
                  </div>
                </div>
                <h4 className="text-2xl font-sans font-semibold text-primary mb-2">
                  {value.title}
                </h4>
                <p className="font-body text-neutral-dark">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;