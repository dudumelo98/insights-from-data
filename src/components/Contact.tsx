import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "dudumelo723@gmail.com", href: "mailto:dudumelo723@gmail.com" },
  { icon: Github, label: "GitHub", value: "/dudumelo98", href: "https://github.com/dudumelo98" },
  { icon: Linkedin, label: "LinkedIn", value: "/duilio-melo", href: "https://www.linkedin.com/in/duilio-melo-a865a1359/" },
  { icon: Instagram, label: "Instagram", value: "@_dudumelo7", href: "https://www.instagram.com/_dudumelo7?igsh=MWEwZnFjYTR3Zm82dQ%3D%3D&utm_source=qr" },
  { icon: MapPin, label: "Localização", value: "Maranhão, Brasil" },
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
            
            {/* Social Links with Hover Effect */}
            <ul className="social-links-list space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="social-link-item group">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-secondary/30 hover:bg-secondary/60 hover:border-foreground/30 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Sliding background effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                      
                      <div className="relative z-10 p-3 rounded-lg border border-border bg-background/50 group-hover:border-foreground/30 transition-all duration-300">
                        <item.icon size={20} className="text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                      </div>
                      
                      <div className="relative z-10 flex-1">
                        <p className="text-muted-foreground text-sm font-sans">{item.label}</p>
                        <span className="text-foreground font-sans font-medium group-hover:text-foreground/90 transition-colors duration-300">
                          {item.value}
                        </span>
                      </div>
                      
                      {/* Hover indicator */}
                      <span className="relative z-10 w-8 h-[2px] bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-secondary/30">
                      <div className="p-3 rounded-lg border border-border bg-background/50">
                        <item.icon size={20} className="text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm font-sans">{item.label}</p>
                        <p className="text-foreground font-sans font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
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
