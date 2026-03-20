import { motion } from "framer-motion";
import { navItems, type PageId } from "../hooks/useNavigation";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navigation({
  currentPage,
  onNavigate,
}: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <nav className="nav-bar">
      <motion.div
        className="nav-logo"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => handleNav("home")}
      >
        <span className="logo-symbol">∑</span>
        <div className="logo-text-group">
          <span className="logo-tbs">Trading Bridge</span>
          <span className="logo-sub">Solutions</span>
        </div>
      </motion.div>

      <motion.ul
        className="nav-links"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {navItems.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
          >
            <button
              className={`nav-link ${currentPage === item.id ? "active" : ""}`}
              onClick={() => handleNav(item.id)}
            >
              {item.labelEs}
              {currentPage === item.id && (
                <motion.span
                  className="nav-underline"
                  layoutId="nav-underline"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <div className="nav-actions">
        <motion.button
          className="theme-toggle"
          onClick={toggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          title={theme === "light" ? "Modo oscuro" : "Modo claro"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            key={theme}
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </motion.div>
        </motion.button>
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          className="nav-mobile-drawer"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-mobile-link ${currentPage === item.id ? "active" : ""}`}
              onClick={() => handleNav(item.id)}
            >
              {item.labelEs}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
