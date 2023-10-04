export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  url: string?;
  github: string?;
  tech: string[];
  images: string[]?;
}
