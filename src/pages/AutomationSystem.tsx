'use client';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import ImageLutron from '../assets/images/lutron.avif';
import ImageRTI from '../assets/images/rti.avif';

const brands = [
  {
    name: 'Lutron',
    subtitle: 'The Future is Connected',
    image: ImageLutron,
    content: [
      "Lutron is a technology-centered and people-driven company with a long history of growth and innovation in lighting control systems.",
      "Founded by Joel Spira in the late 1950s, Lutron revolutionized lighting by inventing the first solid-state dimmer, making lighting control accessible for residential use.",
      "Over the decades, Lutron has led innovation with 2,700+ patents, offering the industry’s first preset systems, electronic dimming ballasts, and full light + shade control systems.",
      "Their product range now spans over 15,000 items, used in high-profile projects like the New York Times Building, Guggenheim Museum Bilbao, Windsor Castle, and even the White House.",
      "Lutron systems help customers reduce energy usage, prolong lamp life, and control lighting from smartphones, remote controls, and more."
    ],
    link: 'https://www.lutron.com/',
  },
  {
    name: 'RTI (Remote Technologies Inc.)',
    subtitle: 'Control That Goes Beyond',
    image: ImageRTI,
    content: [
      "RTI designs sophisticated yet user-friendly control systems for homes and commercial environments, offering seamless automation through handheld remotes, in-wall touchpanels, and mobile apps.",
      "Their award-winning RTiPanel app and Virtual Panel software allow global remote control access from iPhones, Android devices, and Windows PCs.",
      "RTI products are configured via the renowned Integration Designer software, enabling fully customized interfaces tailored to each installation.",
      "RTI was founded in 1992 and remains deeply focused on the custom installer market, offering educational programs, dealer incentives, and integration partnerships.",
      "The brand’s solutions integrate effortlessly with lighting, audio, climate, and security systems, providing unmatched command of every environment."
    ],
    link: 'https://www.rticorp.com/',
  }
];

export default function AutomationSystems() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="relative bg-white text-gray-800 px-6 md:px-20 py-20 overflow-hidden">
        {/* Blurred background accents */}
        <div className="absolute top-0 left-0 w-[30vw] h-[30vw] bg-amber-100 rounded-full blur-[120px] opacity-30 z-0"></div>
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-violet-100 rounded-full blur-[140px] opacity-20 z-0"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-16 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Automation Systems</h1>
          <p className="text-lg text-gray-600">
            Explore cutting-edge lighting and automation brands that elevate both convenience and design in luxury spaces.
          </p>
        </motion.div>

        <div className="relative z-10">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
                type: "spring",
                stiffness: 120,
                damping: 15,
              }}
              className="mb-20 max-w-6xl mx-auto cursor-pointer rounded-xl transition-all duration-500 hover:bg-gray-50 hover:shadow-2xl p-4"
            >
              <div className="md:flex md:items-start md:gap-10">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full md:w-1/3 h-auto rounded-xl shadow-md object-cover mb-6 md:mb-0"
                />
                <div className="md:flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{brand.name}</h2>
                  {brand.subtitle && (
                    <p className="text-md text-gray-500 mb-4 italic">{brand.subtitle}</p>
                  )}
                  {brand.content.map((para, i) => (
                    <p key={i} className="text-gray-700 mb-4 leading-relaxed">{para}</p>
                  ))}
                  <a
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-medium hover:underline inline-flex items-center transition"
                  >
                    Visit the Website <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
