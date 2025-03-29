export interface Article {
  id: string;
  titre: string;
  contenu: string;
  image: string;
  date: string;
  auteur: string;
}

export interface Membre {
  id: string;
  nom: string;
  fonction: string;
  photo: string;
  biographie: string;
  email: string;
}

export interface Document {
  id: string;
  titre: string;
  description: string;
  categorie: string;
  url: string;
}