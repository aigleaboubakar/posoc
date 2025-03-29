import { ArrowRight, Users, BookOpen, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Ensemble pour un avenir meilleur
            </h1>
            <p className="text-xl mb-8">
              Notre organisation s'engage à créer un impact positif dans la société à travers des actions concrètes et durables.
            </p>
            <Link
              to="/about"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg inline-flex items-center hover:bg-blue-700 transition"
            >
              Découvrir plus
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Actualités récentes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Actualités récentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-151704867673${i}-d65bc937f952?auto=format&fit=crop&w=800&q=80`}
                  alt="Actualité"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Titre de l'actualité {i}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <Link
                    to={`/actualites/${i}`}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Lire la suite →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Notre équipe</h3>
              <p className="text-gray-600 mb-4">
                Une équipe dévouée de professionnels travaillant pour le bien commun.
              </p>
              <Link to="/membres" className="text-blue-600 hover:text-blue-700">
                Découvrir l'équipe →
              </Link>
            </div>
            <div className="text-center">
              <BookOpen className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nos règlements</h3>
              <p className="text-gray-600 mb-4">
                Consultez nos statuts et règlements intérieurs.
              </p>
              <Link to="/reglements" className="text-blue-600 hover:text-blue-700">
                Voir les documents →
              </Link>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600 mb-4">
                Nous sommes à votre écoute. N'hésitez pas à nous contacter.
              </p>
              <Link to="/contact" className="text-blue-600 hover:text-blue-700">
                Nous contacter →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}