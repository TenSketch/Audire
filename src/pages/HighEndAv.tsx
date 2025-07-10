'use client';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Wilson from '../../src/assets/images/wilson.avif';
import Dan from '../../src/assets/images/dandagastino.avif';
import Dcs from '../../src/assets/images/dcs.avif';
import Audiomica from '../../src/assets/images/audiomica.avif';
import Ayre from '../../src/assets/images/ayre.avif';
import Wavac from '../../src/assets/images/wavac.avif';

import { useEffect } from 'react';

const brands = [
  {
    name: 'Wilson Audio',
    subtitle: "40 Years of Building the World's Greatest Loudspeakers",
    image: Wilson,
    content: [
      "The WAMM Master Chronosonic is the most time-domain correct loudspeaker in Wilson’s history. It sets new standards in speed, articulation, and realism across the audio spectrum.",
      "Now you can listen to the Wilson Audio Alexxia 2 at our Experience Center in Chennai.",
      "Wilson Audio is known for its obsessive craftsmanship, using materials like aerospace-grade aluminum and proprietary X-material for acoustic excellence.",
      "Each speaker is hand-built in Provo, Utah, with extensive testing and tuning to ensure the ultimate musical experience."
    ],
    link: 'https://www.wilsonaudio.com/',
  },
  {
    name: "Dan D'Agostino",
    image: Dan,
    content: [
      "No name is more closely associated with high-end audio amplifiers than Dan D’Agostino, the legendary founder of Krell and now the creator of his eponymous brand.",
      "Visit your nearest dealer to experience the unmatched beauty of Dan D’Agostino systems.",
      "Known for their stunning copper heatsinks and green VU meters, these amps are as beautiful as they are powerful.",
      "Internally, each amplifier boasts cutting-edge circuit topology and discrete componentry for pure, uncolored sound at all volume levels."
    ],
    link: 'https://dandagostino.com/',
  },
  {
    name: 'dCS',
    image: Dcs,
    content: [
      "dCS crafts the world’s most advanced digital-to-analogue converters, digital transports, and master clocks. Their Ring DAC™ technology is a reference in the world of high-fidelity playback.",
      "Experience the moment where the world stops and there is… ONLY THE MUSIC.",
      "The Vivaldi and Rossini product lines exemplify digital purity, with unparalleled transparency, detail retrieval, and spatial precision.",
      "Used in mastering studios and elite listening rooms worldwide, dCS redefines digital playback with technical brilliance and sonic magic."
    ],
    link: 'https://www.dcsltd.co.uk/',
  },
  {
    name: 'Audiomica',
    image: Audiomica,
    content: [
      "Audiomica Laboratory offers six distinct lines of AV cables, crafted in Poland with advanced filtering technologies and proprietary conductor geometries.",
      "Their cables complement even the most premium high-end systems.",
      "Using materials such as OCC copper, silver-plated conductors, and anti-interference filters, Audiomica provides clarity, speed, and balance in every range.",
      "Every cable undergoes rigorous testing and is hand-assembled to deliver refined signal transmission that preserves your system’s character."
    ],
    link: 'https://www.audiomica.com.pl/',
  },
  {
    name: 'Ayre Acoustics',
    image: Ayre,
    content: [
      "Since 1993, Ayre has been pushing the boundaries of audio with fully-balanced, zero-feedback circuitry for astonishing levels of realism.",
      "Each component is hand-assembled using state-of-the-art techniques.",
      "Ayre products are designed and built in Boulder, Colorado, with a deep commitment to innovation and simplicity in circuit design.",
      "Whether it's the QB-9 DAC or the KX-R Twenty preamp, Ayre gear is known for a natural, spacious presentation that invites long listening sessions."
    ],
    link: 'https://www.ayre.com/',
  },
  {
    name: 'Wavac Audio Labs',
    image: Wavac,
    content: [
      "WAVAC Audio Lab embodies the soul of analog through its dedication to vacuum tube innovation, aesthetic design, and refined sound.",
      "A philosophy rooted in craftsmanship, emotion, and audiophile passion.",
      "Using hand-wound transformers, point-to-point wiring, and exclusive circuitry, WAVAC amplifiers produce lush harmonics with pinpoint imaging.",
      "Their flagship amplifiers — using exotic triode tubes like 211 and 833 — are considered among the most musical ever created, both visually and sonically."
    ],
    link: 'http://wavac-audio.com/',
  }
];

export default function HighEndAV() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="relative bg-white text-gray-800 px-6 md:px-20 py-20 overflow-hidden">
        {/* Blurred background effects */}
        <div className="absolute top-0 left-0 w-[30vw] h-[30vw] bg-purple-100 rounded-full blur-[120px] opacity-30 z-0"></div>
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-blue-100 rounded-full blur-[140px] opacity-20 z-0"></div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-16 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">High-End AV</h1>
          <p className="text-lg text-gray-600">
            Explore the finest audiophile-grade systems from the world’s leading high-fidelity audio manufacturers.
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
                  ease: [0.25, 0.1, 0.25, 1], // custom bezier curve for smoothness
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

      {/* ✅ Full-width footer outside the constrained section */}
      <Footer />
    </>
  );
}
