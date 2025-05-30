import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Components
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Hindustan Bawa Builders | Premium Real Estate Developer</title>
        <meta name="description" content="Hindustan Bawa Builders - Creating landmark properties with exceptional quality and design across India. Explore our residential, commercial and luxury projects." />
      </Helmet>

      <Hero />
      <About />
      <FeaturedProjects />
      <Testimonials />
      <ContactSection />
    </motion.div>
  );
};

export default HomePage;