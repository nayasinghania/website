export type ProjectType = {
  title: string;
  start: string;
  end: string;
  url?: string;
  github: string;
  description: string;
  skills: string[];
};

export type DateType = {
  start: string;
  end: string;
};

export type SkillType = {
  name: string;
  logo: string;
};
