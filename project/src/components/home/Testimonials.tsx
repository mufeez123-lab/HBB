import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    title: 'Homeowner, Bawa Heights',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'Moving into our Hindustan Bawa apartment was the best decision we made. The attention to detail, quality of construction, and thoughtful design has exceeded our expectations. The team\'s support throughout the process was exceptional.'
  },
  {
    id: 2,
    name: 'Raj Malhotra',
    title: 'CEO, TechSolutions India',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'Our office space at Bawa Business Park has transformed how our company operates. The premium facilities, strategic location, and impeccable maintenance have created an environment where our team thrives. Hindustan Bawa delivers excellence.'
  },
  {
    id: 3,
    name: 'Anjali & Vikram Desai',
    title: 'Owners, Bawa Royal Villas',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'The craftsmanship and luxury details in our villa are simply outstanding. Hindustan Bawa Builders understood our vision perfectly and created our dream home where every corner reflects quality and thoughtful design. Truly a cut above the rest.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-200">
            Don't just take our word for it. Hear directly from those who have experienced the Hindustan Bawa difference.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-20">
              <button 
                onClick={handlePrevious}
                className="bg-primary-600 hover:bg-primary-800 text-white h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center focus:outline-none transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-20">
              <button 
                onClick={handleNext}
                className="bg-primary-600 hover:bg-primary-800 text-white h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center focus:outline-none transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Testimonial Card with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-primary-600 rounded-lg p-8 md:p-10 shadow-lg text-center"
                aria-live="polite"
                aria-atomic="true"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-secondary-500 mr-1" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-neutral-100 italic mb-8">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-secondary-500">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-xl">{currentTestimonial.name}</h4>
                    <p className="text-neutral-300">{currentTestimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
                  currentIndex === index ? 'bg-secondary-500' : 'bg-primary-500 hover:bg-primary-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
