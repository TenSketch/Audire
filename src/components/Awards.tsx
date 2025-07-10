'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Awards() {
  return (
    <section className="bg-white-100 py-16 px-6 md:px-20" id="awards">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <Award className="text-yellow-500 mx-auto mb-4" size={48} />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Recognized for Excellence</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We were honored with the <strong>“Best Sound of the Show”</strong> award at What Hi-Fi Show 2013, showcasing our
          unmatched commitment to high-end audio performance.
        </p>
      </motion.div>
    </section>
  );
}
