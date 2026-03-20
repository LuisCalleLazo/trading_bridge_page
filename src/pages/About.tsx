import { motion } from "framer-motion";
import { Target, Eye, Users, Cpu } from "lucide-react";
import { teamData } from "../data/team";

const pillars = [
  {
    icon: Users,
    title: "Equipo Multidisciplinario",
    desc: "Expertos en ciencia de datos, IA, finanzas corporativas y consultoría.",
    color: "var(--accent)",
  },
  {
    icon: Cpu,
    title: "Tecnología de Vanguardia",
    desc: "Las últimas innovaciones en machine learning e inteligencia artificial.",
    color: "var(--accent2)",
  },
  {
    icon: Target,
    title: "Estrategia Data-Driven",
    desc: "Soluciones que anticipan desafíos futuros, no solo los resuelven hoy.",
    color: "var(--accent3)",
  },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <div className="page about-page">
      <div className="math-bg" aria-hidden="true">
        {["∂", "∇", "μ", "σ", "∫", "≤", "≥", "∀", "∃", "⊂"].map((s, i) => (
          <span
            key={i}
            className="math-sym"
            style={{ "--i": i + 3 } as React.CSSProperties}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="about-inner">
        {/* Intro */}
        <div className="about-intro-grid">
          <div>
            <motion.div
              className="section-badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Quiénes Somos
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              Soluciones Inteligentes en{" "}
              <span className="title-accent">Datos e IA</span>
            </motion.h2>
            <motion.p
              className="section-desc"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Trading Bridge Solutions busca consolidarse como empresa líder en
              el desarrollo e implementación de soluciones tecnológicas basadas
              en inteligencia artificial, específicamente diseñadas para el
              sector empresarial y financiero.
            </motion.p>
          </div>
          <motion.div
            className="about-formula-panel"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="formula-line">
              <span className="f-comment">// Modelo de decisión óptima</span>
            </div>
            <div className="formula-line">
              <span className="f-key">θ*</span> ={" "}
              <span className="f-val">
                argmin<sub>θ</sub> L(θ, D)
              </span>
            </div>
            <div className="formula-line">
              <span className="f-key">L</span> ={" "}
              <span className="f-val">
                −𝔼<sub>π</sub>[∑<sub>t</sub> γ<sup>t</sup>R<sub>t</sub>]
              </span>
            </div>
            <div className="formula-line">
              <span className="f-key">ŷ</span> ={" "}
              <span className="f-val">σ(W · X + b)</span>
            </div>
            <div className="formula-line f-dim">
              <span className="f-comment">// Transforming data → insight</span>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <motion.div
          className="pillars-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              className="pillar-card"
              variants={item}
              whileHover={{ y: -4 }}
              style={{ "--pc": p.color } as React.CSSProperties}
            >
              <div className="pillar-icon">
                <p.icon size={22} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="mv-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <div className="mv-card">
            <div className="mv-icon-row">
              <Target size={22} />
              <span className="mv-label">Misión</span>
            </div>
            <p>
              Impulsar el uso estratégico de la inteligencia artificial y la
              ciencia de datos en las finanzas y los negocios. Transformamos
              datos en decisiones inteligentes que generen valor, mitiguen
              riesgos y potencien el crecimiento de empresas e instituciones
              financieras.
            </p>
          </div>
          <div className="mv-card mv-vision">
            <div className="mv-icon-row">
              <Eye size={22} />
              <span className="mv-label">Visión</span>
            </div>
            <p>
              Ser la firma líder en soluciones analíticas y tecnológicas para
              organizaciones que buscan evolucionar hacia un modelo data-driven,
              convirtiendo la información en una ventaja competitiva sostenible
              y medible en el tiempo.
            </p>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="team-header">
            <div className="section-badge">Nuestro Equipo</div>
            <h3 className="team-title">Las mentes detrás de los datos</h3>
          </div>
          <motion.div
            className="team-grid"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {teamData.map((member) => (
              <motion.div
                key={member.id}
                className="team-card"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div
                  className="tc-avatar"
                  style={{ background: member.gradient }}
                >
                  <span>{member.initials}</span>
                </div>
                <div className="tc-info">
                  <h4 className="tc-name">{member.name}</h4>
                  <p className="tc-role">{member.role}</p>
                  <div className="tc-chips">
                    {member.expertise.map((e) => (
                      <span key={e} className="tc-chip">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
