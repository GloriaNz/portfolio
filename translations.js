const translations = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_education: "Parcours",
    nav_contact: "Contact",
    nav_btn_cv: "Mon CV",

    // Hero
    hero_greeting: "Bonjour, je suis 👋",
    hero_typing: [
      "Développeuse Backend Python/Flask",
      "Ingénieure API & Intégration IA",
      "Passionnée de Data Engineering"
    ],
    hero_description:
      "Licenciée en Conception des Systèmes d'Information et certifiée AWS. Passionnée par le développement Backend Python/Flask, l'ingénierie d'APIs RESTful et l'intégration de modèles ML/IA.",
    hero_btn_cv: "Télécharger mon CV",
    hero_btn_whatsapp: "WhatsApp",

    // About
    about_title: "À propos de moi",
    about_greeting:
      'Bonjour ! Je suis <span class="highlight">Gloria Nziengi</span>',
    about_bio_1:
      "Licenciée en Conception des Systèmes d'Information et apprenante certifiée en Développement d'Intelligence Artificielle (Simplon / Kadea Academy). Passionnée par la conception d'architectures applicatives modernes, le développement Backend Python/Flask, l'ingénierie d'APIs RESTful, la modélisation de bases de données relationnelles (PostgreSQL/SQLite) et l'intégration de modèles ML/IA.",
    about_bio_2:
      "Rigoureuse, autonome et organisée, je conçois des solutions backend robustes et des pipelines de données efficaces pour des applications web modernes.",
    stat_certifications: "Certifications",
    stat_projects: "Projets réalisés",
    stat_languages: "Langues",
    about_interests_title: '<i class="fas fa-music"></i> Centres d\'intérêt',
    about_interests: "Musique, chant et apprentissage du piano 🎹",
    about_btn_cv: "Télécharger le CV (PDF)",
    about_btn_view_cv: "Visualiser en ligne",

    // Skills
    skills_title: "Compétences Techniques",
    skill_cat_backend: "Backend & Frameworks",
    skill_cat_db: "Bases de Données & ORM",
    skill_cat_ai: "IA, ML & Data",
    skill_cat_devops: "DevOps, Cloud & Outils",
    soft_analytical: "Esprit d'analyse",
    soft_autonomy: "Autonomie",
    soft_organization: "Organisation rigoureuse",

    // Projects
    projects_title: "Projets Vedettes",
    project1_subtitle: "Plateforme Web de Valorisation de CV",
    project1_desc:
      "Application web de gestion automatisée et valorisation de résumés professionnels. Endpoints REST pour parsing de données, upload sécurisé, traitement d'informations et suivi des profils.",
    project2_name: "Intégration IA & Data Engineering",
    project2_desc:
      "Déploiement et fine-tuning de modèles légers sur Hugging Face, création de pipelines de traitement JSON/YAML/CSV pour l'ingénierie de données.",

    // Education
    education_title: "Parcours & Certifications",
    edu_date_1: "Jan. 2026 — Présent",
    edu_title_1: "Certification en Développement IA",
    edu_desc_1: "Machine Learning, Computer Vision, Intégration d'APIs IA.",
    edu_title_2: "AWS Cloud Practitioner (AWS Re/Start)",
    edu_desc_2:
      "Certification officielle AWS Cloud Practitioner validant les fondamentaux du Cloud Computing.",
    edu_badge_certified: "Certifiée",
    edu_title_3: "Licence en Conception des Systèmes d'Information",
    edu_school_3: "Université William Booth — Kinshasa",
    edu_desc_3:
      "Conception de systèmes d'information, modélisation UML, bases de données relationnelles et architecture logicielle.",
    edu_title_4: "African Girls Can Code Initiative (AGCCI)",
    edu_school_4: "ONU Femmes / UN Women",
    edu_desc_4:
      "Programme panafricain de formation et d'autonomisation des jeunes femmes africaines dans les TIC et le codage.",
    edu_title_5: "Graduat en Informatique de Gestion",
    edu_school_5: "Université William Booth — Kinshasa",
    edu_desc_5:
      "Fondamentaux de l'informatique, algorithmique, programmation et gestion des systèmes d'information.",

    // References
    refs_title: '<i class="fas fa-user-check"></i> Références professionnelles',
    ref_1_role: "Coach Soft Skills, Kadea Academy",
    ref_2_role: "Coach Dev IA, Kadea Academy",

    // Contact
    contact_title: "Me Contacter",
    contact_intro:
      "Vous avez un projet, une opportunité ou simplement envie d'échanger ? N'hésitez pas à me contacter !",

    // Footer
    footer_text:
      'Conçu avec <span class="heart">❤</span> par Gloria Nziengi — Kinshasa, R.D. Congo',
    footer_rights: "Tous droits réservés.",
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_btn_cv: "My Resume",

    // Hero
    hero_greeting: "Hi, I'm 👋",
    hero_typing: [
      "Backend Developer — Python/Flask",
      "API Engineer & AI Integration",
      "Passionate about Data Engineering"
    ],
    hero_description:
      "Bachelor's degree in Information Systems Design & AWS Certified. Passionate about Python/Flask backend development, RESTful API engineering, and ML/AI model integration.",
    hero_btn_cv: "Download Resume",
    hero_btn_whatsapp: "WhatsApp",

    // About
    about_title: "About Me",
    about_greeting:
      'Hello! I\'m <span class="highlight">Gloria Nziengi</span>',
    about_bio_1:
      "Bachelor's degree in Information Systems Design and certified AI Development learner (Simplon / Kadea Academy). Passionate about designing modern application architectures, Python/Flask backend development, RESTful API engineering, relational database modeling (PostgreSQL/SQLite), and ML/AI model integration.",
    about_bio_2:
      "Rigorous, autonomous, and highly organized, I build robust backend solutions and efficient data pipelines for modern web applications.",
    stat_certifications: "Certifications",
    stat_projects: "Projects completed",
    stat_languages: "Languages",
    about_interests_title: '<i class="fas fa-music"></i> Hobbies',
    about_interests: "Music, singing, and learning piano 🎹",
    about_btn_cv: "Download Resume (PDF)",
    about_btn_view_cv: "View Online",

    // Skills
    skills_title: "Technical Skills",
    skill_cat_backend: "Backend & Frameworks",
    skill_cat_db: "Databases & ORM",
    skill_cat_ai: "AI, ML & Data",
    skill_cat_devops: "DevOps, Cloud & Tools",
    soft_analytical: "Analytical Mindset",
    soft_autonomy: "Autonomy",
    soft_organization: "Rigorous Organization",

    // Projects
    projects_title: "Featured Projects",
    project1_subtitle: "Web-based Resume Enhancement Platform",
    project1_desc:
      "Web application for automated resume parsing, enhancement, and management. REST endpoints for data parsing, secure uploads, information processing, and profile tracking.",
    project2_name: "AI Integration & Data Engineering",
    project2_desc:
      "Deployment and fine-tuning of lightweight models on Hugging Face, creation of JSON/YAML/CSV processing pipelines for data engineering.",

    // Education
    education_title: "Education & Certifications",
    edu_date_1: "Jan. 2026 — Present",
    edu_title_1: "AI Development Certification",
    edu_desc_1: "Machine Learning, Computer Vision, AI API Integration.",
    edu_title_2: "AWS Cloud Practitioner (AWS Re/Start)",
    edu_desc_2:
      "Official AWS Cloud Practitioner certification validating Cloud Computing fundamentals.",
    edu_badge_certified: "Certified",
    edu_title_3: "Bachelor's in Information Systems Design",
    edu_school_3: "William Booth University — Kinshasa",
    edu_desc_3:
      "Information systems design, UML modeling, relational databases, and software architecture.",
    edu_title_4: "African Girls Can Code Initiative (AGCCI)",
    edu_school_4: "UN Women",
    edu_desc_4:
      "Pan-African training and empowerment program for young African women in ICT and coding.",
    edu_title_5: "Associate Degree in IT Management",
    edu_school_5: "William Booth University — Kinshasa",
    edu_desc_5:
      "Computer science fundamentals, algorithms, programming, and information systems management.",

    // References
    refs_title: '<i class="fas fa-user-check"></i> Professional References',
    ref_1_role: "Soft Skills Coach, Kadea Academy",
    ref_2_role: "AI Dev Coach, Kadea Academy",

    // Contact
    contact_title: "Get in Touch",
    contact_intro:
      "Have a project, an opportunity, or just want to connect? Don't hesitate to reach out!",

    // Footer
    footer_text:
      'Designed with <span class="heart">❤</span> by Gloria Nziengi — Kinshasa, D.R. Congo',
    footer_rights: "All rights reserved.",
  },
};
