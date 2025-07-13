'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from './ScrollExpandMedia';
import MyVideo from '../../assets/videos/video1.mp4';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: MyVideo,
    poster:
      'https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg',
    title: 'Immersive Audio and Video Experience',
    date: 'Audire Journey',
    scrollToExpand: 'Scroll to Expand',
    about: {
  overview: `Audire Technologies, founded in 2008 by Sharath Chandran V.C in Coimbatore, began as a dedicated R&D venture focused on the development of high-sensitivity speaker systems for critical listening. Over the course of seven years, it has grown from humble beginnings in South India into a globally recognized brand, with a flagship experience centre in Chennai and dealer presence across all Tier 1 Indian cities. As the exclusive distributor of over fifteen world-class AV and automation brands, Audire offers end-to-end solutions for home media systems, custom-installed entertainment, automation, and security solutions across both residential and commercial applications.`,
  conclusion: `Driven by a passion for excellence, Audire integrates technology and design to deliver turnkey solutions that blend functionality with luxury. From dedicated home theatres and acoustic spaces to advanced projection systems and Cinema Standard DCI setups, we specialize in crafting immersive environments. Working closely with internationally acclaimed designers from Europe and the USA, we ensure that every solution we provide reflects a perfect harmony of performance, aesthetics, and innovation.`
},
  },
  image: {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop',
    title: 'Dynamic Image Showcase',
    date: 'Underwater Adventure',
    scrollToExpand: 'Scroll to Expand Demo',
    about: {
      overview:
        'This is a demonstration of the ScrollExpandMedia component with an image...',
      conclusion:
        'The ScrollExpandMedia component works equally well with images and videos...',
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div id="about" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-black">
        About Audire
      </h2>
      <p className="text-lg mb-8 text-black dark:text-black">
        {currentMedia.about.overview}
      </p>
      <p className="text-lg mb-8 text-black dark:text-black">
        {currentMedia.about.conclusion}
      </p>
    </div>
  );
};

const Demo = () => {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('video');
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div id="about" className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export default Demo;
