import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'C',
    icon: 'https://cdn.simpleicons.org/c/5C6BC0',
    color: 'skill-c',
    description: 'Systems programming and embedded development'
  },
  {
    name: 'C++',
    icon: 'https://cdn.simpleicons.org/cplusplus/00599C',
    color: 'skill-cpp',
    description: 'Object-oriented programming and algorithms'
  },
  {
    name: 'HTML',
    icon: 'https://cdn.simpleicons.org/html5/E34F26',
    color: 'skill-html',
    description: 'Semantic markup and web structure'
  },
  {
    name: 'CSS',
    icon: 'https://cdn.simpleicons.org/css3/1572B6',
    color: 'skill-css',
    description: 'Responsive design and modern styling'
  },
  {
    name: 'JavaScript',
    icon: 'JS',
    color: 'skill-js',
    description: 'Interactive web applications and ES6+'
  },
  {
    name: 'React',
    icon: 'https://cdn.simpleicons.org/react/61DAFB',
    color: 'skill-web',
    description: 'Component-based UI with hooks and ecosystem'
  },
  {
    name: 'OOP',
    icon: '⚙️',
    color: 'skill-cpp',
    description: 'Object-oriented programming principles'
  },
  {
    name: 'UI/UX Design',
    icon: '🎨',
    color: 'skill-logic',
    description: 'User interface and experience design'
  },
  {
    name: 'Vibe Coding',
    icon: '✨',
    color: 'skill-logic',
    description: 'Clean, readable code with aesthetic touches'
  },
  {
    name: 'Web Development',
    icon: '🌐',
    color: 'skill-web',
    description: 'Responsive websites and modern frameworks'
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

  const isIconUrl = skill.icon.startsWith('http');

  // Custom styles for certain skills
  const isOop = skill.name === 'OOP';
  const isUiUx = skill.name === 'UI/UX Design';

  return (
    <div className="relative group">
      <div
        className={`
          relative p-6 rounded-xl border-2 bg-card
          transition-all duration-500 cursor-pointer overflow-hidden transform
          ${isHovered ? 'rotate-2 scale-105 neon-glow' : 'hover:border-opacity-70'}
        `}
        style={{
          borderColor: isHovered
            ? isOop
              ? '#C0C0C0' // silver border when hovered for OOP
              : isUiUx
                ? '#FFC0CB' // light pink border for UI/UX
                : `hsl(var(--${skill.color}))`
            : 'rgba(255,255,255,0.12)'
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
              background: isOop
                ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #C0C0C0 0%, transparent 50%)`
                : isUiUx
                  ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #FFC0CB 0%, transparent 50%)`
                  : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--${skill.color})) 0%, transparent 50%)`,
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="mb-3 flex justify-center">
            {isIconUrl ? (
              <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
            ) : (
              <div className="text-4xl font-bold" style={{ color: `hsl(var(--${skill.color}))` }}>
                {skill.icon}
              </div>
            )}
          </div>
          <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
          <p className="text-xs text-muted-foreground">{skill.description}</p>
        </div>
      </div>
    </div>
  );
}
