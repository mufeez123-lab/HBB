import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ContactSection from '../components/home/ContactSection';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contact Us | Hindustan Bawa Builders</title>
        <meta name="description" content="Get in touch with Hindustan Bawa Builders. Contact us for inquiries about our residential, commercial, and luxury real estate projects." />
      </Helmet>

      <div className="pt-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-800 mb-4">
              Contact Us
            </h1>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Have questions about our projects or want to schedule a visit? 
              We're here to help you find your perfect space.
            </p>
          </div>
        </div>

        <ContactSection />
      </div>
    </motion.div>
  );
};

export default ContactPage;