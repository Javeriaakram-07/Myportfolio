import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/placeholder.svg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
    image: '/placeholder.svg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'Data Structures Visualizer',
    description: 'An interactive C++ application that visualizes common data structures and algorithms to help students understand complex concepts.',
    technologies: ['C++', 'SFML', 'Algorithms', 'Education'],
    image: '/placeholder.svg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'C++ Development'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts, interactive charts, and beautiful UI animations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    image: '/placeholder.svg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Frontend'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills with modern design principles and smooth animations.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/placeholder.svg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web Development'
  },
  {
    id: 6,
    title: 'Algorithm Solver',
    description: 'A C++ application that solves common algorithmic problems with optimal time complexity and detailed step-by-step solutions.',
    technologies: ['C++', 'STL', 'Algorithms', 'Problem Solving'],
    image: '/placeholder.svg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'C++ Development'
  }
];

const categories = ['All', 'Web Development', 'C++ Development', 'Frontend'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of projects showcasing my skills in web development, C++ programming, and problem-solving
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow'
                    : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ProjectCard({ project, isHovered, onHover, onLeave }: ProjectCardProps) {
  return (
    <div
      className={`group relative bg-card rounded-xl overflow-hidden border border-border transition-all duration-500 ${
        isHovered ? 'transform scale-105 shadow-2xl shadow-primary/20' : 'hover:shadow-lg'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold gradient-text">
          {project.title.split(' ').map(word => word[0]).join('')}
        </div>
        <div className={`absolute inset-0 bg-gradient-to-t from-background/80 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 px-3 py-1 bg-muted text-foreground rounded-lg text-sm hover:bg-muted/80 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
