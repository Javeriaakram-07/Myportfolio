import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  detailImages?: string[];
  detailedDescription?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Cyber Management System',
    description: 'A console-based cyber management system built in C++ using Object-Oriented Programming principles. Features user management, session tracking, website blocking, and comprehensive reporting system.',
    technologies: ['C++', 'OOP', 'Vectors', 'Classes', 'Encapsulation', 'Console Application'],
    image: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fff9e1714402f4ac899eef45c5cbc00d6?format=webp&width=800',
    liveUrl: '',
    githubUrl: '',
    category: 'C++ Development',
    detailImages: [
      'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fff9e1714402f4ac899eef45c5cbc00d6?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F71451d57e3e14ee5be181a75251d4e1f?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fb892793cbb874d0284d3e47311d921e4?format=webp&width=800'
    ],
    detailedDescription: `This console-based Cyber Management System demonstrates advanced C++ programming concepts:

    🏗️ **Object-Oriented Design**
    • User class with private data members and public methods
    • Encapsulation of user data (username, sessions, violations)
    • Static members for user numbering

    🔧 **Data Structures & STL**
    • Vector containers for dynamic storage of websites and users
    • String manipulation for user input and data handling
    • Efficient memory management with automatic allocation

    ⚙️ **Core Features**
    • Admin login system with password authentication
    • User session management and tracking
    • Website blocking and violation monitoring
    • Comprehensive reporting system
    • Menu-driven interface with multiple options

    💻 **Technical Implementation**
    • Constructor and destructor implementation
    • Member function definitions for data access
    • Input/output stream operations
    • Control structures and loops for menu navigation
    • ANSI color codes for enhanced console display`
  },
  {
    id: 2,
    title: 'Sweet Shop Website',
    description: 'A vibrant sweet shop website featuring refreshing cocktails and beverages. Built with responsive design, interactive elements, and beautiful gradients.',
    technologies: ['HTML', 'CSS', 'Responsive Design', 'UI/UX'],
    image: '/assets/projects/sweet-shop.jpg',
    liveUrl: '',
    githubUrl: '',
    category: 'Frontend',
    detailedDescription: `A beautifully designed sweet shop website showcasing cocktail recipes and beverages:

    🎨 **Design Features**
    • Vibrant gradient backgrounds with cyan to purple color schemes
    • Responsive grid layout adapting to all screen sizes
    • Clean typography with Google Fonts integration
    • Interactive hover effects and smooth transitions

    💻 **Technical Implementation**
    • Pure HTML5 semantic structure
    • CSS3 with Flexbox and Grid layouts
    • Custom CSS animations and transitions
    • Mobile-first responsive design approach

    🍹 **Content Highlights**
    • Featured cocktail recipes with ingredients
    • Step-by-step preparation instructions
    • Attractive product imagery and styling
    • Professional navigation and footer sections`
  },
  {
    id: 3,
    title: 'Sweet Shop Blog',
    description: 'A modern blog platform for Sweet Shop featuring articles, product reviews, and user engagement. Clean design with responsive grid layout and smooth animations.',
    technologies: ['HTML', 'CSS', 'Blog System', 'Responsive Design'],
    image: '/assets/projects/sweet-shop-blog.jpg',
    liveUrl: 'https://webull.w3spaces.com',
    githubUrl: '',
    category: 'Frontend',
    detailedDescription: `A comprehensive blog platform designed for content sharing and user engagement:

    📝 **Blog Features**
    • Article grid layout with responsive design
    • Author profiles with avatar integration
    • Category-based content organization
    • Date-based article sorting and filtering

    🎯 **User Experience**
    • Clean card-based design for easy reading
    • Hover effects and smooth transitions
    • Optimized typography for readability
    • Mobile-friendly responsive layout

    🚀 **Deployment**
    • Successfully deployed on W3Spaces platform
    • Fast loading times and optimized assets
    • Cross-browser compatibility testing
    • SEO-friendly structure and meta tags`
  },
  {
    id: 4,
    title: 'Interactive Payment Card',
    description: 'A sleek payment card interface with dark theme, neon effects, and animated background elements. Features order summary, pricing, and payment integration.',
    technologies: ['HTML', 'CSS', 'UI/UX', 'Animations', 'Responsive Design'],
    image: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fd397edceac6449d5a79d3f6e1da819e5?format=webp&width=800',
    liveUrl: '',
    githubUrl: '',
    category: 'Frontend',
    detailedDescription: `An engaging payment interface with modern design principles:

    🌟 **Visual Design**
    • Dark theme with blue neon accent colors
    • Animated rotating circles in background
    • Glass-morphism effects and backdrop blur
    • Premium card styling with shadows

    ⚡ **Interactive Elements**
    • Smooth CSS animations and keyframes
    • Hover effects on interactive components
    • Responsive button states and feedback
    • Professional form styling and layout

    💳 **Payment Features**
    • Order summary with pricing breakdown
    • Plan selection with change options
    • Payment processing simulation
    • Cancel order functionality`
  }
];

const categories = ['All', 'Web Development', 'C++ Development', 'Frontend'];

export default function Portfolio() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    navigate(`/project/${project.id}`);
  };

  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            A collection of projects showcasing my skills in web development, C++ programming, and problem-solving
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-1 pb-2">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

function ProjectCard({ project, isHovered, onHover, onLeave, onClick }: ProjectCardProps) {
  return (
    <div
      className={`group relative bg-card rounded-xl overflow-hidden border border-border transition-all duration-500 transform cursor-pointer ${
        isHovered ? 'scale-105 shadow-2xl shadow-primary/20 neon-glow' : 'hover:shadow-lg'
      } h-full flex flex-col`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
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
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-2">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
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
