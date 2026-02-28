export interface Skill {
  id: number;
  nom: string;
  level: string | null;
  image: string | null;
  locale: string;
  is_ai: boolean;
  categorie: string | null;
}