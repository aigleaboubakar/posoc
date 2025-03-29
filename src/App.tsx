import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Actualites from './pages/Actualites';
import Membres from './pages/Membres';
import Reglements from './pages/Reglements';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminArticles from './pages/admin/Articles';
import AdminMembres from './pages/admin/Membres';
import AdminDocuments from './pages/admin/Documents';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Toaster position="top-right" />
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="articles/*" element={<AdminArticles />} />
            <Route path="membres/*" element={<AdminMembres />} />
            <Route path="documents/*" element={<AdminDocuments />} />
          </Route>

          {/* Public Routes */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/actualites" element={<Actualites />} />
                    <Route path="/membres" element={<Membres />} />
                    <Route path="/reglements" element={<Reglements />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;