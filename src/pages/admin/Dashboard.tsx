import { Users, FileText, BookOpen, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Tableau de bord administrateur</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Membres</h3>
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold">24</p>
            <p className="text-sm text-gray-600 mt-2">Membres actifs</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Articles</h3>
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-3xl font-bold">156</p>
            <p className="text-sm text-gray-600 mt-2">Articles publiés</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Documents</h3>
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-3xl font-bold">45</p>
            <p className="text-sm text-gray-600 mt-2">Documents en ligne</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Visites</h3>
              <BarChart2 className="h-6 w-6 text-orange-600" />
            </div>
            <p className="text-3xl font-bold">1,234</p>
            <p className="text-sm text-gray-600 mt-2">Ce mois-ci</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Actions rapides</h3>
            <div className="space-y-4">
              <Link
                to="/admin/articles/new"
                className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
              >
                Nouvel article
              </Link>
              <Link
                to="/admin/membres/new"
                className="block w-full bg-green-600 text-white text-center py-2 rounded hover:bg-green-700"
              >
                Nouveau membre
              </Link>
              <Link
                to="/admin/documents/new"
                className="block w-full bg-purple-600 text-white text-center py-2 rounded hover:bg-purple-700"
              >
                Nouveau document
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Activité récente</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b">
                  <div>
                    <p className="font-medium">Action {i}</p>
                    <p className="text-sm text-gray-600">Il y a {i} heures</p>
                  </div>
                  <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
                    Voir →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}