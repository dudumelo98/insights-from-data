import { Briefcase, GraduationCap, TrendingUp, Database, BarChart3 } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const highlights = [
  {
    icon: Briefcase,
    title: "10 Anos de Experiência",
    description: "7 anos em gestão e 3 anos em supervisão de TI no município",
  },
  {
    icon: GraduationCap,
    title: "Cruzeiro do Sul",
    description: "Formação acadêmica sólida em ciência de dados",
  },
  {
    icon: TrendingUp,
    title: "Modelagem Preditiva",
    description: "Especialista em algoritmos de Regressão, Classificação e Séries Temporais",
  },
  {
    icon: Database,
    title: "Dados e MLOps",
    description: "Proficiência em Big Data e pipelines ETL/ELT com foco em produção",
  },
  {
    icon: BarChart3,
    title: "Análise Estratégica",
    description: "Transformando dados brutos em storytelling claro para stakeholders",
  },
];

export const About = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Section Number */}
      <span className="section-number">02</span>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="zoom-in">
          <p className="section-subtitle mb-4">Sobre Mim</p>
          <h2 className="section-title">
            Sobre Mim
          </h2>
        </div>

        {/* 3D Phone Mockup with Description */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          {/* 3D Phone Mockup */}
          <div 
            className="phone-mockup-container relative"
            data-aos="zoom-in-up" 
            data-aos-delay="100"
          >
            {/* Stone/Rock Base */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[300px] h-[100px]">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent rounded-full blur-xl" />
              </div>
            </div>

            {/* Phone Frame */}
            <div 
              className="phone-mockup relative"
              style={{
                width: "280px",
                height: "560px",
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Phone Body */}
              <div 
                className="phone-body absolute inset-0 rounded-[45px] p-[3px]"
                style={{
                  background: "linear-gradient(145deg, hsl(0 0% 25%), hsl(0 0% 10%))",
                  transform: "rotateY(-15deg) rotateX(5deg)",
                  transformStyle: "preserve-3d",
                  boxShadow: "20px 30px 60px rgba(0,0,0,0.5), -5px -5px 20px rgba(255,255,255,0.03)",
                }}
              >
                {/* Inner bezel */}
                <div 
                  className="relative w-full h-full rounded-[42px] overflow-hidden"
                  style={{
                    background: "linear-gradient(180deg, hsl(0 0% 8%), hsl(0 0% 5%))",
                  }}
                >
                  {/* Screen */}
                  <div className="absolute inset-[8px] rounded-[38px] overflow-hidden bg-background">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-background rounded-b-2xl z-20" />
                    
                    {/* Profile Image - Grayscale */}
                    <div className="relative w-full h-full">
                      <img 
                        src={profilePhoto}
                        alt="Duilio Melo"
                        className="w-full h-full object-cover object-top grayscale"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      
                      {/* Text overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                        <h3 className="text-lg font-serif font-bold text-foreground">
                          Data-Driven Excellence
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                          Transformando complexidade em inteligência acionável.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side buttons */}
                <div className="absolute -right-[2px] top-28 w-[3px] h-12 bg-gradient-to-b from-muted to-muted/50 rounded-r-sm" />
                <div className="absolute -right-[2px] top-44 w-[3px] h-12 bg-gradient-to-b from-muted to-muted/50 rounded-r-sm" />
                <div className="absolute -left-[2px] top-32 w-[3px] h-16 bg-gradient-to-b from-muted to-muted/50 rounded-l-sm" />
              </div>
            </div>
          </div>

          {/* Description alongside phone */}
          <div className="max-w-md space-y-6" data-aos="zoom-in-up" data-aos-delay="200">
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              <span className="text-foreground font-semibold">Cientista de Dados</span> com 10 anos de experiência — 
              7 em gestão e 3 em supervisão de TI no município.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              Transformo dados em decisões estratégicas com 
              <span className="text-foreground font-semibold"> Python, Machine Learning e Big Data</span>.
            </p>
          </div>
        </div>

        {/* Highlights Grid - Below the mockup */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-5 card-overlap hover:border-foreground/30 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay={150 + index * 100}
            >
              <item.icon className="w-8 h-8 text-foreground mb-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-sans">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
    </section>
  );
};
