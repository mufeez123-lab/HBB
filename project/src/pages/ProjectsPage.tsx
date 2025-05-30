import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// You can replace this with context or props if you use global state
const initialProjects = [
  {
    id: '1',
    title: 'Bawa Heights',
    type: 'Residential',
    location: 'Mumbai, Maharashtra',
    description: 'Luxury apartments with modern amenities and breathtaking sea views.',
    price: '₹ 1.2 Cr onwards',
    status: 'Ongoing',
    image: 'https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true,
  },
  {
    id: '2',
    title: 'Bawa Business Park',
    type: 'Commercial',
    location: 'Pune, Maharashtra',
    description: 'Premium office spaces designed for modern businesses with state-of-the-art facilities.',
    price: '₹ 85 Lakhs onwards',
    status: 'Ready to Move',
    image: 'https://images.pexels.com/photos/158571/architecture-about-building-modern-158571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: false,
  },
  {
    id: '3',
    title: 'Bawa Royal Villas',
    type: 'Luxury',
    location: 'Lonavala, Maharashtra',
    description: 'Exclusive villas surrounded by nature offering privacy and luxury living.',
    price: '₹ 4.5 Cr onwards',
    status: 'Upcoming',
    image: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true,
  }
];

const ProjectsPage = () => {
  // In a real app, use context or fetch from backend
  const [projects] = useState(initialProjects);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-serif font-bold text-primary-600 mb-8">
        Our Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-neutral-600">Projects coming soon...</p>
          </div>
        ) : (
          projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-secondary-500 text-white text-xs font-semibold py-1 px-3 rounded">
                    {project.status}
                  </div>
                  <div className="absolute top-4 right-4 bg-primary-700 text-white text-xs font-semibold py-1 px-3 rounded">
                    {project.type}
                  </div>
                  {project.featured && (
                    <div className="absolute bottom-4 left-4 bg-yellow-500 text-white text-xs font-semibold py-1 px-3 rounded">
                      Featured
                    </div>
                  )}
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
                      className="text-secondary-500 hover:text-secondary-600 inline-flex items-center font-medium"
                    >
                      View Details
                      <ArrowRight size={16} className={`ml-1 transition-transform duration-300 ${hoveredProject === project.id ? 'translate-x-1' : ''}`} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;