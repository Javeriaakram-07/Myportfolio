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
    title: 'Cyber Management System',
    description: 'A comprehensive cyber management system built for cybersecurity operations. Features real-time monitoring, threat detection, and administrative controls with a modern dark interface.',
    technologies: ['C++', 'System Programming', 'Security', 'GUI'],
    image: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F0e3980adcbc94c48b993ddefc1e2dad7?format=webp&width=800',
    liveUrl: '',
    githubUrl: '',
    category: 'C++ Development'
  },
  {
    id: 2,
    title: 'Sweet Shop Website',
    description: 'A vibrant sweet shop website featuring refreshing cocktails and beverages. Built with responsive design, interactive elements, and beautiful gradients. Deployed on W3Spaces.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fd3d7322df3854d3780bb63a3f2f64c5b?format=webp&width=800',
    liveUrl: 'https://webull.w3spaces.com',
    githubUrl: '',
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'Sweet Shop Blog',
    description: 'A modern blog platform for Sweet Shop featuring articles, product reviews, and user engagement. Clean design with responsive grid layout and smooth animations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Blog System'],
    image: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fd6ea10eda1624cef86175af07fade245?format=webp&width=800',
    liveUrl: '',
    githubUrl: '',
    category: 'Web Development'
  },
  {
    id: 4,
    title: 'Interactive Payment Card',
    description: 'A sleek payment card interface with dark theme, neon effects, and animated background elements. Features order summary, pricing, and payment integration.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    image: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fd397edceac6449d5a79d3f6e1da819e5?format=webp&width=800',
    liveUrl: '',
    githubUrl: '',
    category: 'Frontend'
  },
  {
    id: 5,
    title: 'Code Editor Interface',
    description: 'A professional code editor interface with syntax highlighting, dark theme, and clean typography. Built for developers with attention to detail and usability.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Code Editor'],
    image: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F2f736c9890774655bbf25e9f27a966e6?format=webp&width=800',
    liveUrl: '',
    githubUrl: '',
    category: 'Web Development'
  },
  {
    id: 6,
    title: 'Developer Portfolio',
    description: 'A modern developer portfolio showcasing projects and skills with elegant design, smooth animations, and professional presentation.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Portfolio'],
    image: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fd37824b2bf7e46ea99b5f31b6c01866c?format=webp&width=800',
    liveUrl: '',
    githubUrl: '',
    category: 'Web Development'
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
      className={`group relative bg-card rounded-xl overflow-hidden border border-border transition-all duration-500 transform ${
        isHovered ? 'scale-105 shadow-2xl shadow-primary/20 neon-glow' : 'hover:shadow-lg'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background/90 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 bg-muted text-foreground rounded-lg text-sm hover:bg-muted/80 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
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
