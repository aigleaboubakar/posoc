import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

const membreSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  fonction: z.string().min(1, "La fonction est requise"),
  email: z.string().email("L'email doit être valide"),
  telephone: z.string().optional(),
  biographie: z.string().min(1, "La biographie est requise"),
  photo: z.string().url("L'URL de la photo doit être valide")
});

type MembreForm = z.infer<typeof membreSchema>;

export default function AdminMembres() {
  const [isEditing, setIsEditing] = useState(false);
  const [membres, setMembres] = useState([
    {
      id: 1,
      nom: "Marie Dubois",
      fonction: "Présidente",
      email: "marie.dubois@posoc.org"
    }
  ]);

  const { register, handleSubmit, formState: { errors } } = useForm<MembreForm>({
    resolver: zodResolver(membreSchema)
  });

  const onSubmit = (data: MembreForm) => {
    toast.success('Membre ajouté avec succès');
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Membres</h1>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nouveau Membre
        </button>
      </div>

      {isEditing ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Nouveau Membre
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  {...register('nom')}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                {errors.nom && (
                  <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fonction
                </label>
                <input
                  {...register('fonction')}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                {errors.fonction && (
                  <p className="text-red-500 text-sm mt-1">{errors.fonction.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  {...register('telephone')}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Photo URL
                </label>
                <input
                  {...register('photo')}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="https://example.com/photo.jpg"
                />
                {errors.photo && (
                  <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Biographie
                </label>
                <textarea
                  {...register('biographie')}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                {errors.biographie && (
                  <p className="text-red-500 text-sm mt-1">{errors.biographie.message}</p>
                )}
              </div>
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
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fonction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {membres.map((membre) => (
                <tr key={membre.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{membre.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{membre.fonction}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{membre.email}</td>
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