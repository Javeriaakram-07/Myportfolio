<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ExternalLink, Github, ChevronRight } from "lucide-react";
import Navigation from "../components/Navigation";
=======
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ExternalLink, Github, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd

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
  "1": {
    id: 1,
    title: "Cyber Management System",
    description:
      "A comprehensive console-based cyber management system built in C++ using Object-Oriented Programming principles.",
    technologies: [
      "C++",
      "OOP",
      "Vectors",
      "Classes",
      "Encapsulation",
      "Console Application",
    ],
    category: "C++ Development",
    githubUrl: "https://github.com/Javeriaakram-07/Myportfolio.git",
    images: [
<<<<<<< HEAD
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F109d41b098274c6385bde5b63ba6104f?format=webp&width=800",
        title: "Admin Login & Main Dashboard",
        description:
          "The main admin login interface and dashboard showing menu options for cyber management system operations.",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fde656d449fda4c1086fc6006d3fd5bd4?format=webp&width=800",
        title: "User Registration System",
        description:
          "User addition functionality showing successful user registration with feedback messages and admin dashboard access.",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fff0a3af774694c5b893c053ec853bec8?format=webp&width=800",
        title: "Session Management & Tracking",
        description:
          "Session tracking system showing user activities, websites visited, violation monitoring, and session statistics.",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F8a0b06a8455b441b9177e36182a45195?format=webp&width=800",
        title: "User Registry & Management",
        description:
          "Complete user registry displaying all registered users with their associated data and management capabilities.",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F99af755cccfc4b288c52df519a5bd267?format=webp&width=800",
        title: "Website Blocking System",
        description:
          "Website blocking functionality showing blocked sites list including security management for inappropriate content.",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fa1445a00e3b940df938b962bba21ff97?format=webp&width=800",
        title: "C++ Class Implementation",
        description:
          "Advanced C++ code showing User class implementation with OOP concepts, member functions, and data management.",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fea11eb6bdc8c489a97bee2eca42a55cb?format=webp&width=800",
        title: "Complete Source Code Structure",
        description:
          "Full C++ implementation showing headers, class definitions, vector operations, and complete program structure.",
      },
=======
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fff9e1714402f4ac899eef45c5cbc00d6?format=webp&width=800', title: 'Main Menu Interface', description: 'The main admin dashboard showing login system and menu options for system management.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Faef5991f4ae9470baf10b3d546806689?format=webp&width=800', title: 'User Management', description: 'User registration and management interface showing successful user addition with feedback messages.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F862d982036e2458aa7a00ce04ec6ee9b?format=webp&width=800', title: 'Session Tracking', description: 'Session management system tracking user activities, websites visited, and violation monitoring.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F862d982036e2458aa7a00ce04ec6ee9b?format=webp&width=800', title: 'User Registry', description: 'Complete user registry showing all registered users and their associated data management.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Faef5991f4ae9470baf10b3d546806689?format=webp&width=800', title: 'Website Blocking', description: 'Website blocking functionality displaying blocked sites and security management features.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F61db59bf716d4e06b3dafc91b32dab2f?format=webp&width=800', title: 'Code Implementation - Class Structure', description: 'C++ code showing the User class implementation with OOP concepts, constructors, and member functions.' },
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fd958b5effbdb4a7db8d213ddf1934901?format=webp&width=800', title: 'Code Implementation - Methods', description: 'Advanced C++ implementation showing member functions, vector operations, and control structures.' }
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
    ],
    fullDescription: `The Cyber Management System is a sophisticated console-based application that demonstrates advanced C++ programming concepts and cybersecurity management principles. This system provides comprehensive user management, session tracking, and website monitoring capabilities.

Built entirely in C++, this project showcases the power of object-oriented programming in creating robust system administration tools. The application features a secure admin authentication system, dynamic user management, and real-time session monitoring.`,
    features: [
      "Secure Admin Login System with Password Authentication",
      "Dynamic User Registration and Management",
      "Real-time Session Tracking and Monitoring",
      "Website Blocking and Violation Detection",
      "Comprehensive Reporting System",
      "User Activity Logging and Analytics",
      "Menu-driven Interface with Input Validation",
      "Data Persistence and State Management",
    ],
    technicalDetails: [
<<<<<<< HEAD
      "Object-Oriented Design: Implemented User class with proper encapsulation",
      "STL Containers: Used vectors for dynamic data storage and management",
      "Memory Management: Efficient allocation and deallocation of resources",
      "Input/Output Streams: Advanced console I/O operations with formatting",
      "Control Structures: Complex logic implementation with loops and conditionals",
      "ANSI Color Codes: Enhanced user interface with color-coded output",
      "Error Handling: Robust exception handling and input validation",
      "Modular Design: Separated concerns with multiple classes and functions",
    ],
  },
  "2": {
    id: 2,
    title: "Interactive Payment Card",
    description:
      "A sleek payment card interface with dark theme, neon effects, and animated background elements.",
    technologies: ["HTML", "CSS", "UI/UX", "Animations", "Responsive Design"],
    category: "Web Development",
    liveUrl: "https://card-jeeya.vercel.app/",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fbcabbbbdeca941d581396b967e310da7?format=webp&width=800",
        title: "Payment Card Interface",
        description:
          "Main payment card interface with dark theme, neon effects, and order summary display.",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F5a523603a28f4043a6f3e0affeeb8d6b?format=webp&width=800",
        title: "Code Implementation",
        description:
          "CSS and HTML code structure showing the implementation of the payment card with container styling and animations.",
      },
    ],
    fullDescription: `An engaging payment interface with modern design principles and advanced CSS animations. This project demonstrates professional UI/UX design skills with a focus on user experience and visual appeal.

The payment card features a sophisticated dark theme with blue neon accents, creating a premium feel that enhances user trust and engagement. The interface includes animated background elements and smooth transitions that provide excellent visual feedback.`,
    features: [
      "Dark Theme UI with Premium Styling",
      "Animated Rotating Background Circles",
      "Glass-morphism Effects and Backdrop Blur",
      "Order Summary with Pricing Breakdown",
      "Interactive Payment Processing Interface",
      "Responsive Design for All Devices",
      "Smooth CSS Animations and Transitions",
      "Professional Form Styling and Layout",
    ],
    technicalDetails: [
      "Pure CSS Animations: No JavaScript dependencies for smooth performance",
      "Responsive Design: Adapts seamlessly to all screen sizes",
      "Modern CSS Features: Utilizes transforms, transitions, and gradients",
      "Semantic HTML5: Clean structure with proper accessibility",
      "Glass-morphism Effects: Advanced backdrop-filter implementation",
      "Color Psychology: Strategic use of blue neon for trust and premium feel",
      "Performance Optimized: Efficient animations using GPU acceleration",
      "Cross-browser Compatibility: Tested across all major browsers",
    ],
  },
  "3": {
    id: 3,
    title: "Sweet Shop Website",
    description:
      "A vibrant sweet shop website featuring refreshing cocktails and beverages with beautiful gradients.",
    technologies: ["HTML", "CSS", "Responsive Design", "UI/UX", "Google Fonts"],
    category: "Web Development",
    liveUrl: "https://sweetshop-jeeya.vercel.app/",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fb9c8f085ebd7489eb9a5ca9aa320348b?format=webp&width=800",
        title: "Homepage - Pina Colada Recipe",
        description:
          "Main homepage featuring the Pina Colada cocktail recipe with vibrant gradients and professional styling.",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F19239819a67c46ad9de395812a75bbf9?format=webp&width=800",
        title: "Blue Lagoon Recipe Page",
        description:
          "Blue-themed page showcasing the Blue Lagoon cocktail with ingredients list and preparation steps.",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F250354a438e84f97b713529a29428f2e?format=webp&width=800",
        title: "Pink Paradise Recipe Page",
        description:
          "Pink-themed page featuring the Pink Paradise cocktail with strawberry juice and coconut water recipe.",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F0ac747d4255d485b9d7c71de59752c53?format=webp&width=800",
        title: "HTML Code Structure",
        description:
          "Clean HTML5 code implementation showing semantic structure and navigation setup for the sweet shop website.",
      },
    ],
    fullDescription: `A beautifully designed sweet shop website showcasing cocktail recipes and beverages with stunning visual appeal. This project demonstrates mastery of CSS gradients, responsive design, and modern web development practices.

The website features three distinct cocktail recipes - Pina Colada, Blue Lagoon, and Pink Paradise - each with its own unique color theme and styling. The design emphasizes visual hierarchy and user experience with clear typography and intuitive navigation.`,
    features: [
      "Three Featured Cocktail Recipes with Detailed Instructions",
      "Vibrant Gradient Backgrounds Matching Each Cocktail Theme",
      "Professional Recipe Cards with Ingredient Lists",
      "Responsive Navigation Bar with Clean Design",
      "Google Fonts Integration for Enhanced Typography",
      "Mobile-First Responsive Design Approach",
      "High-Quality Product Photography Integration",
      "Smooth Hover Effects and Interactive Elements",
    ],
    technicalDetails: [
      "Semantic HTML5: Proper document structure with navigation elements",
      "CSS3 Gradients: Advanced gradient implementations for visual appeal",
      "Flexbox Layout: Modern layout system for responsive design",
      "Google Fonts API: Professional typography integration",
      "Cross-browser Compatibility: Tested across all major browsers",
      "Performance Optimization: Optimized images and CSS for fast loading",
      "Mobile-First Design: Responsive breakpoints for all device sizes",
      "Color Theory Application: Strategic color choices for each cocktail theme",
    ],
  },
  "4": {
    id: 4,
    title: "Sweet Shop Blog",
    description:
      "A modern blog platform featuring articles, product reviews, and user engagement with responsive design.",
    technologies: [
      "HTML",
      "CSS",
      "Blog System",
      "Responsive Design",
      "Grid Layout",
    ],
    category: "Web Development",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F07a81a3847ea40f19dcd75d126f13e5d?format=webp&width=800",
        title: "Blog Homepage",
        description:
          "Main blog page featuring article grid layout with author profiles and category organization.",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F286ad25d2a1e4ce1bbb7ccb8aa01e26c?format=webp&width=800",
        title: "HTML Code Implementation",
        description:
          "Clean HTML5 code structure showing the blog implementation with proper semantic markup and styling.",
      },
    ],
    fullDescription: `A comprehensive blog platform designed for content sharing and user engagement with modern web standards. This project showcases advanced layout techniques using CSS Grid and responsive design principles.

The blog features a clean, professional design with article cards displaying author information, publication dates, and category tags. The layout is optimized for readability and user engagement across all device types.`,
    features: [
      "Responsive Article Grid Layout with Card Design",
      "Author Profile Integration with Avatar Display",
      "Category-Based Content Organization System",
      "Professional Typography and Readability Focus",
      "Mobile-Friendly Responsive Design",
      "Clean Card-Based Article Previews",
      "Hover Effects and Interactive Elements",
      "Scalable Layout Supporting Multiple Content Types",
    ],
    technicalDetails: [
      "CSS Grid Layout: Advanced grid system for responsive article display",
      "Semantic HTML5: Proper document structure with article and section tags",
      "Responsive Typography: Scalable text sizing for all devices",
      "Modern CSS Features: Flexbox and Grid combinations for optimal layouts",
      "Performance Optimization: Efficient CSS and image loading strategies",
      "Accessibility Features: Proper heading hierarchy and alt text implementation",
      "Cross-browser Testing: Verified compatibility across major browsers",
      "Scalable Architecture: Designed to accommodate growing content needs",
    ],
  },
