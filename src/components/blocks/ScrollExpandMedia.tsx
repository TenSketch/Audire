'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../ui/ParticleBackground';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    const handleScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, { passive: false });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener('touchstart', handleTouchStart as unknown as EventListener, { passive: false });
    window.addEventListener('touchmove', handleTouchMove as unknown as EventListener, { passive: false });
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener('wheel', handleWheel as unknown as EventListener);
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(console.error);
      setIsMuted(false);
    }
  };

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);
  const firstWord = title?.split(' ')[0] || '';
  const restOfTitle = title?.split(' ').slice(1).join(' ') || '';

  return (
    <div ref={sectionRef} className="transition-colors duration-700 ease-in-out overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        {/* Black background layer */}
        <motion.div
          className="absolute inset-0 z-0 h-full bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 - scrollProgress }}
          transition={{ duration: 0.1 }}
        />

        <ParticleBackground className="opacity-70 absolute inset-0 z-10" />

        <div className="container mx-auto flex flex-col items-center justify-start relative z-20">
          <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
            <div
              className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl transition-none"
              style={{
                width: `${mediaWidth}px`,
                height: `${mediaHeight}px`,
                maxWidth: '95vw',
                maxHeight: '85vh',
                boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
              }}
            >
              {mediaType === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover rounded-xl"
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/30 rounded-xl pointer-events-none"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                    transition={{ duration: 0.2 }}
                  />
                  {isMuted && (
                    <button
                      onClick={handleUnmute}
                      className="absolute bottom-4 right-4 z-20 bg-white/30 text-white px-4 py-2 rounded-md text-sm backdrop-blur hover:bg-white/50 transition"
                    >
                      🔊 Unmute
                    </button>
                  )}
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <img src={mediaSrc} alt="" className="w-full h-full object-cover rounded-xl" />
                  <motion.div
                    className="absolute inset-0 bg-black/50 rounded-xl"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              )}

              <div className="flex flex-col items-center text-center relative z-10 mt-4">
                {date && (
                  <p className="text-2xl text-blue-200" style={{ transform: `translateX(-${textTranslateX}vw)` }}>
                    {date}
                  </p>
                )}
                {scrollToExpand && (
                  <p className="text-blue-200 font-medium" style={{ transform: `translateX(${textTranslateX}vw)` }}>
                    {scrollToExpand}
                  </p>
                )}
              </div>
            </div>

            <div
              className={`flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col ${
                textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
              }`}
            >
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-200"
                style={{ transform: `translateX(-${textTranslateX}vw)` }}
              >
                {firstWord}
              </motion.h2>
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-200"
                style={{ transform: `translateX(${textTranslateX}vw)` }}
              >
                {restOfTitle}
              </motion.h2>
            </div>
          </div>

          <motion.section
            className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          >
            {children}
          </motion.section>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
