import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "dudumelo723@gmail.com", href: "mailto:dudumelo723@gmail.com" },
  { icon: MapPin, label: "Localização", value: "Maranhão, Brasil" },
  { icon: Github, label: "GitHub", value: "/dudumelo98", href: "https://github.com/dudumelo98" },
  { icon: Linkedin, label: "LinkedIn", value: "/duilio-melo", href: "https://www.linkedin.com/in/duilio-melo-a865a1359/" },
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
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="software-icon !w-12 !h-12 group-hover:border-foreground/50">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-sans">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-muted-foreground transition-colors duration-300 font-sans font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-sans font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
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