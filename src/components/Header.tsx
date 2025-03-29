import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : '';
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Menu className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">POSOC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/actualites" className={`nav-link ${isActive('/actualites')}`}>
              Actualités
            </Link>
            <Link to="/membres" className={`nav-link ${isActive('/membres')}`}>
              Membres du bureau
            </Link>
            <Link to="/reglements" className={`nav-link ${isActive('/reglements')}`}>
              Règlements
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              À propos
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex space-x-2">
              <a href="#" className="social-link">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="social-link">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="social-link">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/actualites" className="block py-2">Actualités</Link>
            <Link to="/membres" className="block py-2">Membres du bureau</Link>
            <Link to="/reglements" className="block py-2">Règlements</Link>
            <Link to="/about" className="block py-2">À propos</Link>
            <Link to="/contact" className="block py-2">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}