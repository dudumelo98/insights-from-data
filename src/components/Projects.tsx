import { useState, useEffect, useRef } from "react";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import gsap from "gsap";

import fraudDetectionImg from "@/assets/projects/fraud-detection.jpg";
import publicSpendingImg from "@/assets/projects/public-spending.jpg";
import churnPredictionImg from "@/assets/projects/churn-prediction.jpg";
import rfmAnalysisImg from "@/assets/projects/rfm-analysis.jpg";

const projects = [
  {
    id: 1,
    image: fraudDetectionImg,
    title: "Detecção de Fraude",
    location: "Machine Learning",
    description: "Sistema de detecção de fraudes usando Isolation Forest",
    github: "https://github.com/dudumelo98/Deteccao-Fraude-Cartao-ML",
  },
  {
    id: 2,
    image: publicSpendingImg,
    title: "Otimização Gastos",
    location: "Análise Estatística",
    description: "Análise de transparência e detecção de anomalias salariais",
    github: "https://github.com/dudumelo98/Projeto_Otimizacao_Gastos_Publicos",
  },
  {
    id: 3,
    image: churnPredictionImg,
    title: "Previsão Churn",
    location: "XGBoost - 91% Recall",
    description: "Modelo de previsão de Churn focado em recuperação de clientes",
    github: "https://github.com/dudumelo98/Previsao_Churn_XGBoost_91_Recall",
  },
  {
    id: 4,
    image: rfmAnalysisImg,
    title: "Análise RFM",
    location: "Segmentação ML",
    description: "Segmentação de clientes VIP com K-means e SQL",
    github: "https://github.com/dudumelo98/analise_varejo_online_RFM",
  },
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const getCardState = (index: number) => {
    const total = projects.length;
    const diff = (index - currentIndex + total) % total;
    
    if (diff === 0) return "current";
    if (diff === 1 || (diff === total - 1 && total === 2)) return "next";
    if (diff === total - 1) return "previous";
    return "hidden";
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const swapCards = (direction: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);

    const total = projects.length;
    const nextIndex = direction === "right" 
      ? (currentIndex + 1) % total 
      : (currentIndex - 1 + total) % total;

    // Animate info text out
    const currentInfo = infoRef.current?.querySelector(".current--info");
    if (currentInfo) {
      gsap.to(currentInfo.querySelectorAll(".text"), {
        duration: 0.4,
        stagger: 0.1,
        translateY: "-120px",
        opacity: 0,
        ease: "power2.inOut",
      });
    }

    setTimeout(() => {
      setCurrentIndex(nextIndex);
      
      // Animate new info text in
      setTimeout(() => {
        const newInfo = infoRef.current?.querySelector(".current--info");
        if (newInfo) {
          gsap.fromTo(
            newInfo.querySelectorAll(".text"),
            { opacity: 0, translateY: "40px" },
            { duration: 0.4, stagger: 0.1, translateY: "0px", opacity: 1, ease: "power2.out" }
          );
        }
        setIsAnimating(false);
      }, 100);
    }, 400);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const centerX = box.left + box.width / 2;
    const angle = Math.atan2(e.clientX - centerX, 0) * (35 / Math.PI);
    gsap.set(card, { "--current-card-rotation-offset": `${angle}deg` });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.set(e.currentTarget, { "--current-card-rotation-offset": "0deg" });
  };

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      <span className="section-number">04</span>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="zoom-in">
          <p className="section-subtitle mb-4">Meus Projetos</p>
          <h2 className="section-title">Portfolio</h2>
        </div>

        {/* Carousel Container */}
        <div className="project-carousel relative h-[600px] flex items-center justify-center">
          {/* Background Images */}
          <div ref={bgRef} className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-background/80 z-10" />
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-bg-image absolute inset-0 transition-all duration-1000 ${
                  getCardState(index) === "current" ? "opacity-30 scale-110" : "opacity-0 scale-100"
                }`}
                style={{ filter: "blur(20px)" }}
              >
                <img 
                  src={project.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => swapCards("left")}
            disabled={isAnimating}
            className="absolute left-4 md:left-8 z-50 p-3 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm hover:border-foreground/50 transition-all duration-300 disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => swapCards("right")}
            disabled={isAnimating}
            className="absolute right-4 md:right-8 z-50 p-3 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm hover:border-foreground/50 transition-all duration-300 disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Wrapper */}
          <div ref={cardsRef} className="cards-wrapper relative w-[600px] h-[400px]" style={{ perspective: "1000px" }}>
            {projects.map((project, index) => {
              const state = getCardState(index);
              const isHidden = state === "hidden";
              
              return (
                <div
                  key={project.id}
                  className={`project-card absolute left-1/2 top-1/2 w-[200px] md:w-[250px] h-[300px] md:h-[400px] transition-all duration-800 ease-out ${isLoaded ? "" : "translate-y-[100vh]"}`}
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      translateX(${state === "current" ? "0" : state === "next" ? "110%" : state === "previous" ? "-110%" : "0"})
                      rotateY(${state === "current" ? "var(--current-card-rotation-offset, 0deg)" : state === "next" ? "-25deg" : state === "previous" ? "25deg" : "0deg"})
                      scale(${state === "current" ? "1.2" : "0.9"})
                    `,
                    opacity: isHidden ? 0 : state === "current" ? 1 : 0.6,
                    zIndex: state === "current" ? 30 : state === "next" ? 20 : 10,
                    "--current-card-rotation-offset": "0deg",
                  } as React.CSSProperties}
                  onMouseMove={state === "current" ? handleMouseMove : undefined}
                  onMouseLeave={state === "current" ? handleMouseLeave : undefined}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 bg-black transition-opacity duration-800"
                      style={{ opacity: state === "current" ? 0.2 : 0.6 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Section */}
          <div ref={infoRef} className="info-wrapper absolute bottom-0 left-0 right-0 md:left-8 md:right-auto md:bottom-8 p-6 md:p-0" style={{ perspective: "1000px" }}>
            {projects.map((project, index) => {
              const state = getCardState(index);
              return (
                <div
                  key={project.id}
                  className={`project-info ${state === "current" ? "current--info block" : "hidden"}`}
                  style={{ transform: "translateZ(2rem)" }}
                >
                  <h1 className="text text-2xl md:text-4xl font-serif font-bold text-foreground mb-2">
                    {project.title}
                  </h1>
                  <h4 className="text text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wider mb-3 pl-8 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-1 before:bg-foreground">
                    {project.location}
                  </h4>
                  <p className="text text-sm text-muted-foreground max-w-xs mb-4">
                    {project.description}
                  </p>
                  <Button variant="outline" size="sm" asChild className="text">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Ver no GitHub
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
    </section>
  );
};
