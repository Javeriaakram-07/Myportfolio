import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'C', icon: 'C', color: 'skill-c', description: 'Systems programming and embedded development' },
  { name: 'C++', icon: 'C++', color: 'skill-cpp', description: 'Object-oriented programming and algorithms' },
  { name: 'HTML', icon: 'HTML', color: 'skill-html', description: 'Semantic markup and web structure' },
  { name: 'CSS', icon: 'CSS', color: 'skill-css', description: 'Responsive design and modern styling' },
  { name: 'JavaScript', icon: 'JS', color: 'skill-js', description: 'Interactive web applications and ES6+' },
  { name: 'React', icon: '⚛', color: 'skill-web', description: 'Component-based UI with hooks and ecosystem' },
  { name: 'OOP', icon: '⚙️', color: 'skill-cpp', description: 'Object-oriented programming principles' },
  { name: 'UI/UX Design', icon: '🎨', color: 'skill-logic', description: 'User interface and experience design' },
  { name: 'Vibe Coding', icon: '✨', color: 'skill-logic', description: 'Clean, readable code with aesthetic touches' },
  { name: 'Web Development', icon: '🌐', color: 'skill-web', description: 'Responsive websites and modern frameworks' },
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

  const isOOP = skill.name === 'OOP';
  const isUIUX = skill.name === 'UI/UX Design';

  return (
    <div className="relative group">
      <div
        className={`
          relative p-6 rounded-xl border-2 border-border/50 bg-card
          transition-all duration-500 cursor-pointer overflow-hidden transform
          ${isHovered ? 'rotate-2 scale-105 border-opacity-100 neon-glow' : 'hover:border-opacity-70'}
        `}
        style={{
          borderColor: isHovered
            ? isOOP
              ? '#C0C0C0'
              : isUIUX
                ? '#FFC0CB'
                : `hsl(var(--${skill.color}))`
            : undefined,
          transform: isHovered ? 'perspective(1000px) rotateX(5deg) rotateY(5deg)' : undefined,
          boxShadow: isHovered
            ? isOOP
              ? '0 0 15px rgba(192,192,192,0.6)'
              : isUIUX
                ? '0 0 15px rgba(255,192,203,0.6)'
                : undefined
            : undefined,
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
              background: isOOP
                ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #C0C0C0 0%, transparent 50%)`
                : isUIUX
                  ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #FFC0CB 0%, transparent 50%)`
                  : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--${skill.color})) 0%, transparent 50%)`,
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="mb-4 text-4xl font-bold" style={{ color: `hsl(var(--${skill.color}))` }}>
            {skill.icon}
          </div>
          <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
        </div>

        {/* Tooltip (unchanged behavior) */}
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
    </div>
  );
}
