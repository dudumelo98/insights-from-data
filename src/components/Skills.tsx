import pythonIcon from "@/assets/icons/python.png";
import sqlIcon from "@/assets/icons/sql.png";
import powerbiIcon from "@/assets/icons/powerbi.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github-bold.png";
import tensorflowIcon from "@/assets/icons/tensorflow.png";
import pandasIcon from "@/assets/icons/pandas.png";
import numpyIcon from "@/assets/icons/numpy.png";
import rIcon from "@/assets/icons/r.png";

const technicalSkills = [
  "Machine Learning", "Deep Learning", "Big Data", "ETL/ELT Pipelines", "Scikit-learn"
];

const softSkills = [
  "Comunicação Efetiva", "Pensamento Crítico", "Resolução de Problemas", 
  "Trabalho em Equipe", "Aprendizagem Contínua"
];

const methodologies = [
  "Scrum", "Kanban", "CRISP-DM", "Metodologias Ágeis"
];

// Software icons with images - doubled for infinite scroll
const softwareIcons = [
  { icon: pythonIcon, label: "Python" },
  { icon: sqlIcon, label: "SQL" },
  { icon: powerbiIcon, label: "Power BI" },
  { icon: gitIcon, label: "Git" },
  { icon: githubIcon, label: "GitHub" },
  { icon: tensorflowIcon, label: "TensorFlow" },
  { icon: pandasIcon, label: "Pandas" },
  { icon: numpyIcon, label: "NumPy" },
  { icon: rIcon, label: "R" },
];

export const Skills = () => {
  // Double the icons for seamless infinite scroll
  const scrollIcons = [...softwareIcons, ...softwareIcons];

  return (
    <section id="habilidades" className="py-24 relative overflow-hidden">
      {/* Section Number */}
      <span className="section-number">03</span>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="zoom-in">
          <p className="section-subtitle mb-4">Habilidades Técnicas</p>
          <h2 className="section-title">
            Skills
          </h2>
        </div>

        {/* Infinite Scroll Gallery */}
        <div 
          className="skills-gallery relative mb-12 overflow-hidden"
          data-aos="zoom-in-up" 
          data-aos-delay="100"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
          }}
        >
          <div className="skills-scroll flex gap-8 animate-scroll-infinite">
            {scrollIcons.map((item, index) => (
              <div
                key={index}
                className="skill-icon-card flex-shrink-0 group"
              >
                <div className="relative w-20 h-20 rounded-full bg-secondary/50 border border-border hover:border-foreground/30 transition-all duration-300 flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.icon} 
                    alt={item.label} 
                    className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="text-xs text-muted-foreground mt-2 font-sans block text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Technical Skills */}
          <div className="card-overlap p-6" data-aos="zoom-in" data-aos-delay="150">
            <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-foreground rounded-full" />
              Técnicas
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="badge-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="card-overlap p-6" data-aos="zoom-in" data-aos-delay="250">
            <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-foreground rounded-full" />
              Interpessoais
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span key={index} className="badge-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Methodologies */}
          <div className="card-overlap p-6" data-aos="zoom-in" data-aos-delay="350">
            <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-foreground rounded-full" />
              Metodologias
            </h3>
            <div className="flex flex-wrap gap-3">
              {methodologies.map((skill, index) => (
                <span key={index} className="badge-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
    </section>
  );
};
