import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; // <-- import this
import '/src/index.css';

const Hero = () => {
  const images = [
    '/images/image3.jpg',
    '/images/image2.jpg',
    '/images/image1.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState<number | null>(null);

  // Hook to detect if Hero section is visible
  const { ref: heroRef, inView: isHeroVisible } = useInView({
    threshold: 0.5, // 50% visible triggers inView
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const goToSlide = (index: number) => {
    setPrevImage(currentImage);
    setCurrentImage(index);
  };

  // Variants for fade out and fade down animations
  const containerVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 30, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={heroRef} // attach observer ref here
      className="relative h-screen flex items-center justify-center text-center"
    >
      {/* Background Image Slideshow with fade based on visibility */}
      <AnimatePresence>
        {isHeroVisible && (
          <motion.div
            key="background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 overflow-hidden z-0"
          >
            {prevImage !== null && (
              <motion.div
                key={`prev-${prevImage}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-cover bg-center w-full h-full"
                style={{
                  backgroundImage: `url(${images[prevImage]})`,
                  filter: 'brightness(1.1)',
                }}
              />
            )}
            <motion.div
              key={`current-${currentImage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center w-full h-full"
              style={{
                backgroundImage: `url(${images[currentImage]})`,
                filter: 'brightness(1.3)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Centered Content with fade down animation based on visibility */}
      <motion.div
        className="relative z-20 px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate={isHeroVisible ? 'visible' : 'hidden'}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to Hindustan Bawa Builders
        </h1>
        <p className="text-lg text-white mb-6">
          Building Excellence. Crafting Dreams.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded inline-flex items-center justify-center"
          >
            Explore Projects <ArrowRight size={18} className="ml-2" />
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-primary-800 px-6 py-3 rounded"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentImage === index ? 'bg-white' : 'bg-white/50'
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
