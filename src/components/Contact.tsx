import { useState } from "react";
import { MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { 
    label: "Email", 
    href: "mailto:dudumelo723@gmail.com", 
    color: "email",
    icon: (
      <svg viewBox="0 0 24 24" className="socialSvg">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    )
  },
  { 
    label: "GitHub", 
    href: "https://github.com/dudumelo98", 
    color: "github",
    icon: (
      <svg viewBox="0 0 24 24" className="socialSvg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  { 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/duilio-melo-a865a1359/", 
    color: "linkedin",
    icon: (
      <svg viewBox="0 0 448 512" className="socialSvg">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
      </svg>
    )
  },
  { 
    label: "Instagram", 
    href: "https://www.instagram.com/_dudumelo7?igsh=MWEwZnFjYTR3Zm82dQ%3D%3D&utm_source=qr", 
    color: "instagram",
    icon: (
      <svg viewBox="0 0 16 16" className="socialSvg">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
      </svg>
    )
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 relative">
      {/* Section Number */}
      <span className="section-number">05</span>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="zoom-in">
          <p className="section-subtitle mb-4">Fale Comigo</p>
          <h2 className="section-title">
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8" data-aos="zoom-in-up" data-aos-delay="100">
            <h3 className="font-display font-semibold text-xl text-foreground tracking-wide">INFORMAÇÕES</h3>
            
            {/* Social Icons Card */}
            <div className="social-card">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`socialContainer container-${item.color}`}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Location info */}
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-secondary/30 mt-8">
              <div className="p-3 rounded-lg border border-border bg-background/50">
                <MapPin size={20} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm font-sans">Localização</p>
                <p className="text-foreground font-sans font-medium">Maranhão, Brasil</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 card-overlap p-6" data-aos="zoom-in-up" data-aos-delay="200">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block font-sans">Nome *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  className="bg-secondary/50 border-border focus:border-foreground/50"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block font-sans">Email *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="bg-secondary/50 border-border focus:border-foreground/50"
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-sans">Assunto *</label>
              <Input
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Assunto da mensagem"
                className="bg-secondary/50 border-border focus:border-foreground/50"
              />
            </div>
            
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-sans">Mensagem *</label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Sua mensagem..."
                rows={5}
                className="bg-secondary/50 border-border focus:border-foreground/50 resize-none"
              />
            </div>

            <Button type="submit" variant="default" size="lg" className="w-full">
              <Send size={18} />
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
