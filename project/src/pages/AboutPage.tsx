import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Building2, Award, Users, Clock } from 'lucide-react';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  // Track if counters are visible to trigger countup only once per mount
  const [countersActive, setCountersActive] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    // You can listen to AOS events or use intersection observer for more control
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (!countersActive && statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setCountersActive(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [countersActive]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Helmet>
        <title>About Us | Hindustan Bawa Builders</title>
        <meta
          name="description"
          content="Learn about Hindustan Bawa Builders' legacy of excellence in real estate development, our values, and commitment to quality construction."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[40vh] bg-neutral-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-white/90">Building Dreams Since 1995</p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Our Legacy of Excellence</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              For over two decades, Hindustan Bawa Builders has been at the forefront of India's real estate development, creating landmark properties that combine exceptional quality, innovative design, and sustainable practices. Our commitment to excellence has earned us the trust of countless families and businesses who call our developments home.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <Building2 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-neutral-900 mb-2">
                {countersActive ? <CountUp start={1} end={1000} duration={2.5} /> : '1'}+
              </h3>
              <p className="text-neutral-600">Projects Completed</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-neutral-900 mb-2">
                {countersActive ? <CountUp start={1} end={5000} duration={2.5} /> : '1'}+
              </h3>
              <p className="text-neutral-600">Happy Families</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-neutral-900 mb-2">
                {countersActive ? <CountUp start={1} end={250} duration={2.5} /> : '1'}+
              </h3>
              <p className="text-neutral-600">Awards Won</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-neutral-900 mb-2">
                {countersActive ? <CountUp start={1} end={100} duration={2.5} /> : '1'}
              </h3>
              <p className="text-neutral-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Quality Excellence</h3>
              <p className="text-neutral-600">
                We maintain the highest standards in construction quality and materials, ensuring longevity and value in every project.
              </p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Customer First</h3>
              <p className="text-neutral-600">
                Our customers' satisfaction drives every decision we make, from design choices to after-sales service.
              </p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Innovation</h3>
              <p className="text-neutral-600">
                We embrace new technologies and sustainable practices to create modern living spaces for the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
