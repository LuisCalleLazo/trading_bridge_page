import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useNavigation } from "./hooks/useNavigation";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";

const pages = { home: Home, about: About, services: Services, contact: Contact };

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

function AppInner() {
  const { currentPage, direction, navigateTo } = useNavigation();
  const PageComponent = pages[currentPage];

  return (
    <div className="app-root">
      <Navigation currentPage={currentPage} onNavigate={navigateTo} />
      <div className="page-container">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 280, damping: 30 }, opacity: { duration: 0.18 } }}
            className="page-wrapper"
          >
            <PageComponent onNavigate={navigateTo} />
          </motion.div>
        </AnimatePresence>
      </div>
        {/* <Footer onNavigate={navigateTo} /> */}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}