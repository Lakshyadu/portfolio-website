export const personalData = {
  name: "Lakshya Dubey",
  roleTitle: "Data Analyst & Full-Stack Developer",
  roles: [
    "Data Analyst",
    "SQL & Python Specialist",
    "Power BI & Tableau Developer",
    "Full-Stack Web Developer"
  ],
  summary: "Aspiring Data Analyst with hands-on experience in SQL, Advanced Excel, Power BI, Tableau, and Python, gained through internships, academic projects, and virtual job simulations with Deloitte and Tata Group. Skilled in data cleaning, validation, EDA, and dashboard reporting, having delivered insights across 60,000+ records. Comfortable working across structured and unstructured datasets to support business decision-making.",
  bio: "Data Analyst with hands-on expertise in SQL, Python (Pandas, NumPy, Matplotlib, Seaborn), Power BI, Tableau, and Advanced Excel. Delivered data insights across 60,000+ records, automated ETL pipelines, trained machine learning models with 85%+ accuracy, and built REST APIs.",
  location: "Lucknow, Uttar Pradesh, India",
  phone: "+91-9335843899",
  email: "lakshaydubey9@gmail.com",
  github: "https://github.com/Lakshyadu",
  linkedin: "https://linkedin.com/in/lakshya-dubey",
  avatar: "/image65.jpg",
  resumeUrl: "/lakshya_resume_2026.pdf"
};

export const statsData = [
  { label: "Records Analyzed", value: "60,000+" },
  { label: "ML Model Accuracy", value: "85%+" },
  { label: "Data Quality Improvement", value: "35%" },
  { label: "Preprocessing Time Saved", value: "40%" }
];