=======
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
      { url: 'https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2F7d3d9818bd7b4b0aa0fe027d23483a06?format=webp&width=1200', title: 'Recipe Card', description: 'Beautiful recipe card styling with balanced spacing and rounded images.' },
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
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
=======
  const navigate = useNavigate();
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd

  const project = id ? projectsData[id] : null;

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Use history.back() for proper back navigation
    window.history.back();
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project!.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project!.images.length) % project!.images.length,
    );
  };

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
<<<<<<< HEAD
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <button
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Projects
=======
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <button
              onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
            </button>
          </div>
        </div>
      </div>
    );
  }

<<<<<<< HEAD
=======
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <button
<<<<<<< HEAD
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Projects
=======
              onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/#portfolio'))}
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
            </button>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>

<<<<<<< HEAD
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>
=======
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd

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
<<<<<<< HEAD
                <img
                  src={project.images[currentImageIndex].url}
                  alt={project.images[currentImageIndex].title}
                  className="w-full h-full object-contain bg-black"
                />

=======
                <img src={project.images[currentImageIndex].url} alt={project.images[currentImageIndex].title} className="w-full h-full object-contain bg-black" />
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
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
<<<<<<< HEAD

=======
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
              {/* Image info */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">
                  {project.images[currentImageIndex].title}
                </h3>
                <p className="text-muted-foreground">
                  {project.images[currentImageIndex].description}
                </p>
              </div>
            </div>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
<<<<<<< HEAD
                    index === currentImageIndex
                      ? "border-primary shadow-lg shadow-primary/30"
                      : "border-border hover:border-primary/50"
=======
                    index === currentImageIndex ? 'border-primary shadow-lg shadow-primary/30' : 'border-border hover:border-primary/50'
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
                  }`}
                >
                  <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Project Details - Separate Rows */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="text-base leading-relaxed whitespace-pre-line">{project.fullDescription}</p>
              </div>
<<<<<<< HEAD
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3 custom-bullets">
=======
              <h3 className="text-xl font-semibold mt-8 mb-4">Key Features</h3>
              <ul className="space-y-3">
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
                {project.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Technical Implementation
              </h3>
              <ul className="space-y-3 custom-bullets">
                {project.technicalDetails.map((detail, index) => (
                  <li key={index} className="text-muted-foreground text-sm">
                    {detail}
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
