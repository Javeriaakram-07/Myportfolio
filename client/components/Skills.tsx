import { useState } from 'react';
import Card3D from './Card3D';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'C',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="currentColor" d="M16.5986 9.1766C15.8227 8.2388 14.7414 7.6794 13.5613 7.5988C12.3811 7.5183 11.2398 7.9224 10.3827 8.7188C9.5255 9.5152 9.0257 10.6326 8.98608 11.8087C8.94645 12.9848 9.37347 14.135 10.1766 15.0014C10.9798 15.8678 12.0996 16.3874 13.2758 16.4564C14.452 16.5254 15.6143 16.1389 16.5436 15.3745C17.4729 14.6101 18.1019 13.5213 18.3133 12.3289C18.5247 11.1365 18.3041 9.91043 17.6986 8.8766Z"/>
      </svg>
    ),
    color: 'skill-c',
    description: 'Systems programming and embedded development'
  },
  {
    name: 'C++',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="currentColor" d="M22.394 6c0-1.438-.935-2.7-2.314-3.129L13.596.264C12.67-.088 11.67-.088 10.745.264L4.26 2.871C2.881 3.3 1.946 4.562 1.946 6v12c0 1.438.935 2.7 2.314 3.129l6.484 2.607c.925.352 1.925.352 2.851 0l6.484-2.607C21.459 20.7 22.394 19.438 22.394 18V6zm-9.569 8.923v-.923h-.923v.923h-.923v-.923h-.923V12h.923v-.923h.923V12h.923v-.923h.923V12h.923v1.077h-.923v.923h-.923zm4.62 0v-.923h-.923v.923h-.923v-.923h-.923V12h.923v-.923h.923V12h.923v-.923h.923V12h.923v1.077h-.923v.923h-.923z"/>
      </svg>
    ),
    color: 'skill-cpp',
    description: 'Object-oriented programming and algorithms'
  },
  {
    name: 'HTML',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
    color: 'skill-html',
    description: 'Semantic markup and web structure'
  },
  {
    name: 'CSS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
    color: 'skill-css',
    description: 'Responsive design and modern styling'
  },
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="currentColor" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
    color: 'skill-js',
    description: 'Interactive web applications and ES6+'
  },
  {
    name: 'OOP',
    icon: '⚙️',
    color: 'skill-oop-silver',
    description: 'Object-oriented programming principles'
  },
  {
    name: 'Web Development',
    icon: '🌐',
    color: 'skill-web',
    description: 'Responsive websites and modern frameworks'
  },
  {
    name: 'UI/UX Design',
    icon: '🎨',
    color: 'skill-uiux-pink',
    description: 'User interface and experience design'
  },
  {
    name: 'Graphics Design',
    icon: '🖼️',
    color: 'skill-web',
    description: 'Visual design for websites and applications'
  },
  {
    name: 'React.js',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.099 2.21-.099zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.788-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
      </svg>
    ),
    color: 'skill-react',
    description: 'Modern React development with hooks'
  },
  {
    name: 'Vibe Coding',
    icon: '✨',
    color: 'skill-vibe',
    description: 'Creative coding and innovative solutions'
  }
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse set of technical skills built through academic learning and practical experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard 
              key={skill.name}
              skill={skill}
              isHovered={hoveredSkill === skill.name}
              onHover={() => setHoveredSkill(skill.name)}
              onLeave={() => setHoveredSkill(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: Skill;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function SkillCard({ skill, isHovered, onHover, onLeave }: SkillCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <Card3D className="relative group">
      <div
        className={`
          relative p-6 rounded-xl border-2 border-border/50 bg-card
          transition-all duration-500 cursor-pointer overflow-hidden transform
          ${isHovered ? 'rotate-2 scale-105 border-opacity-100 neon-glow' : 'hover:border-opacity-70'}
        `}
        style={{ 
          borderColor: isHovered ? `hsl(var(--${skill.color}))` : undefined,
          transform: isHovered ? 'perspective(1000px) rotateX(5deg) rotateY(5deg)' : undefined
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Moving shadow */}
        {isHovered && (
          <div
            className="absolute inset-0 opacity-20 rounded-xl transition-all duration-100"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--${skill.color})) 0%, transparent 50%)`,
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="mb-4 flex justify-center items-center" style={{ color: `hsl(var(--${skill.color}))` }}>
            {typeof skill.icon === 'string' ? (
              <span className="text-4xl font-bold">{skill.icon}</span>
            ) : (
              skill.icon
            )}
          </div>
          <h3 className="font-semibold neon-text mb-2">{skill.name}</h3>
        </div>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20">
            <div className="bg-popover border border-border rounded-lg px-3 py-2 shadow-lg animate-fade-in">
              <p className="text-sm text-popover-foreground whitespace-nowrap">
                {skill.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </Card3D>
  );
}
