'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Users, HeartHandshake } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: '24/7 security and surveillance for your peace of mind.',
  },
  {
    icon: Zap,
    title: 'Reliable Power',
    description: 'Uninterrupted power supply with dedicated infrastructure.',
  },
  {
    icon: Users,
    title: 'Strong Community',
    description: 'Regular events and meetings to foster a strong community bond.',
  },
  {
    icon: HeartHandshake,
    title: 'Welfare Support',
    description: 'A supportive network for all residents in times of need.',
  },
];

const Benefits = () => {
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
    hidden: { x: -20, opacity: 0 },
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
      id="benefits"
      className="py-24 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sans font-bold text-primary mb-2">
            Why You'll Love Living Here
          </h2>
          <p className="text-lg font-body text-neutral-dark">
            Discover the unparalleled benefits of our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
            variants={imageVariants}
          >
            <Image
              src="/images/road4.jpg"
              alt="A beautiful road in the community"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>

          {/* Benefits List */}
          <motion.div className="space-y-8" variants={containerVariants}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="bg-secondary text-primary rounded-full p-3 mr-4">
                  <benefit.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-sans font-semibold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-neutral-dark mt-1">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
