import { FileText, Download, Search } from 'lucide-react';

const categories = [
  {
    id: 1,
    nom: "Statuts",
    documents: [
      {
        id: 1,
        titre: "Statuts de l'organisation",
        description: "Document officiel des statuts de l'organisation",
        date: "2024-01-15",
        taille: "1.2 MB",
        url: "#"
      }
    ]
  },
  {
    id: 2,
    nom: "Règlement Intérieur",
    documents: [
      {
        id: 2,
        titre: "Règlement intérieur 2024",
        description: "Règles de fonctionnement interne",
        date: "2024-01-15",
        taille: "856 KB",
        url: "#"
      }
    ]
  },
  {
    id: 3,
    nom: "Procès-verbaux",
    documents: [
      {
        id: 3,
        titre: "PV Assemblée Générale 2023",
        description: "Compte-rendu de l'AG du 15 décembre 2023",
        date: "2023-12-20",
        taille: "2.1 MB",
        url: "#"
      }
    ]
  }
];

export default function Reglements() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Règlements et Documents</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un document..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="space-y-8">
          {categories.map((categorie) => (
            <div key={categorie.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">{categorie.nom}</h2>
              
              <div className="space-y-4">
                {categorie.documents.map((document) => (
                  <div
                    key={document.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-blue-600 mr-2" />
                          <h3 className="font-medium">{document.titre}</h3>
                        </div>
                        <p className="text-gray-600 mt-1">{document.description}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-2">
                          <span>Mis à jour le {document.date}</span>
                          <span className="mx-2">•</span>
                          <span>{document.taille}</span>
                        </div>
                      </div>
                      
                      <a
                        href={document.url}
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <Download className="h-5 w-5 mr-1" />
                        Télécharger
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}