export const skillCategories = [
  {
    id: "data-analysis",
    name: "Data Analysis & Visualization",
    icon: "Layout",
    skills: [
      { name: "SQL (MySQL)", level: 95 },
      { name: "Advanced Excel (Pivot Tables, VLOOKUP, Power Query)", level: 95 },
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "Python (Pandas, NumPy, Matplotlib, Seaborn)", level: 92 }
    ]
  },
  {
    id: "methods",
    name: "Analytics Methods",
    icon: "Server",
    skills: [
      { name: "Exploratory Data Analysis (EDA)", level: 95 },
      { name: "Data Cleaning & Validation", level: 95 },
      { name: "Data Quality Checks", level: 90 },
      { name: "ETL Pipelines", level: 88 },
      { name: "Statistical Analysis", level: 85 },
      { name: "Feature Engineering", level: 88 }
    ]
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    icon: "Cpu",
    skills: [
      { name: "Prompt Engineering", level: 90 },
      { name: "LLM-assisted Data Analysis & Reporting Automation", level: 88 },
      { name: "GenAI Workflow Integration", level: 85 },
      { name: "Retrieval-Augmented Generation (RAG) Fundamentals", level: 78 },
      { name: "GitHub Copilot", level: 90 }
    ]
  },
  {
    id: "tools",
    name: "Reporting & Tools",
    icon: "Wrench",
    skills: [
      { name: "MIS-style Reporting", level: 92 },
      { name: "Dashboards", level: 92 },
      { name: "Jupyter Notebook", level: 95 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "REST API Integration", level: 88 }
    ]
  },
  {
    id: "programming",
    name: "Programming (Secondary)",
    icon: "Layout",
    skills: [
      { name: "Java", level: 80 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "ReactJS", level: 88 },
      { name: "NodeJS", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 85 },
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Customer Behaviour Analysis Dashboard",
    date: "Oct 2025",
    category: "Data Analytics & BI",
    categoryKey: "analytics",
    image: "/assets/project_customer_behavior.jpg",
    description: "Built an interactive Power BI dashboard processing 50,000+ customer records, converting raw CRM data into KPIs including retention rate, purchase frequency, and lifetime value.",
    tags: ["Power BI", "Python (Pandas)", "SQL", "Excel", "Gen AI"],
    demoUrl: "https://github.com/Lakshyadu/-Customer-Behaviour-Analysis-Dashboard.git",
    githubUrl: "https://github.com/Lakshyadu",
    featured: true,
    fullDetails: {
      challenge: "Processing 50,000+ raw CRM records across fragmented tables while maintaining dynamic calculation speed for customer lifetime value (LTV) and retention metrics.",
      solution: "Engineered automated data cleaning and validation scripts with Python (Pandas), cutting manual preprocessing time by 40% and feeding structured data model into Power BI.",
      metrics: ["50,000+ Customer Records Processed", "40% Manual Preprocessing Time Saved", "5+ Business Dimensions Analyzed"],
      techStack: ["Power BI", "Python (Pandas)", "MySQL", "Advanced Excel", "Gen AI"]
    }
  },
  {
    id: 2,
    title: "Diwali Sales Data Analysis",
    date: "Aug 2025",
    category: "ETL & Sales Analytics",
    categoryKey: "analytics",
    image: "/assets/project_diwali_sales.jpg",
    description: "Built an end-to-end ETL pipeline analyzing 10,000+ festival-season transactions, reducing data inconsistencies by 35% through systematic data quality checks.",
    tags: ["Python", "SQL", "Jupyter Notebook", "Excel", "Gen AI"],
    demoUrl: "https://github.com/Lakshyadu/Diwali_sales_analysiss.git",
    githubUrl: "https://github.com/Lakshyadu",
    featured: true,
    fullDetails: {
      challenge: "Identifying top revenue drivers across 10,000+ high-velocity holiday festival transactions with data quality inconsistencies.",
      solution: "Implemented an automated Python ETL pipeline with built-in validation checks, using SQL queries and Excel-based reporting to identify top customer segments.",
      metrics: ["35% Data Inconsistency Reduction", "3 High-Revenue Customer Segments Found", "Reporting Time Cut from Hours to Minutes"],
      techStack: ["Python", "MySQL", "Jupyter Notebook", "Excel", "Gen AI"]
    }
  },
  {
    id: 3,
    title: "Customer Churn Prediction Model",
    date: "Oct 2024",
    category: "Machine Learning",
    categoryKey: "ml",
    image: "/assets/project_analytics.jpg",
    description: "Designed and trained a machine learning classification model achieving 85%+ accuracy in predicting customer churn using Recall, F1-score, and ROC-AUC evaluation.",
    tags: ["Python", "Scikit-learn", "SQL", "Jupyter Notebook", "EDA"],
    demoUrl: "https://github.com/Lakshyadu/businesss-sales-dashboard.git",
    githubUrl: "https://github.com/Lakshyadu",
    featured: true,
    fullDetails: {
      challenge: "Predicting customer churn across 4 diverse industry verticals with imbalanced dataset features.",
      solution: "Executed a comprehensive data science pipeline (collection, data cleaning, EDA, feature engineering) and trained Scikit-learn classification models.",
      metrics: ["85%+ Prediction Accuracy", "Evaluated via Recall, F1-score & ROC-AUC", "Spans 4 Industry Verticals"],
      techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "SQL", "Jupyter"]
    }
  },
  {
    id: 4,
    title: "House Price Prediction",
    date: "Aug 2026",
    category: "Machine Learning",
    categoryKey: "ml",
    image: "/House price prediction.png",
    description: "Built a regression pipeline to predict residential house sale prices from structured property data, using data cleaning, exploratory analysis, and model benchmarking.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook", "EDA"],
    demoUrl: "https://github.com/Lakshyadu/House-price-Prediction.git",
    githubUrl: "https://github.com/Lakshyadu",
    featured: true,
    fullDetails: {
      challenge: "Estimating residential sale prices from property attributes such as square footage, bedrooms, bathrooms, location, and other structured features.",
      solution: "Cleaned and validated the property data, performed EDA with correlation heatmaps and scatter/distribution plots, then trained and benchmarked Linear Regression, Ridge, Lasso, and Gradient Boosting models.",
      metrics: ["Regression Pipeline Built", "4 Models Benchmarked", "R-squared and Error Metrics Compared"],
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"]
    }
  },
  {
    id: 5,
    title: "Sensor Fault Detection using Machine Learning",
    date: "Sep 2026",
    category: "Machine Learning",
    categoryKey: "ml",
    image: "/assets/project_analytics.jpg",
    description: "Built a binary classification pipeline to automatically flag faulty industrial and IoT sensor readings, replacing slower manual inspection with a data-driven detection workflow.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook", "EDA"],
    demoUrl: "https://github.com/Lakshyadu/Sensor-fault-detection-using-Machine-learing-.git",
    githubUrl: "https://github.com/Lakshyadu",
    featured: true,
    fullDetails: {
      challenge: "Automatically identifying faulty industrial and IoT sensor readings from time-series data while reducing reliance on slow manual inspection.",
      solution: "Preprocessed and cleaned sensor data with missing-value imputation and outlier handling, performed EDA to surface fault-indicating features, then trained and compared Logistic Regression, Random Forest, and Decision Tree classifiers.",
      metrics: ["Binary Fault Classification Pipeline", "3 Classification Models Compared", "Accuracy, Precision and Recall Evaluated"],
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"]
    }
  }
];

