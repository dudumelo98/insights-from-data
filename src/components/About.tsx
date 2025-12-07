import { Briefcase, GraduationCap, TrendingUp, Database, BarChart3 } from "lucide-react";

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
    <section id="sobre" className="py-24 relative">
      {/* Section Number */}
      <span className="section-number">02</span>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="zoom-in">
          <p className="section-subtitle mb-4">Sobre Mim</p>
          <h2 className="section-title">
            Hello!
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6 card-overlap p-8" data-aos="zoom-in-up" data-aos-delay="100">
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              <span className="text-foreground font-semibold">Cientista de Dados</span> com 10 anos de experiência — 
              7 em gestão e 3 em supervisão de TI no município.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              Especialista em transformar dados em decisões estratégicas com 
              <span className="text-foreground font-semibold"> Python, Machine Learning e Big Data</span>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              Apaixonado por resolver problemas complexos e criar soluções que impactam positivamente organizações e pessoas.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
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
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
    </section>
  );
};