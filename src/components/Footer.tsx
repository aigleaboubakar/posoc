import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Rue d'Abéché, Tchad
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +235 66683926
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                mahamataboubakar08@gmail.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><a href="/mentions-legales">Mentions légales</a></li>
              <li><a href="/confidentialite">Politique de confidentialité</a></li>
              <li><a href="/contact">Nous contacter</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                S'abonner
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2024 Plateforme des Organisation de la Société Civile. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}