export interface Github {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  url: string?;
  github: Github[]?;
  tech: string[];
  images: string[];
}
