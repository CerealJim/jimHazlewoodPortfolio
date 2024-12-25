interface Project {
  title: string;
  description: string;
  image: string;
  liveSite: string;
  githubCode: string;
  technologies: Technology[];
  discontinued?: boolean;
}

interface Technology {
  name: string;
  icon: string;
}

interface Skill {
  name: string;
  icon: string;
}

export { Project, Technology, Skill };
