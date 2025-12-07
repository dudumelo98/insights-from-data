import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Mail, label: "Email", value: "dudumelo723@gmail.com", href: "mailto:dudumelo723@gmail.com", color: "email" },
  { icon: "github", label: "GitHub", value: "/dudumelo98", href: "https://github.com/dudumelo98", color: "github" },
  { icon: "linkedin", label: "LinkedIn", value: "/duilio-melo", href: "https://www.linkedin.com/in/duilio-melo-a865a1359/", color: "linkedin" },
  { icon: "instagram", label: "Instagram", value: "@_dudumelo7", href: "https://www.instagram.com/_dudumelo7?igsh=MWEwZnFjYTR3Zm82dQ%3D%3D&utm_source=qr", color: "instagram" },
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

  const getSocialIcon = (icon: string | typeof Mail) => {
    if (typeof icon === "string") {
      switch (icon) {
        case "github":
          return (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          );
        case "linkedin":
          return (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          );
        case "instagram":
          return (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          );
        default:
          return null;
      }
    }
    const IconComponent = icon;
    return <IconComponent size={24} />;
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
            
            {/* 3D Social Links - Grid Layout */}
            <div className="social-3d-grid">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-3d-link social-3d-${item.color}`}
                >
                  <span className="social-3d-icon">
                    {getSocialIcon(item.icon)}
                  </span>
                  <span className="social-3d-label">{item.label}</span>
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
