'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Highend from '../assets/images/highendev.avif';
import HomeTheater from '../assets/images/hometheater.avif';
import Automation from '../assets/images/automation.avif';

const productCategories = [
  {
    name: 'High-End AV',
    description: 'Experience acoustic perfection with our curated selection of audiophile-grade speaker systems, amplifiers, and more.',
    image: Highend,
    link: '/high-end-av',
  },
  {
    name: 'Home Theater',
    description: 'Bring the cinema home with cutting-edge projection systems, acoustics, and immersive surround sound setups.',
    image: HomeTheater,
    link: '#home-theater',
  },
  {
    name: 'Automation & Security',
    description: 'Advanced control and monitoring systems that simplify and secure your living environment.',
    image: Automation,
    link: '#automation',
  },
];

export default function OurProducts() {
  return (
    <section id="products" className="bg-white py-24 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          From world-class AV systems to secure smart homes, we bring together technology and aesthetics to deliver unmatched lifestyle experiences.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {productCategories.map((product) => (
          <motion.div
            key={product.name}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="group relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 hover:shadow-xl transition-all"
          >
            <div className="h-48 w-full relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 transition-all duration-300 group-hover:-translate-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>

            {/* Learn More Button - plain black text with arrow */}
            <div className="absolute left-6 no-underline bottom-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <Link
                to={product.link}
                className="text-sm no-underline text-black font-medium"
              >
                Learn More →
              </Link>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
