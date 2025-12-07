import { Github, Search, Smartphone, ShoppingCart, FileSearch } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    number: "01",
    icon: Search,
    status: "Em Produção",
    title: "Detecção de Fraude em Cartão de Crédito",
    subtitle: "Machine Learning - Isolation Forest",
    description: "Sistema de detecção de fraudes em transações de cartão de crédito usando algoritmos de Machine Learning para identificar padrões suspeitos.",
    tags: ["Python", "Isolation Forest", "Anomaly Detection", "Fraud Detection"],
    metrics: [
      { value: "100+", label: "Anomalias Detectadas" },
      { value: "94%", label: "Precisão" },
    ],
    github: "https://github.com/dudumelo98/Deteccao-Fraude-Cartao-ML",
  },
  {
    number: "02",
    icon: FileSearch,
    status: "Concluído",
    title: "Otimização de Gastos Públicos",
    subtitle: "Análise de Transparência - Desvio Padrão",
    description: "Analisa Remuneração Bruta do Portal da Transparência usando estatística (Desvio Padrão) para detectar anomalias salariais. Gera relatórios e visualizações que mostram o potencial de economia e priorizam auditoria por Secretaria.",
    tags: ["Python", "Estatística", "Portal Transparência", "Visualização"],
    metrics: [
      { value: "R$ 2M+", label: "Economia Potencial" },
      { value: "15+", label: "Secretarias Analisadas" },
    ],
    github: "https://github.com/dudumelo98/Projeto_Otimizacao_Gastos_Publicos",
  },
  {
    number: "03",
    icon: Smartphone,
    status: "Concluído",
    title: "Previsão de Churn com XGBoost",
    subtitle: "Otimização de Receita (91% Recall)",
    description: "Desenvolvimento e otimização de modelo de previsão de Churn focado na maximização do Recall para garantir o resgate de clientes de alto risco e proteger a receita.",
    tags: ["Python", "XGBoost", "GridSearch", "Classification"],
    metrics: [
      { value: "91%", label: "Recall" },
      { value: "9/10", label: "Clientes Recuperados" },
    ],
    github: "https://github.com/dudumelo98/Previsao_Churn_XGBoost_91_Recall",
  },
  {
    number: "04",
    icon: ShoppingCart,
    status: "Concluído",
    title: "Análise e Estratégia RFM",
    subtitle: "Identificação de Clientes VIPs com ML",
    description: "Segmentação de clientes em varejo online para impulsionar estratégias de marketing e retenção. O projeto envolveu a construção de um banco de dados em SQL e criação das métricas RFM.",
    tags: ["Python", "SQL", "K-means", "RFM Analysis"],
    metrics: [
      { value: "10k+", label: "Clientes Segmentados" },
      { value: "30%", label: "Aumento em ROI" },
    ],
    github: "https://github.com/dudumelo98/analise_varejo_online_RFM",
  },
];

export const Projects = () => {
  return (
    <section id="projetos" className="py-24 relative">
      {/* Section Number */}
      <span className="section-number">04</span>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="zoom-in">
          <p className="section-subtitle mb-4">Meus Projetos</p>
          <h2 className="section-title">
            Portfolio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group card-overlap hover:border-foreground/30 transition-all duration-300 overflow-hidden relative"
              data-aos="zoom-in-up"
              data-aos-delay={100 + index * 100}
            >
              {/* Project Number */}
              <span className="absolute top-4 right-4 font-serif text-6xl font-light text-foreground/5">
                {project.number}
              </span>

              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-lg border border-border bg-secondary text-muted-foreground group-hover:text-foreground group-hover:border-foreground/30 transition-all duration-300">
                    <project.icon size={24} />
                  </div>
                  <span className="text-xs font-sans font-medium px-3 py-1 rounded-md border border-border bg-secondary text-secondary-foreground">
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif font-bold text-xl text-foreground group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-sans font-medium mt-1">{project.subtitle}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground border border-border font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex gap-6 pt-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex}>
                      <p className="text-2xl font-serif font-bold text-gradient">{metric.value}</p>
                      <p className="text-xs text-muted-foreground font-sans">{metric.label}</p>
                    </div>
                  ))}
                </div>

              {/* Action */}
              <Button variant="outline" size="sm" className="w-full mt-4 group-hover:border-foreground/50" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  Ver no GitHub
                </a>
              </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
    </section>
  );
};