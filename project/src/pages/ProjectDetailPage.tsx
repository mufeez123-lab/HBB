import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectDetailPage = () => {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-primary-600 mb-8">
          Project Details
        </h1>
        
        {/* Placeholder content - to be replaced with actual project data */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <div className="bg-neutral-200 rounded-lg w-full h-full"></div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-neutral-800">
              Project #{id}
            </h2>
            
            <div className="grid grid-cols-2 gap-4 text-neutral-600">
              <div>
                <p className="font-medium">Location</p>
                <p>Mumbai, Maharashtra</p>
              </div>
              <div>
                <p className="font-medium">Status</p>
                <p>Under Construction</p>
              </div>
              <div>
                <p className="font-medium">Type</p>
                <p>Residential Complex</p>
              </div>
              <div>
                <p className="font-medium">Completion</p>
                <p>2025</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Description
              </h3>
              <p className="text-neutral-600">
                This is a placeholder description for the project. The actual project details will be loaded dynamically based on the project ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;