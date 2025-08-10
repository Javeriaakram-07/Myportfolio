import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ExternalLink, Github, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';

interface ProjectImage {
  url: string;
  title: string;
  description: string;
}

interface ProjectDetailData {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  images: ProjectImage[];
  fullDescription: string;
  features: string[];
  technicalDetails: string[];
}

const projectsData: { [key: string]: ProjectDetailData } = {
  '1': {
    id: 1,
    title: 'Cyber Management System',
    description: 'A comprehensive console-based cyber management system built in C++ using Object-Oriented Programming principles.',
    technologies: ['C++', 'OOP', 'Vectors', 'Classes', 'Encapsulation', 'Console Application'],
    category: 'C++ Development',
    images: [
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fff9e1714402f4ac899eef45c5cbc00d6?format=webp&width=800', title: 'Main Menu Interface', description: 'The main admin dashboard showing login system and menu options for system management.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Faef5991f4ae9470baf10b3d546806689?format=webp&width=800', title: 'User Management', description: 'User registration and management interface showing successful user addition with feedback messages.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F862d982036e2458aa7a00ce04ec6ee9b?format=webp&width=800', title: 'Session Tracking', description: 'Session management system tracking user activities, websites visited, and violation monitoring.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F862d982036e2458aa7a00ce04ec6ee9b?format=webp&width=800', title: 'User Registry', description: 'Complete user registry showing all registered users and their associated data management.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Faef5991f4ae9470baf10b3d546806689?format=webp&width=800', title: 'Website Blocking', description: 'Website blocking functionality displaying blocked sites and security management features.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F61db59bf716d4e06b3dafc91b32dab2f?format=webp&width=800', title: 'Code Implementation - Class Structure', description: 'C++ code showing the User class implementation with OOP concepts, constructors, and member functions.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fd958b5effbdb4a7db8d213ddf1934901?format=webp&width=800', title: 'Code Implementation - Methods', description: 'Advanced C++ implementation showing member functions, vector operations, and control structures.' }
    ],
    fullDescription: `The Cyber Management System is a sophisticated console-based application that demonstrates advanced C++ programming concepts and cybersecurity management principles. This system provides comprehensive user management, session tracking, and website monitoring capabilities.

Built entirely in C++, this project showcases the power of object-oriented programming in creating robust system administration tools. The application features a secure admin authentication system, dynamic user management, and real-time session monitoring.`,
    features: [
      'Secure Admin Login System with Password Authentication',
      'Dynamic User Registration and Management',
      'Real-time Session Tracking and Monitoring',
      'Website Blocking and Violation Detection',
      'Comprehensive Reporting System',
      'User Activity Logging and Analytics',
      'Menu-driven Interface with Input Validation',
      'Data Persistence and State Management'
    ],
    technicalDetails: [
      'Object-Oriented Design: Implemented User class with proper encapsulation',
      'STL Containers: Used vectors for dynamic data storage and management',
      'Memory Management: Efficient allocation and deallocation of resources',
      'Input/Output Streams: Advanced console I/O operations with formatting',
      'Control Structures: Complex logic implementation with loops and conditionals',
      'ANSI Color Codes: Enhanced user interface with color-coded output',
      'Error Handling: Robust exception handling and input validation',
      'Modular Design: Separated concerns with multiple classes and functions'
    ]
  },
  '2': {
    id: 2,
    title: 'Sweet Shop Website',
    description: 'A vibrant sweet shop website featuring refreshing cocktails and beverages with a clean, responsive layout.',
    technologies: ['HTML', 'CSS', 'Responsive Design', 'UI/UX'],
    category: 'Web Development',
    images: [
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fd3d7322df3854d3780bb63a3f2f64c5b?format=webp&width=1200', title: 'Landing Section', description: 'Hero header with gradient background and glowing typography.' },
      { url: 'Assets/sweetshop/Screenshot 2025-08-09 065126.png', title: 'Recipe Card', description: 'Beautiful recipe card styling with balanced spacing and rounded images.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F0aa7d44a05bb4b6ba48bb6d2a3b815f6?format=webp&width=1200', title: 'Typography', description: 'Readable content layout with headings and bullet lists.' }
    ],
    fullDescription: `A beautifully designed sweet shop website showcasing cocktail recipes and beverages. The design focuses on a fun, modern aesthetic with gradients and subtle shadows while keeping the markup semantic and accessible.`,
    features: [
      'Gradient header with glowing title and subheading',
      'Responsive card layout for recipe sections',
      'Optimized images and typography for readability',
      'Hover transitions and soft shadows for depth'
    ],
    technicalDetails: [
      'Pure HTML and CSS implementation (no frameworks)',
      'Flexbox and Grid for adaptive layout',
      'Mobile-first approach with scalable units',
      'Cross-browser compatible styles and fonts'
    ]
  },
  '3': {
    id: 3,
    title: 'Sweet Shop Blog',
    description: 'A modern blog platform for Sweet Shop featuring articles, product reviews, and user engagement.',
    technologies: ['HTML', 'CSS', 'Blog System', 'Responsive Design'],
    category: 'Web Development',
    liveUrl: 'https://webull.w3spaces.com',
    images: [
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fd6ea10eda1624cef86175af07fade245?format=webp&width=1200', title: 'Blog Grid', description: 'Responsive grid of blog cards with imagery, titles, and categories.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Ff2d9e79d6d544e9aaed618e2ab2aede5?format=webp&width=1200', title: 'Article Card', description: 'Card with author, date, and category badge.' }
    ],
    fullDescription: `A comprehensive blog platform designed for content sharing and user engagement, with clean card-based presentation and strong typographic hierarchy.`,
    features: [
      'Article grid layout with responsive design',
      'Author profiles and category tags',
      'Hover effects and smooth transitions',
      'Mobile-friendly layout and touch targets'
    ],
    technicalDetails: [
      'Semantic HTML structure',
      'CSS Grid + Flexbox for layout',
      'System fonts and web-safe fallbacks',
      'Deployed to W3Spaces with optimized assets'
    ]
  },
  '4': {
    id: 4,
    title: 'Interactive Payment Card',
    description: 'A sleek payment card interface with dark theme, neon accents, and animated elements.',
    technologies: ['HTML', 'CSS', 'UI/UX', 'Animations', 'Responsive Design'],
    category: 'Frontend',
    images: [
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fd397edceac6449d5a79d3f6e1da819e5?format=webp&width=1200', title: 'Order Summary Card', description: 'Neon-glow themed card with “Proceed to payment” button.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F5a4f8cc3a1e3423c86d3279cdf6d3f3b?format=webp&width=1200', title: 'Background Rings', description: 'Animated concentric rings that add depth to the layout.' }
    ],
    fullDescription: `An engaging payment interface with modern design principles, neon glow, and subtle animations that elevate the look while keeping the UI accessible and performant.`,
    features: [
      'Dark theme with neon blue accents',
      'Animated background elements',
      'Clickable CTAs with hover states',
      'Responsive layout and spacing adjustments'
    ],
    technicalDetails: [
      'CSS keyframes for glow and float effects',
      'Layered shadows and gradients',
      'Accessible color contrast and focus styles',
      'Responsive units and container queries'
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const project = id ? projectsData[id] : null;

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <button
              onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/#portfolio'))}
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-sm px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Screenshots</h2>

            {/* Main Image */}
            <div className="relative mb-6">
              <div className="relative h-[60vh] bg-card rounded-lg overflow-hidden border border-border">
                <img src={project.images[currentImageIndex].url} alt={project.images[currentImageIndex].title} className="w-full h-full object-contain bg-black" />
                {/* Navigation arrows */}
                {project.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-background/80 hover:bg-background transition-colors">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-background/80 hover:bg-background transition-colors">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
              {/* Image info */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{project.images[currentImageIndex].title}</h3>
                <p className="text-muted-foreground">{project.images[currentImageIndex].description}</p>
              </div>
            </div>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex ? 'border-primary shadow-lg shadow-primary/30' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="text-base leading-relaxed whitespace-pre-line">{project.fullDescription}</p>
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Implementation</h3>
              <ul className="space-y-3">
                {project.technicalDetails.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
