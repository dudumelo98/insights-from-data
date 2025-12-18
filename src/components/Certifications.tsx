import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    icon: "MS",
    title: "Project Management Fundamentals",
    provider: "Microsoft",
    link: "https://www.coursera.org/account/accomplishments/verify/RU1S8KNLBA8L?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
  },
  {
    icon: "SL",
    title: "Supervised Machine Learning",
    provider: "Stanford Online & DeepLearning.AI",
    link: "https://www.coursera.org/account/accomplishments/verify/JPDN4TU51ONY",
  },
];

export const Certifications = () => {
  return (
    <section id="certificacoes" className="py-24 relative overflow-hidden">
      {/* Section Number */}
      <span className="section-number">03</span>

      <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-subtitle mb-4">Destaques</p>
          <h2 className="section-title flex items-center justify-center gap-4">
            <Award className="w-10 h-10 md:w-14 md:h-14 text-foreground/80" />
            Certificações
          </h2>
        </div>

        {/* Centered cards */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card group"
                data-aos="fade-left"
                data-aos-delay={index * 150}
                data-aos-offset="0"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-secondary border border-border text-lg font-bold text-foreground mb-4 group-hover:border-foreground/50 transition-colors duration-300">
                  {cert.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-display font-semibold text-foreground text-lg mb-2 group-hover:text-gradient transition-all duration-300">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm font-sans mb-4">
                  {cert.provider}
                </p>
                
                {/* Link indicator */}
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <span className="text-xs font-sans uppercase tracking-wider">Ver certificado</span>
                  <ExternalLink size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
    </section>
  );
};
