import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Card3D from './Card3D';

export default function Contact() {
  const handleEmailClick = () => {
    window.open('mailto:javeriaakram259@gmail.com?subject=Portfolio Contact', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+923074555435', '_blank');
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="max-w-2xl mx-auto">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative mx-auto w-32 h-32 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-40 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary circle-neon">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=800"
                  alt="Javeria Akram Logo"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Javeria Akram</span>
            </h3>
            <p className="text-muted-foreground mb-6">Computer Science Student & Freelancer</p>
          </div>

          {/* Email Me Button */}
          <div className="mb-8">
            <Card3D>
              <button
                onClick={handleEmailClick}
                className="w-full group bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-semibold transition-all duration-500 hover:scale-105 transform hover:neon-glow text-lg"
              >
                <span className="flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6" />
                  Email Me
                </span>
              </button>
            </Card3D>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Email */}
            <Card3D>
              <div 
                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card cursor-pointer hover:border-primary/50 transition-all duration-300"
                onClick={handleEmailClick}
              >
                <div className="text-primary flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-foreground text-sm mb-1">EMAIL</div>
                  <div className="text-foreground break-all">javeriaakram259@gmail.com</div>
                </div>
              </div>
            </Card3D>

            {/* Phone */}
            <Card3D>
              <div 
                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card cursor-pointer hover:border-primary/50 transition-all duration-300"
                onClick={handlePhoneClick}
              >
                <div className="text-primary flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-foreground text-sm mb-1">PHONE</div>
                  <div className="text-foreground">+923074555435</div>
                </div>
              </div>
            </Card3D>

            {/* Location */}
            <Card3D>
              <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="text-primary flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-foreground text-sm mb-1">LOCATION</div>
                  <div className="text-foreground">Lahore, Pakistan</div>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
