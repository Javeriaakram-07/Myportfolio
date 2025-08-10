import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can implement a proper toast here)
    alert('Message sent successfully!');
  };

  const handleEmailClick = () => {
    window.open('mailto:javeriaakram259@gmail.com?subject=Portfolio Contact', '_blank');
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

        {/* Contact Info - Full Width */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Image */}
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
              </div>
              <h3 className="text-2xl font-bold mb-2">Javeria Akram</h3>
              <p className="text-muted-foreground mb-6">Computer Science Student & Freelancer</p>
              <button
                onClick={handleEmailClick}
                className="group bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold transition-all duration-500 hover:scale-105 transform hover:neon-glow"
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Open Email Client
                </span>
              </button>
            </div>

            {/* Contact Items */}
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
        </div>
      </div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  action?: () => void;
}

function ContactItem({ icon, title, value, action }: ContactItemProps) {
  return (
    <div 
      className={`flex items-center gap-4 p-4 rounded-lg border border-border bg-card ${
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
