/* ===== Hamelraj Rajendran — portfolio data ===== */
window.PORTFOLIO = {
  roles: [
    "Full-Stack Software Engineer",
    "AI Engineer — RAG · Agents · LLMs",
    "PHP · Laravel · Vue specialist",
    "API & System Architect"
  ],

  stack: [
    { title: "Languages", num: "01", chips: ["PHP", "Python", "Node.js", "TypeScript", "JavaScript"] },
    { title: "Frameworks", num: "02", chips: ["Laravel", "FastAPI", "Symfony", "WordPress"] },
    { title: "Front-End", num: "03", chips: ["Vue.js", "React.js", "Next.js", "Bootstrap", "Three.js"] },
    { title: "Databases", num: "04", chips: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Pinecone (VectorDB)"] },
    { title: "Cloud & DevOps", num: "05", chips: ["AWS (EC2, S3)", "GCP", "Vercel", "Docker", "Kubernetes", "Jenkins", "CI/CD", "RabbitMQ"] },
    { title: "AI Engineering", num: "06", ai: true, chips: ["RAG Models", "AI Agents", "OpenAI API", "Claude", "LangChain", "Custom GPT", "Prompt Engineering", "Claude Code", "Cursor", "Copilot"] }
  ],

  experience: [
    {
      role: "Senior Web Developer", company: "Effective Consumable Solutions (UK) Ltd",
      country: "UK", when: "Sep 2025 — Present", current: true,
      points: [
        "Maintaining and improving existing WordPress platforms.",
        "Integrated Lead Forensics and Mailchimp APIs to automate lead capture and email campaigns.",
        "Built a custom template builder using GrapeJS."
      ]
    },
    {
      role: "Software Engineer", company: "Mad Paws Holdings Limited",
      country: "Australia", when: "Mar 2023 — Jul 2024",
      points: [
        "Developed and enhanced RESTful APIs, significantly accelerating data retrieval for web and mobile apps.",
        "Optimised the payment system for secure, efficient transactions.",
        "Led sprint planning and technical discussions, delivering major features under tight deadlines.",
        "Implemented proactive monitoring with New Relic and Kibana to streamline bug resolution."
      ]
    },
    {
      role: "Associate Tech Lead / Senior Software Engineer", company: "Opus Xenta Lanka Pvt Ltd",
      country: "Australia", when: "Feb 2019 — Mar 2023",
      points: [
        "Architected full-stack solutions for the Byondcloud product, optimising complex schemas and Vue.js components for faster page loads.",
        "Managed the end-to-end API lifecycle across microservices, maintaining high availability.",
        "Led a cross-functional team, conducting rigorous code reviews that reduced post-deployment issues.",
        "Feature Owner of the Digital Mapping & Memorialization module — delivered ahead of schedule."
      ]
    },
    {
      role: "Associate Software Engineer / Software Engineer", company: "Multiblity Pvt Ltd",
      country: "Sri Lanka", when: "Nov 2016 — Feb 2019",
      points: [
        "Designed and deployed scalable APIs for the Skyplan aviation platform, handling high-volume flight operations.",
        "Implemented Swagger and Apidoc, streamlining onboarding for new developers and integrators.",
        "Engineered XML data scripts to process large-scale third-party aviation datasets.",
        "Managed Git workflows and executed production deployments via CI/CD pipelines."
      ]
    },
    {
      role: "Trainee / Junior Software Engineer", company: "Prudential Shipping Line Pvt Ltd",
      country: "Sri Lanka", when: "Mar 2014 — Nov 2016",
      points: [
        "Built web-based logistics apps that automated manual entry, reducing operations overhead.",
        "Designed and deployed modules that optimised supply chain tracking and visibility.",
        "Researched and implemented solutions to improve internal reporting and business efficiency."
      ]
    }
  ],

  projects: [
    {
      idx: "01", name: "Byondcloud — Cemetery Mapping", domain: "byond.cloud",
      url: "https://byond.cloud/cemetery-mapping/",
      desc: "Full-stack digital mapping & memorialization platform. Owned the feature end-to-end — Vue.js front-end, complex schema design and the API layer.",
      tags: ["Vue.js", "Laravel API", "OpenLayers", "Feature Owner"]
    },
    {
      idx: "02", name: "Skyplan — Aviation Platform", domain: "skyplan.com",
      url: "https://www.skyplan.com/",
      desc: "Scalable APIs for high-volume flight-operation requests, with Swagger/Apidoc documentation and XML pipelines for third-party aviation datasets.",
      tags: ["API Design", "PHP", "Swagger", "CI/CD"]
    },
    {
      idx: "03", name: "Mad Paws — Pet Care Marketplace", domain: "madpaws.com.au",
      url: "https://www.madpaws.com.au/",
      desc: "Back-end & API development for Australia's largest pet-care marketplace — accelerated data retrieval and hardened the payment system.",
      tags: ["RESTful APIs", "Payments", "New Relic", "Kibana"]
    },
    {
      idx: "04", name: "Byondcloud — Cemetery Management", domain: "byond.cloud",
      url: "https://byond.cloud/cemetery-management-software/",
      desc: "Cemetery administration platform — record management, plot inventory and reporting. Built the Vue.js front-end and Laravel API layer end-to-end.",
      tags: ["Vue.js", "Laravel", "API", "SaaS"]
    },
    {
      idx: "05", name: "Byondcloud — Crematory Management", domain: "byond.cloud",
      url: "https://byond.cloud/crematory-management/",
      desc: "Crematory operations module — scheduling, case tracking and compliance workflows within the Byondcloud product suite.",
      tags: ["Vue.js", "Laravel", "Microservices", "SaaS"]
    }
  ],

  // ----- AI assistant knowledge base (used for the static GitHub-Pages fallback) -----
  faq: [
    { k: ["experience","years","how long","background","summary","who","about"],
      a: "Hamelraj is a <b>Full-Stack Software Engineer with 11+ years</b> of experience in PHP, Laravel, Vue.js and modern JavaScript. He's led Agile teams, driven architecture decisions, and shipped features across the full lifecycle — and now specialises in <b>AI-powered development</b>." },
    { k: ["ai","artificial intelligence","rag","agent","llm","openai","claude","langchain","gpt","machine learning","ml"],
      a: "On the AI side, Hamelraj builds <b>RAG (Retrieval-Augmented Generation) pipelines, AI agents and Custom GPT solutions</b> using OpenAI, Claude and LangChain. He works daily with VectorDBs like Pinecone, and AI dev tools like Claude Code, Cursor and Copilot." },
    { k: ["skills","tech","stack","language","framework","tools","technologies"],
      a: "Core stack: <b>PHP, Python, Node.js, TypeScript</b> · Laravel, FastAPI, Symfony · <b>Vue, React, Next.js</b> · MySQL, PostgreSQL, MongoDB, Redis, Pinecone · AWS, GCP, Docker, Kubernetes, CI/CD — plus a full AI engineering toolkit." },
    { k: ["current","now","job","working","present","ecs","effective"],
      a: "He's currently a <b>Senior Web Developer at Effective Consumable Solutions (UK)</b> since Sep 2025 — working on WordPress platforms, API integrations (Lead Forensics, Mailchimp) and a GrapeJS template builder." },
    { k: ["mad paws","madpaws","australia","payment"],
      a: "At <b>Mad Paws (Australia)</b> he developed RESTful APIs that sped up data retrieval, optimised the payment system, and led sprint planning while monitoring systems with New Relic and Kibana." },
    { k: ["opus","byond","cemetery","mapping","lead","tech lead","team"],
      a: "At <b>Opus Xenta</b> he was Associate Tech Lead — architecting the Byondcloud product, owning the Digital Mapping & Memorialization feature, leading a cross-functional team and running rigorous code reviews." },
    { k: ["skyplan","aviation","flight","multiblity"],
      a: "At <b>Multiblity</b> he built scalable APIs for the Skyplan aviation platform handling high-volume flight operations, documented them with Swagger/Apidoc, and engineered XML pipelines for aviation datasets." },
    { k: ["project","projects","work","portfolio","built"],
      a: "Featured work: <b>Byondcloud Cemetery Mapping</b> (full-stack Vue + API), <b>Skyplan</b> (aviation APIs) and <b>Mad Paws</b> (back-end & payments). Scroll to the Projects section for links." },
    { k: ["education","study","degree","university","msc","chester","masters"],
      a: "He holds an <b>MSc in Advanced Computer Science from the University of Chester (UK)</b>, completed in 2026, and a <b>BSc in Information Technology</b> from Aquinas College, Sri Lanka. He's also a certified Java SE 6 Programmer." },
    { k: ["contact","email","reach","hire","available","location","where","based"],
      a: "He's based in the <b>United Kingdom</b> and open to senior full-stack & AI roles. Email <b>hamelraj89@gmail.com</b> or call +44 740 501 4119 — links to GitHub, LinkedIn and Stack Overflow are in the Contact section." },
    { k: ["database","sql","mysql","postgres","mongo","redis","vector","pinecone"],
      a: "Database expertise spans <b>MySQL, PostgreSQL, MongoDB and Redis</b>, plus <b>VectorDB (Pinecone)</b> for AI retrieval — with strong skills in schema design, data modelling and query optimisation." }
  ],
  fallbackDefault: "Great question! I'm trained on Hamelraj's CV. Try asking about his <b>AI experience</b>, <b>tech stack</b>, <b>work history</b>, <b>projects</b>, or <b>how to contact him</b>. You can also email him directly at hamelraj89@gmail.com.",

  suggestions: ["What's your AI experience?", "Tech stack?", "Current role?", "Featured projects?"]
};
