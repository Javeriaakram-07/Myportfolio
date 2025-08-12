<<<<<<< HEAD
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Card3D from "./Card3D";

export default function Contact() {
=======
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
  const handleEmailClick = () => {
    window.open(
      "mailto:javeriaakram259@gmail.com?subject=Portfolio Contact",
      "_blank",
    );
  };

  const handlePhoneClick = () => {
    window.open("tel:+923074555435", "_blank");
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

<<<<<<< HEAD
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
=======
        {/* Two-column: left avatar, right stacked items */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Profile */}
            <div className="text-center">
              <div className="relative mx-auto w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-accent shadow-2xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F78bb8a2b1dce448185f7c0a17bacab1d%2Fac654d34f824415f8143e76e544ce856?format=webp&width=800"
                    alt="Javeria Akram Logo"
                    className="w-full h-full object-contain p-8"
                  />
                </div>
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Javeria Akram</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Computer Science Student & Freelancer
            </p>
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

<<<<<<< HEAD
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
                  <div className="font-medium text-foreground text-sm mb-1">
                    EMAIL
                  </div>
                  <div className="text-foreground break-all">
                    javeriaakram259@gmail.com
                  </div>
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
                  <div className="font-medium text-foreground text-sm mb-1">
                    PHONE
                  </div>
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
                  <div className="font-medium text-foreground text-sm mb-1">
                    LOCATION
                  </div>
                  <div className="text-foreground">Lahore, Pakistan</div>
                </div>
              </div>
            </Card3D>
=======
            {/* Right column: stacked contact boxes */}
            <div className="grid gap-6 content-start">
              <ContactItem
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                value="javeriaakram259@gmail.com"
                action={handleEmailClick}
              />
              <ContactItem
                icon={<Phone className="w-6 h-6" />}
                title="Phone"
                value="+92 123 456 7890"
                action={() => window.open('tel:+921234567890')}
              />
              <ContactItem
                icon={<MapPin className="w-6 h-6" />}
                title="Location"
                value="Lahore, Pakistan"
              />
            </div>
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
          </div>
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
=======

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  action?: () => void;
}

function ContactItem({ icon, title, value, action }: ContactItemProps) {
  return (
    <div
      className={`flex items-center gap-4 p-5 rounded-lg border border-border bg-card ${
        action ? 'cursor-pointer hover:border-primary/50 transition-colors duration-300' : ''
      }`}
      onClick={action}
    >
      <div className="text-primary">{icon}</div>
      <div>
        <div className="font-medium text-foreground">{title}</div>
        <div className="text-sm text-muted-foreground">{value}</div>
      </div>
    </div>
  );
}
>>>>>>> 66d4b35e19e8c63541017c9e5db46595b1f915dd
