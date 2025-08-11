import { GraduationCap, Code, Briefcase, Heart } from 'lucide-react';
import Card3D from './Card3D';

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/30 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Computer Science Student & Passionate Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm <span className="gradient-text font-semibold">Javeria Akram</span>, a dedicated Computer Science student with a passion for
            transforming complex problems into elegant solutions through code and design.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-12">
          <Card3D>
            <div className="text-center p-4 bg-card rounded-lg border border-border transition-all duration-500 hover:scale-105 neon-glow">
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </Card3D>
          <Card3D>
            <div className="text-center p-4 bg-card rounded-lg border border-border transition-all duration-500 hover:scale-105 neon-glow">
              <div className="text-3xl font-bold gradient-text">1</div>
              <div className="text-sm text-muted-foreground">Year Experience</div>
            </div>
          </Card3D>
        </div>

        {/* Four Boxes: Education, Development, Passion, Freelancing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
          <AboutCard
            icon={<GraduationCap className="w-8 h-8" />}
            title="Education"
            description="BS Computer Science, Punjab University of Information Technology, Lahore (2024-2028)"
            color="skill-c"
            isEducation={true}
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

        {/* What I Do - 2x2 Grid */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            What <span className="gradient-text">I</span> Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card3D>
              <div className="flex items-start gap-3 p-6 bg-primary/5 rounded-lg border border-primary/20 hover:scale-105 transition-all duration-500 h-full">
                <span className="text-primary text-lg leading-6 flex-shrink-0">▶</span>
                <span className="text-base leading-6">Build console-based applications with advanced <span className="gradient-text font-semibold">C++</span> concepts</span>
              </div>
            </Card3D>
            <Card3D>
              <div className="flex items-start gap-3 p-6 bg-primary/5 rounded-lg border border-primary/20 hover:scale-105 transition-all duration-500 h-full">
                <span className="text-primary text-lg leading-6 flex-shrink-0">▶</span>
                <span className="text-base leading-6">Create responsive websites with modern design principles</span>
              </div>
            </Card3D>
            <Card3D>
              <div className="flex items-start gap-3 p-6 bg-primary/5 rounded-lg border border-primary/20 hover:scale-105 transition-all duration-500 h-full">
                <span className="text-primary text-lg leading-6 flex-shrink-0">▶</span>
                <span className="text-base leading-6">Freelance development delivering custom client solutions</span>
              </div>
            </Card3D>
            <Card3D>
              <div className="flex items-start gap-3 p-6 bg-primary/5 rounded-lg border border-primary/20 hover:scale-105 transition-all duration-500 h-full">
                <span className="text-primary text-lg leading-6 flex-shrink-0">▶</span>
                <span className="text-base leading-6">Focus on clean code and efficient problem-solving</span>
              </div>
            </Card3D>
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
  isEducation?: boolean;
}

function AboutCard({ icon, title, description, color, delay = '', isEducation = false }: AboutCardProps) {
  return (
    <Card3D className="h-full">
      <div className={`group p-6 bg-card rounded-xl border border-border hover:border-opacity-50 transition-all duration-500 hover:scale-105 transform hover:neon-glow animate-slide-up ${delay} h-full relative flex flex-col`}>
        <div className="space-y-4 flex-grow">
          <div
            className="w-fit p-3 rounded-lg transition-all duration-500"
            style={{ backgroundColor: `hsla(var(--${color}), 0.1)` }}
          >
            <div style={{ color: `hsl(var(--${color}))` }}>
              {icon}
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold gradient-text mb-2">{title}</h3>
            <p className={`text-sm leading-relaxed ${
              isEducation
                ? 'text-primary font-medium'
                : 'text-muted-foreground'
            }`}>
              {isEducation ? (
                <>
                  <span className="gradient-text font-semibold">BS Computer Science</span><br />
                  <span className="gradient-text">Punjab University of Information Technology</span><br />
                  <span className="text-muted-foreground">Lahore (2024-2028)</span>
                </>
              ) : (
                <span dangerouslySetInnerHTML={{
                  __html: description.replace(/C\+\+/g, '<span class="gradient-text font-semibold">C++</span>')
                }} />
              )}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500"></div>
      </div>
    </Card3D>
  );
}
