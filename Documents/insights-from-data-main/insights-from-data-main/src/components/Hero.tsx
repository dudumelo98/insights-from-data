import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

export const Hero = () => {
  const handleDownloadCV = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      // Tenta fazer fetch do PDF e criar um blob para download
      const response = await fetch('/curriculo.pdf');
      if (!response.ok) {
        throw new Error('Erro ao carregar PDF');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'curriculo-duilio-melo.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erro ao baixar CV:', error);
      // Fallback: tenta abrir em nova aba
      window.open('/curriculo.pdf', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Section Number */}
      <span className="section-number">01</span>


      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-none">
                <span className="text-gradient">Olá!</span>
              </h1>
            </div>

            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed font-sans">
              Sou Duilio Melo, transformo dados em insights estratégicos usando Python, Machine Learning e Big Data. 
              Experiência em análise preditiva, visualização de dados e desenvolvimento de soluções baseadas em IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="default" size="lg" asChild>
                <a href="#projetos">
                  Ver Projetos
                  <ArrowDown className="ml-2" size={18} />
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownloadCV}>
                <Download size={18} />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/dudumelo98"
                target="_blank"
                rel="noopener noreferrer"
                className="software-icon"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/duilio-melo-a865a1359/"
                target="_blank"
                rel="noopener noreferrer"
                className="software-icon"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              {/* Main photo container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-lg overflow-hidden border border-border/50 card-overlap">
                <img 
                  src={profilePhoto} 
                  alt="Duilio Melo - Cientista de Dados"
                  className="w-full h-full object-cover object-top grayscale"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 animate-fade-up delay-300">
          {[
            { value: "10+", label: "Anos de Experiência" },
            { value: "4", label: "Projetos de Alto Impacto" },
            { value: "5+", label: "Algoritmos ML" },
            { value: "+10", label: "Bibliotecas Dominadas" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 card-overlap hover:border-foreground/30 transition-all duration-300"
            >
              <p className="text-4xl md:text-5xl font-serif font-bold text-gradient">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-2 font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
    </section>
  );
};
