import { GraduationCap, Code, Briefcase, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Computer Science Student & Passionate Developer
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm Javeria Akram, a dedicated Computer Science student with a passion for 
                transforming complex problems into elegant solutions. My journey in technology 
                began with curiosity about how things work and has evolved into a deep love 
                for coding and software development.
              </p>
              
              <p>
                Specializing in logic building and algorithmic thinking, I excel at breaking 
                down complex problems into manageable components. My expertise in C++ allows 
                me to create efficient, high-performance applications, while my web development 
                skills help me build user-friendly, responsive interfaces that bring ideas to life.
              </p>

              <p>
                As a freelancer, I've had the opportunity to work on diverse projects, 
                collaborating with clients to deliver custom solutions that meet their unique 
                needs. This experience has taught me the importance of clear communication, 
                attention to detail, and delivering quality work within deadlines.
              </p>

              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and mentoring fellow students. I believe in continuous 
                learning and staying updated with the latest industry trends and best practices.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <AboutCard
                icon={<GraduationCap className="w-8 h-8" />}
                title="Education"
                description="Computer Science Student focused on algorithms and software engineering"
                color="skill-c"
              />
              <AboutCard
                icon={<Code className="w-8 h-8" />}
                title="Development"
                description="Full-stack development with modern technologies and best practices"
                color="skill-cpp"
                delay="delay-200"
              />
              <AboutCard
                icon={<Briefcase className="w-8 h-8" />}
                title="Freelancing"
                description="Delivering custom solutions for clients worldwide"
                color="skill-js"
                delay="delay-400"
              />
              <AboutCard
                icon={<Heart className="w-8 h-8" />}
                title="Passion"
                description="Love for problem-solving and creating meaningful software"
                color="skill-logic"
                delay="delay-600"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
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
    <div className={`group p-6 bg-card rounded-xl border border-border hover:border-opacity-50 transition-all duration-300 hover:scale-105 animate-slide-up ${delay}`}>
      <div className="space-y-4">
        <div 
          className="w-fit p-3 rounded-lg transition-colors duration-300"
          style={{ backgroundColor: `hsla(var(--${color}), 0.1)` }}
        >
          <div style={{ color: `hsl(var(--${color}))` }}>
            {icon}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
    </div>
  );
}
