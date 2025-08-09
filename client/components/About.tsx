import { GraduationCap, Code, Briefcase, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Computer Science Student & Passionate Developer
          </p>
        </div>

        {/* Desktop: About left, stats right; Mobile: stacked full width */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* About text */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="neon-emphasis">Javeria Akram</span>, a dedicated Computer Science student with a passion for
              transforming complex problems into elegant solutions through code and design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy building clean, responsive interfaces and strong foundations in C++ and web technologies.
            </p>
          </div>

          {/* Stats on the right in two separate rows */}
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-xl border border-border hover:neon-glow transition-all shadow-glow">
                <div className="text-4xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border hover:neon-glow transition-all shadow-glow">
                <div className="text-4xl font-bold gradient-text">1</div>
                <div className="text-sm text-muted-foreground mt-1">Year Experience</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-xl border border-border hover:neon-glow transition-all shadow-glow">
                <div className="text-4xl font-bold gradient-text">C++/Web</div>
                <div className="text-sm text-muted-foreground mt-1">Core Focus</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border hover:neon-glow transition-all shadow-glow">
                <div className="text-4xl font-bold gradient-text">Freelance</div>
                <div className="text-sm text-muted-foreground mt-1">Client Work</div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Boxes: Education, Development, Passion, Freelancing */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Education"
              description="BS Computer Science, \n\
Punjab University of Information Technology, Lahore (2024-2028)"
              color="skill-c"
            />
            <AboutCard
              icon={<Code className="w-8 h-8" />}
              title="Development"
              description="Full-stack development with modern technologies, C++ programming, and responsive web design"
              color="skill-cpp"
              delay="delay-200"
            />
            <AboutCard
              icon={<Heart className="w-8 h-8" />}
              title="Passion"
              description="Love for problem-solving, creating meaningful software, and continuous learning"
              color="skill-logic"
              delay="delay-400"
            />
            <AboutCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Freelancing"
              description="Delivering custom solutions for clients worldwide with attention to detail"
              color="skill-js"
              delay="delay-600"
            />
          </div>
        </div>

        {/* What I Do - two per row on desktop, full width on mobile */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Build console-based applications with advanced C++ concepts',
              'Create responsive websites with modern design principles',
              'Freelance development delivering custom client solutions',
              'Focus on clean code and efficient problem-solving',
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20 shadow-glow">
                <span className="text-primary mt-1 text-base leading-6">•</span>
                <span className="text-sm leading-6">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay?: string;
}

function AboutCard({ icon, title, description, color, delay = '' }: AboutCardProps) {
  return (
    <div className={`group relative p-6 bg-card rounded-xl border border-border hover:border-opacity-50 transition-all duration-500 hover:scale-105 transform hover:neon-glow animate-slide-up ${delay}`}>
      <div className="space-y-4">
        <div
          className="w-fit p-3 rounded-lg transition-all duration-500"
          style={{ backgroundColor: `hsla(var(--${color}), 0.1)` }}
        >
          <div style={{ color: `hsl(var(--${color}))` }}>
            {icon}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500"></div>
    </div>
  );
}
