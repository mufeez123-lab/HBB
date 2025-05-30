import React, { createContext, useContext, useState } from 'react';

export interface Project {
  _id: string;
  name: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  images: string[];
  createdAt: string;
  updatedAt: string;
}

// Sample projects data
const initialProjects: Project[] = [
  {
    _id: '1',
    name: 'Bawa Heights',
    description: 'Luxury apartments with modern amenities and breathtaking sea views.',
    status: 'ongoing',
    images: ['https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '2',
    name: 'Bawa Business Park',
    description: 'Premium office spaces designed for modern businesses with state-of-the-art facilities.',
    status: 'completed',
    images: ['https://images.pexels.com/photos/158571/architecture-about-building-modern-158571.jpeg'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '3',
    name: 'Bawa Royal Villas',
    description: 'Exclusive villas surrounded by nature offering privacy and luxury living.',
    status: 'upcoming',
    images: ['https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

interface ProjectContextType {
  projects: Project[];
  loading: boolean;
  error: string | null;
  createProject: (projectData: FormData) => Promise<void>;
  updateProject: (id: string, projectData: FormData) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createProject = async (projectData: FormData) => {
    try {
      setLoading(true);
      const newProject: Project = {
        _id: Date.now().toString(),
        name: projectData.get('name') as string,
        description: projectData.get('description') as string,
        status: projectData.get('status') as 'upcoming' | 'ongoing' | 'completed',
        images: ['https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg'], // Default image
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setProjects(prev => [...prev, newProject]);
      setError(null);
    } catch (err) {
      setError('Failed to create project');
      console.error('Error creating project:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProject = async (id: string, projectData: FormData) => {
    try {
      setLoading(true);
      const updatedProject: Project = {
        _id: id,
        name: projectData.get('name') as string,
        description: projectData.get('description') as string,
        status: projectData.get('status') as 'upcoming' | 'ongoing' | 'completed',
        images: ['https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg'], // Default image
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setProjects(prev => prev.map(project => 
        project._id === id ? updatedProject : project
      ));
      setError(null);
    } catch (err) {
      setError('Failed to update project');
      console.error('Error updating project:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      setLoading(true);
      setProjects(prev => prev.filter(project => project._id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete project');
      console.error('Error deleting project:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProjectContext.Provider value={{
      projects,
      loading,
      error,
      createProject,
      updateProject,
      deleteProject
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}; 