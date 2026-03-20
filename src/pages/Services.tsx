import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { servicesData } from "../data/services";
import {
  TrendingUp,
  Users,
  PieChart,
  Search,
  Star,
  MessageSquare,
  LayoutDashboard,
  BarChart2,
  Zap,
  Briefcase,
  Shield,
  Brain,
  Database,
  ChevronDown,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Users,
  PieChart,
  Search,
  Star,
  MessageSquare,
  LayoutDashboard,
  BarChart2,
  Zap,
  Briefcase,
  Shield,
  Brain,
  Database,
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<"business" | "finance">(
    "business",
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const current = servicesData.find((c) => c.category === activeCategory)!;

  return (
    <div className="page services-page">
      <div className="math-bg" aria-hidden="true">
        {["f(x)", "∑", "∂x", "μ", "∈ℝ", "P(x)"].map((s, i) => (
          <span
            key={i}
            className="math-sym"
            style={{ "--i": i + 6 } as React.CSSProperties}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="services-inner">
        <div className="svc-header-row">
          <div>
            <motion.div
              className="section-badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Nuestros Productos
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              IA &amp; Ciencia de Datos{" "}
              <span className="title-accent">a tu medida</span>
            </motion.h2>
          </div>

          {/* Tabs */}
          <motion.div
            className="cat-tabs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {servicesData.map((cat) => (
              <button
                key={cat.id}
                className={`cat-tab ${activeCategory === cat.category ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory(cat.category);
                  setExpandedId(null);
                }}
              >
                {activeCategory === cat.category && (
                  <motion.span className="cat-tab-bg" layoutId="cat-tab-bg" />
                )}
                <span className="cat-tab-label">{cat.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="svc-grid"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {current.services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Brain;
              const isOpen = expandedId === service.id;
              return (
                <motion.div
                  key={service.id}
                  className={`svc-card ${isOpen ? "svc-open" : ""}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  layout
                >
                  <button
                    className="svc-header"
                    onClick={() => setExpandedId(isOpen ? null : service.id)}
                  >
                    <div className="svc-icon-wrap">
                      <Icon size={18} />
                    </div>
                    <div className="svc-text">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <motion.div
                      className="svc-chevron"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="svc-features"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <ul>
                          {service.features.map((f) => (
                            <li key={f}>
                              <span className="feat-dot" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
