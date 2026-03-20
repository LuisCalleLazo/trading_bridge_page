import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart2,
  Brain,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import type { PageId } from "../hooks/useNavigation";

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const floatingCards = [
  {
    icon: TrendingUp,
    label: "Forecast de Demanda",
    sub: "ARIMA · LSTM · XGBoost",
    color: "var(--accent)",
    delay: 0,
  },
  {
    icon: Brain,
    label: "Inteligencia Artificial",
    sub: "NLP · Deep Learning",
    color: "var(--accent2)",
    delay: 0.15,
  },
  {
    icon: BarChart2,
    label: "Predicción Financiera",
    sub: "VaR · Monte Carlo",
    color: "var(--accent3)",
    delay: 0.3,
  },
];

const stats = [
  { value: "98%", label: "Precisión predictiva" },
  { value: "3×", label: "ROI promedio" },
  { value: "50+", label: "Modelos activos" },
  { value: "24/7", label: "Monitoreo continuo" },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="page home-page">
      <div className="math-bg" aria-hidden="true">
        {[
          "∫",
          "∑",
          "∂",
          "∇",
          "σ",
          "π",
          "∞",
          "≈",
          "∈",
          "⊆",
          "λ",
          "μ",
          "θ",
          "α",
          "β",
          "Δ",
        ].map((s, i) => (
          <span
            key={i}
            className="math-sym"
            style={{ "--i": i } as React.CSSProperties}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="home-content">
        <motion.div
          className="home-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow-chip">Data Science · AI · Finance</span>
        </motion.div>

        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Transformamos <em className="title-em">Datos</em> en <br />
          Decisiones <span className="title-accent">Estratégicas</span>
        </motion.h1>

        <motion.p
          className="home-subtitle"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Soluciones de inteligencia artificial y ciencia de datos para el
          sector empresarial y financiero. Convertimos tu información en ventaja
          competitiva medible y sostenible.
        </motion.p>

        <motion.div
          className="home-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
        >
          <button
            className="btn-primary"
            onClick={() => onNavigate("services")}
          >
            Explorar Servicios <ArrowRight size={16} />
          </button>
          <button className="btn-ghost" onClick={() => onNavigate("contact")}>
            Hablar con un experto <ChevronRight size={15} />
          </button>
        </motion.div>

        <motion.div
          className="stats-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-item"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 + i * 0.07 }}
            >
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right panel */}
      <div className="home-visual">
        {floatingCards.map((card, i) => (
          <motion.div
            key={card.label}
            className="float-card"
            style={{ "--cc": card.color } as React.CSSProperties}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.35 + card.delay,
              duration: 0.55,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ x: -5, transition: { duration: 0.2 } }}
          >
            <div className="fc-icon">
              <card.icon size={20} />
            </div>
            <div className="fc-text">
              <span className="fc-title">{card.label}</span>
              <span className="fc-sub">{card.sub}</span>
            </div>
            <div className="fc-bar">
              <motion.div
                className="fc-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: ["30%", "80%", "55%", "90%"][i % 4] }}
                transition={{
                  delay: 0.8 + card.delay,
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        ))}

        {/* Chart card */}
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="cc-header">
            <span className="cc-title">Market Forecast — Q4</span>
            <span className="cc-badge up">+12.4%</span>
          </div>
          <div className="cc-chart">
            {[42, 58, 47, 72, 61, 85, 70, 91, 78, 96].map((h, i) => (
              <motion.div
                key={i}
                className="cc-bar"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.9 + i * 0.05, duration: 0.4 }}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <svg
            className="cc-line"
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
          >
            <motion.polyline
              points="0,52 22,40 44,46 66,28 88,36 110,16 132,24 154,8 176,18 200,4"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 1.4, ease: "easeInOut" }}
            />
          </svg>
          <div className="cc-footer">
            <span>Modelo: LSTM + XGBoost Ensemble</span>
            <span className="cc-acc">Acc. 96.2%</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
