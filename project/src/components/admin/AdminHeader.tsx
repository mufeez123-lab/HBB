import { Link } from 'react-router-dom';
import { Menu, Bell, User, Search } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface AdminHeaderProps {
  toggleSidebar: () => void;
}

const AdminHeader = ({ toggleSidebar }: AdminHeaderProps) => {
  const { logout } = useAuth();

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              className="p-2 rounded-md text-neutral-400 hover:text-neutral-500 lg:hidden"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu size={24} />
            </button>
            <div className="flex-shrink-0 flex items-center">
              <Link to="/admin" className="flex items-center">
                <span className="font-serif text-xl font-bold">
                  <span className="text-primary-600">Hindustan</span>
                  <span className="text-secondary-500">Bawa</span>
                </span>
                <span className="ml-2 text-sm font-medium text-neutral-500">Admin</span>
              </Link>
            </div>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="max-w-lg w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={18} className="text-neutral-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md leading-5 bg-neutral-50 placeholder-neutral-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="Search projects, inquiries, or users..."
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            {/* Notifications */}
            <button className="p-2 rounded-full text-neutral-400 hover:text-neutral-500 relative">
              <span className="sr-only">View notifications</span>
              <Bell size={20} />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div className="flex items-center">
                <button
                  className="flex text-sm rounded-full focus:outline-none"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
                    <User size={16} />
                  </div>
                </button>
                <div className="ml-2 hidden md:flex flex-col">
                  <span className="text-sm font-medium text-neutral-700">Admin User</span>
                  <button 
                    onClick={logout}
                    className="text-xs text-neutral-500 text-left hover:text-primary-600"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;