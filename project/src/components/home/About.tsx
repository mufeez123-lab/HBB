import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    "25+ years of excellence in real estate",
    "100+ completed projects across India",
    "Award-winning architectural designs",
    "Sustainable and eco-friendly construction",
    "Timely delivery and transparent dealings",
    "Premium locations with excellent connectivity"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Team at Hindustan Bawa Builders" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-600 rounded-lg z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-500 rounded-lg z-0"></div>

            {/* Experience Badge */}
            <div className="absolute -bottom-10 left-8 bg-white shadow-lg rounded-lg p-4 z-20">
              <div className="text-5xl font-bold text-primary-700">25<span className="text-secondary-500">+</span></div>
              <div className="text-neutral-600 text-sm">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
              Building Landmarks <br />
              <span className="text-secondary-500">Crafting Lifestyles</span>
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mb-6"></div>
            <p className="text-neutral-600 mb-6">
              Since 1995, Hindustan Bawa Builders has been at the forefront of India's real estate sector, 
              delivering exceptional residential, commercial, and luxury properties that stand as a 
              testament to our commitment to quality and innovation.
            </p>
            <p className="text-neutral-600 mb-8">
              Our philosophy is built on three pillars: integrity, innovation, and customer satisfaction. 
              We believe in creating spaces that not only meet but exceed expectations, spaces that transform 
              how people live, work, and interact with their environment.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-2 bg-secondary-100 rounded-full p-1">
                    <Check size={16} className="text-secondary-600" />
                  </div>
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              to="/about"
              className="inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded transition-colors duration-300"
            >
              Learn More About Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;