import { motion } from "framer-motion";
import { MapPin, Phone, Globe, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Oficina",
    value: "Building A1, Dubai Digital Park, Dubai Silicon Oasis, UAE",
    color: "var(--accent)",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+971 58 540 4008",
    color: "var(--accent2)",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.tradingbridge.solutions",
    color: "var(--accent3)",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  return (
    <div className="page contact-page">
      <div className="math-bg" aria-hidden="true">
        {["∫", "δ", "∇", "𝔼", "ε", "Ω"].map((s, i) => (
          <span
            key={i}
            className="math-sym"
            style={{ "--i": i + 10 } as React.CSSProperties}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="contact-inner">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Contáctanos
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          Inicia tu <span className="title-accent">Transformación Digital</span>
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Nuestro equipo de consultores está listo para ofrecerte una asesoría
          personalizada que identifique las soluciones de IA más adecuadas para
          tus necesidades específicas.
        </motion.p>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className="ci-item"
                style={{ "--ic": item.color } as React.CSSProperties}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ x: 5 }}
              >
                <div className="ci-icon">
                  <item.icon size={18} />
                </div>
                <div>
                  <span className="ci-label">{item.label}</span>
                  <p className="ci-value">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <div className="contact-formula">
              <p className="cf-label">// Nuestro proceso</p>
              <p className="cf-eq">insight = f(data, context, expertise)</p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {!sent ? (
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="form-row">
                  <div className="form-field">
                    <label>Nombre</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="tu@empresa.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label>Empresa</label>
                  <input
                    type="text"
                    placeholder="Nombre de tu empresa"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                  />
                </div>
                <div className="form-field">
                  <label>Mensaje</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary form-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensaje <Send size={15} />
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon">✓</div>
                <h3>¡Mensaje enviado!</h3>
                <p>Nos pondremos en contacto contigo muy pronto.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
