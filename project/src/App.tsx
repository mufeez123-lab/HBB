import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
// import NotFoundPage from './pages/NotFoundPage';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProjects from './pages/admin/AdminProjects';
import ProjectForm from './pages/admin/ProjectForm';
// import AdminAddProject from './pages/admin/AdminAddProject';
// import AdminEditProject from './pages/admin/AdminEditProject';
// import AdminInquiries from './pages/admin/AdminInquiries';
import AdminRoute from './components/auth/AdminRoute';

// Context
import { AuthProvider } from './context/AuthContext';
import { ProjectProvider } from './context/ProjectContext';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Initialize AOS animations globally with repeat on scroll
    AOS.init({
      duration: 800,
      once: false, // Animations repeat every time element enters viewport
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Refresh AOS animations on route change to replay animations when navigating
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="text-center flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-3">
            <img
              src="/logo-SVG.svg"
              alt="Logo"
              className="h-20 w-20" data-aos="fade-up" data-aos-delay="300" 
            />
            
            
          </div>
          
          <p className="text-neutral-600" data-aos="fade-up" data-aos-delay="300">Building Dreams, Delivering Excellence</p>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <ProjectProvider>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Admin Routes */}
              <Route path="/786313login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              <Route path="/admin/projects" element={<AdminRoute><AdminProjects /></AdminRoute>} />
              <Route path="/admin/projects/add" element={<AdminRoute><ProjectForm /></AdminRoute>} />
              <Route path="/admin/projects/edit/:id" element={<AdminRoute><ProjectForm /></AdminRoute>} />
              {/* <Route path="/admin/inquiries" element={<AdminRoute><AdminInquiries /></AdminRoute>} /> */}

              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </ProjectProvider>
    </AuthProvider>
  );
}

export default App;
