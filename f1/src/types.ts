export interface Chapter {
  id: string;
  title: string;
  url: string;
  description: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  chapters: Chapter[];
}
