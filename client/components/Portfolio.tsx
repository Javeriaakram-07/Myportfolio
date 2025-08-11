import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';
import Card3D from './Card3D';

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
    title: 'Interactive Payment Card',
    description: 'A sleek payment card interface with dark theme, neon effects, and animated background elements. Features order summary, pricing, and payment integration.',
    technologies: ['HTML', 'CSS', 'UI/UX', 'Animations', 'Responsive Design'],
    image: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fbcabbbbdeca941d581396b967e310da7?format=webp&width=800',
    liveUrl: 'https://card-jeeya.vercel.app/',
    githubUrl: '',
    category: 'Web Development',
    detailImages: [
      'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fbcabbbbdeca941d581396b967e310da7?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F5a523603a28f4043a6f3e0affeeb8d6b?format=webp&width=800'
    ],
    detailedDescription: `An engaging payment interface with modern design principles and advanced CSS animations:

    🌟 **Visual Design**
    • Dark theme with blue neon accent colors
    • Animated rotating circles in background
    • Glass-morphism effects and backdrop blur
    • Premium card styling with shadows and gradients

    ⚡ **Interactive Elements**
    • Smooth CSS animations and keyframes
    • Hover effects on interactive components
    • Responsive button states and feedback
    • Professional form styling and layout

    💳 **Payment Features**
    • Order summary with pricing breakdown
    • Plan selection with change options
    • Payment processing simulation interface
    • Cancel order functionality

    🎨 **Technical Implementation**
    • Pure CSS animations without JavaScript dependencies
    • Responsive design adapting to all screen sizes
    • Clean HTML5 semantic structure
    • Modern CSS features including transforms and transitions`
  },
  {
    id: 3,
    title: 'Sweet Shop Website',
    description: 'A vibrant sweet shop website featuring refreshing cocktails and beverages. Built with responsive design, interactive elements, and beautiful gradients showcasing Pina Colada, Blue Lagoon, and Pink Paradise recipes.',
    technologies: ['HTML', 'CSS', 'Responsive Design', 'UI/UX', 'Google Fonts'],
    image: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fb9c8f085ebd7489eb9a5ca9aa320348b?format=webp&width=800',
    liveUrl: 'https://sweetshop-jeeya.vercel.app/',
    githubUrl: '',
    category: 'Web Development',
    detailImages: [
      'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fb9c8f085ebd7489eb9a5ca9aa320348b?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F19239819a67c46ad9de395812a75bbf9?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F250354a438e84f97b713529a29428f2e?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F0ac747d4255d485b9d7c71de59752c53?format=webp&width=800'
    ],
    detailedDescription: `A beautifully designed sweet shop website showcasing cocktail recipes and beverages with stunning visual appeal:

    🎨 **Design Features**
    • Vibrant gradient backgrounds with cyan to purple color schemes
    • Professional recipe cards with ingredient lists and instructions
    • Clean typography with Google Fonts integration
    • Interactive hover effects and smooth transitions

    🍹 **Featured Cocktails**
    • Pina Colada with pineapple juice and coconut cream
    • Blue Lagoon with Blue Curaçao syrup and lemonade
    • Pink Paradise with strawberry juice and coconut water
    • Professional drink photography and styling

    💻 **Technical Implementation**
    • Pure HTML5 semantic structure with proper navigation
    • CSS3 with Flexbox and Grid layouts for responsive design
    • Custom CSS animations and transitions
    • Mobile-first responsive design approach

    🌟 **User Experience**
    • Clear navigation between different cocktail recipes
    • Easy-to-read ingredient lists and preparation steps
    • Attractive product imagery and professional styling
    • Responsive layout adapting to all device sizes`
  },
  {
    id: 4,
    title: 'Sweet Shop Blog',
    description: 'A modern blog platform for Sweet Shop featuring articles, product reviews, and user engagement. Clean design with responsive grid layout and smooth animations showcasing the latest gadgets and technology.',
    technologies: ['HTML', 'CSS', 'Blog System', 'Responsive Design', 'Grid Layout'],
    image: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F07a81a3847ea40f19dcd75d126f13e5d?format=webp&width=800',
    liveUrl: '',
    githubUrl: '',
    category: 'Web Development',
    detailImages: [
      'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F07a81a3847ea40f19dcd75d126f13e5d?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F286ad25d2a1e4ce1bbb7ccb8aa01e26c?format=webp&width=800'
    ],
    detailedDescription: `A comprehensive blog platform designed for content sharing and user engagement with modern web standards:

    📝 **Blog Features**
    • Article grid layout with responsive card design
    • Author profiles with avatar integration and professional styling
    • Category-based content organization for easy navigation
    • Featured articles showcasing new gadgets and technology

    🎯 **User Experience**
    • Clean card-based design for easy reading and navigation
    • Hover effects and smooth CSS transitions
    • Optimized typography for enhanced readability
    • Mobile-friendly responsive layout adapting to all devices

    🚀 **Technical Implementation**
    • Semantic HTML5 structure with proper meta tags
    • CSS Grid and Flexbox for responsive layouts
    • Modern font integration and color schemes
    • Cross-browser compatibility and performance optimization

    📱 **Content Management**
    • Blog post preview cards with author information
    • Article categorization by topic (Arts, Acoustic, Headphones)
    • Professional imagery and consistent styling
    • Scalable layout supporting multiple content types`
  }
];

const categories = ['All', 'C++ Development', 'Web Development'];

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
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-500 text-sm ${
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
    <Card3D className="h-full">
      <div
        className={`group relative bg-card rounded-xl overflow-hidden border border-border transition-all duration-500 transform cursor-pointer h-full ${
          isHovered ? 'shadow-2xl shadow-primary/25 neon-glow border-primary/50' : 'hover:shadow-lg hover:shadow-primary/15 hover:-translate-y-1'
        }`}
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
                  onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
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
    </Card3D>
  );
}
