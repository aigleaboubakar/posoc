import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

const articleSchema = z.object({
  titre: z.string().min(1, "Le titre est requis"),
  contenu: z.string().min(1, "Le contenu est requis"),
  categorie: z.string().min(1, "La catégorie est requise"),
  image: z.string().url("L'URL de l'image doit être valide")
});

type ArticleForm = z.infer<typeof articleSchema>;

export default function AdminArticles() {
  const [isEditing, setIsEditing] = useState(false);
  const [articles, setArticles] = useState([
    {
      id: 1,
      titre: "Assemblée Générale 2024",
      categorie: "Événements",
      date: "2024-03-01"
    }
  ]);

  const { register, handleSubmit, formState: { errors } } = useForm<ArticleForm>({
    resolver: zodResolver(articleSchema)
  });

  const onSubmit = (data: ArticleForm) => {
    toast.success('Article enregistré avec succès');
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Articles</h1>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nouvel Article
        </button>
      </div>

      {isEditing ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Nouvel Article
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Titre
              </label>
              <input
                {...register('titre')}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.titre && (
                <p className="text-red-500 text-sm mt-1">{errors.titre.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                {...register('categorie')}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Sélectionner une catégorie</option>
                <option value="evenements">Événements</option>
                <option value="actualites">Actualités</option>
                <option value="communiques">Communiqués</option>
              </select>
              {errors.categorie && (
                <p className="text-red-500 text-sm mt-1">{errors.categorie.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                {...register('image')}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="https://example.com/image.jpg"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contenu
              </label>
              <textarea
                {...register('contenu')}
                rows={6}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.contenu && (
                <p className="text-red-500 text-sm mt-1">{errors.contenu.message}</p>
              )}
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {articles.map((article) => (
                <tr key={article.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{article.titre}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{article.categorie}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{article.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}