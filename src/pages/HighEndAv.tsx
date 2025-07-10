'use client';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Wilson from '../../src/assets/images/wilson.avif';
import Dan from '../../src/assets/images/dandagastino.avif';
import Dcs from '../../src/assets/images/dcs.avif';
import Audiomica from '../../src/assets/images/audiomica.avif';
import Ayre from '../../src/assets/images/ayre.avif';
import Wavac from '../../src/assets/images/wavac.avif';

const brands = [
  {
    name: 'Wilson Audio',
    subtitle: "40 Years of Building the World's Greatest Loudspeakers",
    image: Wilson,
    content: [
      "The WAMM Master Chronosonic is the most time-domain correct loudspeaker in Wilson’s history...",
      "Now you can listen to the Wilson Audio Alexxia 2 at our Experience center in Chennai.",
    ],
    link: 'https://www.wilsonaudio.com/',
  },
  {
    name: "Dan D'Agostino",
    image: Dan,
    content: [
      "No name is more closely associated with high-end audio amplifiers...",
      "Visit your nearest dealer to experience the unmatched beauty of Dan D’Agostino systems."
    ],
    link: 'https://dandagostino.com/',
  },
  {
    name: 'dCS',
    image: Dcs,
    content: [
      "dCS crafts the world’s most advanced digital-to-analogue converters...",
      "Experience the moment where the world stops and there is… ONLY THE MUSIC."
    ],
    link: 'https://www.dcsltd.co.uk/',
  },
  {
    name: 'Audiomica',
    image: Audiomica,
    content: [
      "Audiomica Laboratory offers six distinct lines of AV cables...",
      "Their cables complement even the most premium high-end systems."
    ],
    link: 'https://www.audiomica.com.pl/',
  },
  {
    name: 'Ayre Acoustics',
    image: Ayre,
    content: [
      "Since 1993, Ayre has been pushing the boundaries of audio with fully-balanced, zero-feedback circuitry...",
      "Each component is hand-assembled using state-of-the-art techniques."
    ],
    link: 'https://www.ayre.com/',
  },
  {
    name: 'Wavac Audio Labs',
    image: Wavac,
    content: [
      "WAVAC Audio Lab embodies the soul of analog through its dedication to vacuum tube innovation...",
      "A philosophy rooted in craftsmanship, emotion, and audiophile passion."
    ],
    link: 'http://wavac-audio.com/',
  }
];

export default function HighEndAV() {
  return (
    <section className="relative bg-white text-gray-800 px-6 md:px-20 py-20 overflow-hidden">
      {/* Blurred background effects */}
      <div className="absolute top-0 left-0 w-[30vw] h-[30vw] bg-purple-100 rounded-full blur-[120px] opacity-30 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-blue-100 rounded-full blur-[140px] opacity-20 z-0"></div>

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
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="mb-20 max-w-6xl mx-auto"
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
      <Footer/>
    </section>
  );
}
