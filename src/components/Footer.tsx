// import { motion } from "framer-motion";
import { MapPin, Phone, Globe } from "lucide-react";
import type { PageId } from "../hooks/useNavigation";

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-symbol">∑</span>
            <div className="logo-text-group">
              <span className="logo-tbs">Trading Bridge</span>
              <span className="logo-sub">Solutions</span>
            </div>
          </div>
          <p className="footer-tagline">
            Transformamos datos en decisiones estratégicas mediante inteligencia artificial
            de vanguardia para el sector empresarial y financiero.
          </p>
          <div className="footer-formula">
            <span className="formula-text">f(x) = argmax<sub>θ</sub> 𝔼[R | π<sub>θ</sub>]</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navegación</h4>
          <ul className="footer-nav-list">
            {(["home", "about", "services", "contact"] as PageId[]).map((p) => {
              const labels: Record<PageId, string> = { home: "Inicio", about: "Nosotros", services: "Servicios", contact: "Contacto" };
              return (
                <li key={p}>
                  <button className="footer-link" onClick={() => onNavigate(p)}>
                    {labels[p]}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Services quick links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Servicios</h4>
          <ul className="footer-nav-list">
            {["Forecast de Demanda", "Trading Algorítmico", "Gestión de Portafolios", "Sentiment Analysis", "Sistemas RAG", "Dashboards BI"].map((s) => (
              <li key={s}>
                <button className="footer-link" onClick={() => onNavigate("services")}>{s}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contacto</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={14} />
              <span>Dubai Digital Park, Dubai Silicon Oasis, UAE</span>
            </li>
            <li>
              <Phone size={14} />
              <span>+971 58 540 4008</span>
            </li>
            <li>
              <Globe size={14} />
              <span>www.tradingbridge.solutions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">© {year} Trading Bridge Solutions. Todos los derechos reservados.</span>
        <div className="footer-math-row">
          <span>∇L(θ)</span>
          <span>·</span>
          <span>σ(z) = 1/(1+e<sup>−z</sup>)</span>
          <span>·</span>
          <span>P(A|B) = P(B|A)·P(A)/P(B)</span>
        </div>
      </div>
    </footer>
  );
}