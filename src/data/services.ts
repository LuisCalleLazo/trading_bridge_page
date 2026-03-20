export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface ServiceCategory {
  id: string;
  category: "business" | "finance";
  label: string;
  title: string;
  subtitle: string;
  color: string;
  services: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "business",
    category: "business",
    label: "Negocios",
    title: "Soluciones para Negocios",
    subtitle: "Inteligencia artificial aplicada al crecimiento empresarial",
    color: "#00D4FF",
    services: [
      {
        id: "forecast",
        title: "Forecast de Demanda",
        description:
          "Predicciones precisas con un arsenal completo de técnicas estadísticas y machine learning adaptadas a cada sector.",
        features: [
          "ARIMA / SARIMA para series temporales",
          "Holt-Winters para tendencias y estacionalidad",
          "Redes LSTM y Deep Learning",
          "Random Forests y Gradient Boosting",
          "Enfoques híbridos y ensamblaje de modelos",
          "Elasticidades precio y cruzadas",
        ],
        icon: "TrendingUp",
      },
      {
        id: "churn",
        title: "Retención de Clientes (Churn)",
        description:
          "Anticipa la deserción de clientes antes de que ocurra con modelos predictivos de alta precisión.",
        features: [
          "Detección temprana de señales de abandono",
          "Modelos predictivos de Machine Learning",
          "Optimización de estrategias de retención",
          "Segmentación por riesgo de fuga",
        ],
        icon: "Users",
      },
      {
        id: "clustering",
        title: "Personalización Inteligente (Clustering)",
        description:
          "Segmentación avanzada de clientes con técnicas de aprendizaje no supervisado para personalización a escala.",
        features: [
          "Métodos Particionales (K-Means, K-Medoids)",
          "Métodos Jerárquicos (Ward, Complete Linkage)",
          "Métodos Basados en Densidad (DBSCAN)",
          "Análisis de comportamiento y perfiles",
          "Personalización y anticipación de necesidades",
        ],
        icon: "PieChart",
      },
      {
        id: "pricing",
        title: "Monitoreo de Precios (Scraping)",
        description:
          "Vigilancia inteligente de la competencia en tiempo real para mantener siempre una posición competitiva óptima.",
        features: [
          "Monitoreo en tiempo real de precios",
          "Análisis de tendencias del mercado",
          "Estrategias de pricing dinámico",
          "Alertas automáticas de variaciones",
        ],
        icon: "Search",
      },
      {
        id: "recommendations",
        title: "Sistemas de Recomendación",
        description:
          "Algoritmos que analizan el comportamiento del usuario para ofrecer sugerencias verdaderamente relevantes.",
        features: [
          "Filtrado colaborativo y basado en contenido",
          "Mayor conversión y ventas",
          "Experiencia personalizada de consumo",
          "Fidelización y retención de clientes",
          "Algoritmos híbridos de alta precisión",
        ],
        icon: "Star",
      },
      {
        id: "chatbots",
        title: "Chatbots para Atención al Cliente",
        description:
          "Automatización inteligente con disponibilidad 24/7 e interacción personalizada para cada cliente.",
        features: [
          "Disponibilidad 24/7 sin interrupciones",
          "Automatización de consultas frecuentes",
          "Escalado a agentes humanos",
          "Integración con CRM y sistemas internos",
        ],
        icon: "MessageSquare",
      },
      {
        id: "dashboards",
        title: "Dashboards Interactivos",
        description:
          "Transforma datos complejos en información clara y procesable para todos los niveles de la organización.",
        features: [
          "Monitoreo en tiempo real",
          "Identificación de tendencias y patrones",
          "Toma de decisiones basada en datos",
          "KPIs personalizables por rol",
        ],
        icon: "LayoutDashboard",
      },
    ],
  },
  {
    id: "finance",
    category: "finance",
    label: "Finanzas",
    title: "Soluciones Financieras",
    subtitle: "IA y ciencia de datos para el sector financiero",
    color: "#7C3AED",
    services: [
      {
        id: "market-prediction",
        title: "Predicción de Mercados Financieros",
        description:
          "Pronósticos de alta precisión para activos financieros con modelos de última generación.",
        features: [
          "Regresión Lineal y modelos ARIMA",
          "Modelos GARCH para volatilidad",
          "Redes Neuronales Recurrentes (LSTM)",
          "Random Forest y XGBoost",
          "Análisis multivariable avanzado",
        ],
        icon: "BarChart2",
      },
      {
        id: "algorithmic-trading",
        title: "Trading Algorítmico",
        description:
          "Sistemas automáticos de compra y venta de activos basados en señales cuantitativas y aprendizaje por refuerzo.",
        features: [
          "Modelos de Machine Learning para señales",
          "Reinforcement Learning adaptativo",
          "Análisis de series temporales financieras",
          "Backtesting y optimización de estrategias",
        ],
        icon: "Zap",
      },
      {
        id: "portfolio",
        title: "Gestión y Optimización de Portafolios",
        description:
          "Maximiza el retorno ajustado al riesgo con algoritmos de optimización basados en la Teoría Moderna de Portafolios.",
        features: [
          "Teoría Moderna de Portafolios (Markowitz)",
          "Modelos de asignación de activos",
          "Algoritmos de optimización cuantitativa",
          "Simulación de Monte Carlo",
        ],
        icon: "Briefcase",
      },
      {
        id: "risk",
        title: "Gestión de Riesgos Financieros",
        description:
          "Identificación, medición y mitigación de riesgos con modelos estadísticos y dashboards en tiempo real.",
        features: [
          "Modelos VaR (Value at Risk)",
          "Análisis de sensibilidad y escenarios",
          "Credit Scoring (Logistic, SVM, Ensambles)",
          "Dashboards de riesgo en tiempo real",
        ],
        icon: "Shield",
      },
      {
        id: "sentiment",
        title: "Sentiment Analysis en Finanzas",
        description:
          "Captura el pulso del mercado procesando noticias, redes sociales y reportes con NLP avanzado.",
        features: [
          "Procesamiento de Lenguaje Natural (NLP)",
          "Modelos de análisis de sentimiento",
          "Clasificadores de texto financiero",
          "Integración con datos de mercado",
        ],
        icon: "Brain",
      },
      {
        id: "rag",
        title: "RAG: Retrieval-Augmented Generation",
        description:
          "El arquitecto del conocimiento financiero. Genera respuestas fundamentadas en tu base documental corporativa.",
        features: [
          "Análisis de inversiones documentado",
          "Gestión de riesgos con contexto regulatorio",
          "Cumplimiento normativo automatizado",
          "Due diligence acelerada",
          "Atención al cliente premium",
        ],
        icon: "Database",
      },
    ],
  },
];