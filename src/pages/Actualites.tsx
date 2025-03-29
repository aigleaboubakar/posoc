import { FileText, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const actualites = [
  {
    id: 1,
    titre: "Assemblée Générale Annuelle 2024",
    extrait: "Rejoignez-nous pour notre assemblée générale annuelle qui se tiendra le 15 mars 2024...",
    date: "2024-03-01",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    categorie: "Événements"
  },
  {
    id: 2,
    titre: "Nouveau Partenariat Stratégique",
    extrait: "Nous sommes fiers d'annoncer notre nouveau partenariat avec...",
    date: "2024-02-28",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    categorie: "Partenariats"
  },
  {
    id: 3,
    titre: "Lancement du Programme d'Innovation",
    extrait: "Découvrez notre nouveau programme d'innovation destiné aux...",
    date: "2024-02-25",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    categorie: "Programmes"
  }
];

export default function Actualites() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Actualités</h1>
          <div className="flex space-x-4">
            <select className="px-4 py-2 border rounded-lg">
              <option value="">Toutes les catégories</option>
              <option value="evenements">Événements</option>
              <option value="partenariats">Partenariats</option>
              <option value="programmes">Programmes</option>
            </select>
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={article.image}
                alt={article.titre}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {format(new Date(article.date), 'dd MMMM yyyy', { locale: fr })}
                </div>
                <h2 className="text-xl font-semibold mb-2">{article.titre}</h2>
                <p className="text-gray-600 mb-4">{article.extrait}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {article.categorie}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 flex items-center">
                    Lire plus
                    <FileText className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">Précédent</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">1</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">2</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">3</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">Suivant</button>
          </nav>
        </div>
      </div>
    </div>
  );
}