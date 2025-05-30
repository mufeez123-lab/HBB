import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const location = useLocation();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  if (!isAdmin) {
    // Redirect to admin login page with the return url
    return <Navigate to="/786313login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;