import { Mail, Phone, Linkedin } from 'lucide-react';

const membres = [
  {
    id: 1,
    nom: "Marie Dubois",
    fonction: "Présidente",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    biographie: "Plus de 15 ans d'expérience dans le secteur associatif...",
    email: "marie.dubois@organisation.fr",
    linkedin: "https://linkedin.com/in/mariedubois"
  },
  {
    id: 2,
    nom: "Thomas Martin",
    fonction: "Secrétaire Général",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    biographie: "Expert en gestion administrative et communication...",
    email: "thomas.martin@organisation.fr",
    linkedin: "https://linkedin.com/in/thomasmartin"
  },
  {
    id: 3,
    nom: "Sophie Bernard",
    fonction: "Trésorière",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    biographie: "Spécialiste en gestion financière des organisations...",
    email: "sophie.bernard@organisation.fr",
    linkedin: "https://linkedin.com/in/sophiebernard"
  }
];

export default function Membres() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Membres du Bureau</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membres.map((membre) => (
            <div key={membre.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={membre.photo}
                  alt={membre.nom}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-white text-xl font-semibold">{membre.nom}</h2>
                  <p className="text-gray-200">{membre.fonction}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{membre.biographie}</p>
                
                <div className="space-y-2">
                  <a
                    href={`mailto:${membre.email}`}
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    {membre.email}
                  </a>
                  
                  <a
                    href={membre.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}