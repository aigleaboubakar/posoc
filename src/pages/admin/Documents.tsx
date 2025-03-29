import { useState } from 'react';
import { Plus, Edit, Trash2, FileText, Download } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

const documentSchema = z.object({
  titre: z.string().min(1, "Le titre est requis"),
  description: z.string().min(1, "La description est requise"),
  categorie: z.string().min(1, "La catégorie est requise"),
  fichier: z.string().url("L'URL du fichier doit être valide")
});

type DocumentForm = z.infer<typeof documentSchema>;

export default function AdminDocuments() {
  const [isEditing, setIsEditing] = useState(false);
  const [documents, setDocuments] = useState([
    {
      id: 1,
      titre: "Statuts de l'organisation",
      categorie: "Statuts",
      date: "2024-01-15",
      taille: "1.2 MB"
    },
    {
      id: 2,
      titre: "Règlement intérieur",
      categorie: "Règlements",
      date: "2024-02-01",
      taille: "856 KB"
    }
  ]);

  const { register, handleSubmit, formState: { errors } } = useForm<DocumentForm>({
    resolver: zodResolver(documentSchema)
  });

  const onSubmit = (data: DocumentForm) => {
    toast.success('Document ajouté avec succès');
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Documents</h1>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nouveau Document
        </button>
      </div>

      {isEditing ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Nouveau Document
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
                <option value="statuts">Statuts</option>
                <option value="reglements">Règlements</option>
                <option value="proces-verbaux">Procès-verbaux</option>
                <option value="rapports">Rapports</option>
              </select>
              {errors.categorie && (
                <p className="text-red-500 text-sm mt-1">{errors.categorie.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                {...register('description')}
                rows={3}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL du fichier
              </label>
              <input
                {...register('fichier')}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="https://example.com/document.pdf"
              />
              {errors.fichier && (
                <p className="text-red-500 text-sm mt-1">{errors.fichier.message}</p>
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
                  Taille
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((document) => (
                <tr key={document.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-2" />
                      {document.titre}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{document.categorie}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{document.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{document.taille}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Download className="h-5 w-5" />
                      </button>
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