import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: '1',
    title: 'Bawa Heights',
    type: 'Residential',
    location: 'Mumbai, Maharashtra',
    description: 'Luxury apartments with modern amenities and breathtaking sea views.',
    price: '₹ 1.2 Cr onwards',
    status: 'Ongoing',
    image: 'https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '2',
    title: 'Bawa Business Park',
    type: 'Commercial',
    location: 'Pune, Maharashtra',
    description: 'Premium office spaces designed for modern businesses with state-of-the-art facilities.',
    price: '₹ 85 Lakhs onwards',
    status: 'Ready to Move',
    image: 'https://images.pexels.com/photos/158571/architecture-about-building-modern-158571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '3',
    title: 'Bawa Royal Villas',
    type: 'Luxury',
    location: 'Lonavala, Maharashtra',
    description: 'Exclusive villas surrounded by nature offering privacy and luxury living.',
    price: '₹ 4.5 Cr onwards',
    status: 'Upcoming',
    image: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Discover our handpicked selection of prestigious properties that exemplify our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-property transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-secondary-500 text-white text-xs font-semibold py-1 px-3 rounded">
                    {project.status}
                  </div>
                  <div className="absolute top-4 right-4 bg-primary-700 text-white text-xs font-semibold py-1 px-3 rounded">
                    {project.type}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-neutral-500 text-sm mb-3">
                    <MapPin size={16} className="mr-1 text-secondary-500" />
                    {project.location}
                  </div>
                  <p className="text-neutral-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-primary-700 font-semibold">
                      {project.price}
                    </div>
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-secondary-500 hover:text-secondary-600 inline-flex items-center font-medium focus:outline-none focus:ring-2 focus:ring-secondary-500 rounded"
                    >
                      View Details 
                      <ArrowRight size={16} className={`ml-1 transition-transform duration-300 ${hoveredProject === project.id ? 'translate-x-1' : ''}`} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/projects"
            className="inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
