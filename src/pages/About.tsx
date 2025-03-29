import { Clock, Users, Target, Award } from 'lucide-react';

const timeline = [
  {
    annee: "2010",
    titre: "Création de l'organisation",
    description: "Fondation officielle de notre organisation avec une vision claire."
  },
  {
    annee: "2015",
    titre: "Expansion nationale",
    description: "Développement de nos activités à l'échelle nationale."
  },
  {
    annee: "2020",
    titre: "Reconnaissance internationale",
    description: "Obtention de prix et reconnaissance internationale."
  },
  {
    annee: "2024",
    titre: "Nouvelle stratégie",
    description: "Lancement de notre nouvelle stratégie quinquennale."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">À Propos de Nous</h1>
          <p className="text-xl max-w-2xl">
            Notre organisation s'engage à créer un impact positif dans la société
            à travers des actions concrètes et durables.
          </p>
        </div>
      </div>

      {/* Mission et Valeurs */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Mission</h3>
            <p className="text-gray-600">
              Contribuer au développement durable de notre société à travers
              l'innovation et la collaboration.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Équipe</h3>
            <p className="text-gray-600">
              Une équipe passionnée et diversifiée, unie par des valeurs communes
              et un engagement fort.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nos Valeurs</h3>
            <p className="text-gray-600">
              Intégrité, innovation, collaboration et engagement envers
              l'excellence.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <h2 className="text-3xl font-bold mb-8">Notre Histoire</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div
                key={event.annee}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div
                    className={`${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-blue-600">
                      {event.annee}
                    </h3>
                    <h4 className="text-lg font-semibold mb-2">{event.titre}</h4>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center w-8 h-8">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}