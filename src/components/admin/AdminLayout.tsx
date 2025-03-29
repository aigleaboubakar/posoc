import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Users, BookOpen, LogOut } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold">POSOC Admin</h1>
        </div>
        <nav className="mt-8">
          <Link
            to="/admin"
            className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/admin')}`}
          >
            <LayoutDashboard className="h-5 w-5 mr-3" />
            Tableau de bord
          </Link>
          <Link
            to="/admin/articles"
            className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/admin/articles')}`}
          >
            <FileText className="h-5 w-5 mr-3" />
            Articles
          </Link>
          <Link
            to="/admin/membres"
            className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/admin/membres')}`}
          >
            <Users className="h-5 w-5 mr-3" />
            Membres
          </Link>
          <Link
            to="/admin/documents"
            className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/admin/documents')}`}
          >
            <BookOpen className="h-5 w-5 mr-3" />
            Documents
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <Link
            to="/"
            className="flex items-center px-4 py-3 hover:bg-blue-700 text-white"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Retour au site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-100">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}