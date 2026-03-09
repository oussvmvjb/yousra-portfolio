export interface Project {
  id: number;
  titre: string;
  description: string;
  technologie: string;
  githublink: string | null;
  image: string | null;
  locale: string;
  creatdat: string;
  images?: string[];
}