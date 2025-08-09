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
              <p className="text-lg">
                I'm Javeria Akram, a dedicated Computer Science student with a passion for
                transforming complex problems into elegant solutions through code and design.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-foreground font-semibold text-lg flex items-center gap-2">
                    �� Education
                  </h4>
                  <div className="pl-4 border-l-2 border-primary/40 bg-primary/5 rounded-r-lg p-4">
                    <p className="font-medium text-foreground">BS Computer Science</p>
                    <p className="text-sm text-muted-foreground">Punjab University of Information Technology</p>
                    <p className="text-sm text-muted-foreground">Lahore, Pakistan</p>
                    <p className="text-sm text-primary font-medium">2024 - 2028</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-foreground font-semibold text-lg flex items-center gap-2">
                    💻 Core Skills
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>C++ Programming & OOP</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Logic Building & Algorithms</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>System Programming</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-foreground font-semibold text-lg flex items-center gap-2">
                  🌐 Web Development
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Frontend</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• HTML5 & Semantic Markup</li>
                      <li>• CSS3 & Responsive Design</li>
                      <li>• Modern Layout Techniques</li>
                    </ul>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Styling</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• CSS Grid & Flexbox</li>
                      <li>• Animations & Transitions</li>
                      <li>• Cross-browser Compatibility</li>
                    </ul>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Design</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• UI/UX Principles</li>
                      <li>• Mobile-First Approach</li>
                      <li>• Professional Layouts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-foreground font-semibold text-lg flex items-center gap-2">
                  🚀 What I Do
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <span className="text-primary mt-1 text-sm">▶</span>
                    <span className="text-sm">Build console-based applications with advanced C++ concepts</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <span className="text-primary mt-1 text-sm">▶</span>
                    <span className="text-sm">Create responsive websites with modern design principles</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <span className="text-primary mt-1 text-sm">▶</span>
                    <span className="text-sm">Freelance development delivering custom client solutions</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <span className="text-primary mt-1 text-sm">▶</span>
                    <span className="text-sm">Focus on clean code and efficient problem-solving</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold gradient-text">1</div>
                <div className="text-sm text-muted-foreground">Year Experience</div>
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
    <div className={`group p-6 bg-card rounded-xl border border-border hover:border-opacity-50 transition-all duration-500 hover:scale-105 transform hover:neon-glow animate-slide-up ${delay}`}>
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
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500"></div>
    </div>
  );
}
