// HomeTheater.tsx
'use client';

import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import Meyer from '../assets/images/meyersound.avif';
import Cineversum from '../assets/images/cineversum.avif';
import ScreenExcellence from '../assets/images/screen.avif';
import JL from '../assets/images/jlaudio.avif';

const brands = [
  {
    name: 'Meyer Sound',
    subtitle: "Meyer Sound's Legendary Pro Systems Moving into Residential and Private Cinema Market",
    image: Meyer,
    content: [
      "Meyer Sound’s cinema journey began in 1980 with the 650 subwoofer for 'Apocalypse Now'. Now, high-end home theaters can experience that same cinematic sound stage.",
      "Clients include the Telluride Film Festival, Metallica, Cirque du Soleil, and Broadway hits like Wicked and School of Rock.",
      "All products are handcrafted in Berkeley, CA, ensuring quality and unit-to-unit consistency.",
      "Meyer Sound is behind over 40 patents and countless audio innovations, with tools and support for exceptional listening experiences."
    ],
    link: 'https://meyersound.com/'
  },
  {
    name: 'Cineversum',
    subtitle: 'Home Cinema par Excellence',
    image: Cineversum,
    content: [
      "Founded by industry veterans, Cineversum has evolved from CRT projectors to the most advanced digital technologies.",
      "Each projector is hand-calibrated and operationally tested for optimal performance.",
      "Minimalist and futuristic design using aluminum and steel represents their commitment to quality.",
      "Previously part of Barco, Cineversum is now led by Jean-Claude Younes to deliver elite home cinema experiences."
    ],
    link: 'https://www.cineversum.com/'
  },
  {
    name: 'Screen Excellence',
    subtitle: 'Crafting the Finest Acoustically Transparent Projection Screens',
    image: ScreenExcellence,
    content: [
      "Since 2008, Screen Excellence has delivered hand-crafted acoustically transparent screens from Suffolk, England.",
      "Their Neo and Enlightor fabrics provide perfect whiteness, ultra-HD compatibility, and less than 1dB audio loss.",
      "From fixed and curved to retractable screens, all options guarantee the purest home cinema experience.",
      "Trusted by top-tier installers and designed to the highest audiovisual standards."
    ],
    link: 'https://www.screenexcellence.com/'
  },
  {
    name: 'JL Audio',
    subtitle: 'Great Audio Isn’t Just Our Mission — It’s Our Passion.',
    image: JL,
    content: [
      "Privately held and based in the USA, JL Audio creates premium audio systems for home, marine, and mobile use.",
      "Many products are made in the U.S., including marine speakers and Stealthbox® enclosures.",
      "Staffed with passionate audio engineers and former IASCA world champions, the brand thrives on technical excellence.",
      "JL Audio’s commitment to unique engineering and performance ensures that discerning listeners can truly 'tell the difference'."
    ],
    link: 'https://www.jlaudio.com/'
  }
];

export default function HomeTheater() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="relative bg-white text-gray-800 px-6 md:px-20 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[30vw] h-[30vw] bg-purple-100 rounded-full blur-[120px] opacity-30 z-0"></div>
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-blue-100 rounded-full blur-[140px] opacity-20 z-0"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-16 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Home Theater Excellence</h1>
          <p className="text-lg text-gray-600">
            Explore industry-leading AV brands that redefine immersive cinematic experiences at home.
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <p className="text-lg text-gray-600 mt-12">
            Book a private demo at our Chennai experience center or contact us for dealer locations across India.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