export const experienceData = [
  {
    id: 1,
    period: "Apr 2025 – Jun 2025",
    role: "Data & Reporting Analyst Intern",
    company: "Bluestocks Fintech",
    location: "Lucknow, India",
    description: "Improved data reliability across BroEx's News Feed and Property Search modules by ~25%, designing and validating 10+ backend REST APIs with data quality checks. Reduced page load time by 30% for BroEx user feed by auditing ReactJS components. Built an internal admin panel with role-based access control (RBAC).",
    technologies: ["REST APIs", "Data Quality Checks", "ReactJS", "Node.js", "MongoDB", "SQL"]
  },
  {
    id: 2,
    period: "Jun 2025",
    role: "Data Analytics Virtual Job Simulation",
    company: "Deloitte Australia (Remote)",
    location: "Remote",
    description: "Delivered structured business insights from real-world case datasets by applying data interpretation, exploratory analysis, and reporting frameworks aligned with Deloitte's analytics methodology.",
    technologies: ["Data Interpretation", "Exploratory Data Analysis", "Business Reporting", "Deloitte Methodology"]
  },
  {
    id: 3,
    period: "Aug 2025",
    role: "GenAI-Powered Data Analytics Virtual Job Simulation",
    company: "Tata Group (Remote)",
    location: "Remote",
    description: "Cut manual analysis time on enterprise datasets by applying generative AI tools to automate reporting workflows, producing insight-ready visual dashboards aligned with enterprise analytics standards.",
    technologies: ["Generative AI", "Automated Workflows", "Enterprise Dashboards", "Data Analytics"]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Master of Computer Application (MCA)",
    institution: "Maharishi Information Technology",
    location: "Lucknow, India",
    period: "Sep 2025 – Jun 2027",
    score: "Enrolled / Pursuing"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Application (BCA)",
    institution: "University of Lucknow",
    location: "Lucknow, India",
    period: "Sep 2022 – Jun 2025",
    score: "72%"
  }
];

export const certificationsData = [
  { title: "ReactJS & Redux", issuer: "Udemy" },
  { title: "NodeJS with Express & MongoDB", issuer: "Udemy" },
  { title: "Python for Data Science", issuer: "XIE" },
  { title: "Command Line in Linux", issuer: "Coursera" },
  { title: "Microsoft AI Classroom", issuer: "Microsoft" },
  { title: "5 Stars in C++ & SQL", issuer: "HackerRank" },
  { title: "MongoDB Basics & SQL", issuer: "Self-Paced / Industry" }
];
