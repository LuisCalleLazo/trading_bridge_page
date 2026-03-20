export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  initials: string;
  gradient: string;
}

export const teamData: TeamMember[] = [
  {
    id: "ceo",
    name: "Alejandro Mora",
    role: "CEO & Co-Founder",
    expertise: ["Estrategia Empresarial", "Finanzas Corporativas", "Machine Learning"],
    initials: "AM",
    gradient: "linear-gradient(135deg, #1a56db, #0ea5e9)",
  },
  {
    id: "cto",
    name: "Daniela Ríos",
    role: "CTO & Lead Data Scientist",
    expertise: ["Deep Learning", "NLP", "Series Temporales"],
    initials: "DR",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
  },
  {
    id: "quant",
    name: "Sebastián Vargas",
    role: "Quantitative Analyst",
    expertise: ["Trading Algorítmico", "Optimización de Portafolios", "VaR"],
    initials: "SV",
    gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
  },
  {
    id: "ml",
    name: "Valentina Cruz",
    role: "ML Engineer",
    expertise: ["MLOps", "Computer Vision", "Sistemas de Recomendación"],
    initials: "VC",
    gradient: "linear-gradient(135deg, #0369a1, #0284c7)",
  },
];