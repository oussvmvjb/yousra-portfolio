import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  personalInfo = [
    {
      id: 3,
      nom: 'Iben Rajab',
      prenon: 'Yosra',
      image: 'IMG-20250502-WA0010-699d9178e6578.jpg',
      description: `Étudiante en 3ème année de Licence en Informatique, spécialisée en Développement des Systèmes d'Information (DSI), je suis passionnée par l'innovation technologique et la transformation numérique.
​Dotée d'une grande rigueur et d'un esprit créatif, j'aime concevoir des solutions techniques qui font la différence. Pour moi, le développement ne se résume pas au code ; c'est avant tout un travail d'équipe où la communication est la clé de la réussite.
​Curieuse de nature, je m'intéresse de près à l'Intelligence Artificielle et au développement personnel, des domaines qui nourrissent ma vision du futur. Mon ouverture sur le monde, forgée par mon amour pour les voyages et la découverte de nouvelles cultures, me permet de comprendre comment la technologie s'adapte aux besoins humains à l'échelle mondiale.
​Déterminée à exceller dans mon parcours académique et professionnel, mon ambition est de laisser une empreinte durable dans l'univers du numérique et de contribuer activement à bâtir un avenir technologique plus intelligent et plus humain.`,
      birthday: '2004-06-24',
      phone: '56307045 - 94744988',
      city: 'mahdia',
      email: 'yosrabenrajab@gmail.com',
      degree: "Développement des systèmes d'information (DSI)",
      cvpath: 'CV-Yosra-IBEN-RAJAB-1-2-699d9178f19f8.pdf',
      profection: 'Etudiante',
      locale: 'fr'
    },
    {
      id: 5,
      nom: 'Iben Rajab',
      prenon: 'Yosra',
      image: 'IMG-20250502-WA0010-699ea44a4a1ca.jpg',
      description: `A third-year Computer technology student specializing in Information Systems Development (ISD), I am deeply passionate about technological innovation and digital transformation.
​Driven by a blend of rigor and creativity, I thrive on designing technical solutions that make a tangible difference. To me, development is more than just writing code; it is a collaborative effort where effective communication is the cornerstone of success.
​Naturally curious, I am keenly interested in Artificial Intelligence and personal development—fields that continuously shape my vision of the future. My global mindset, nurtured by a love for travel and discovering new cultures, allows me to understand how technology adapts to human needs on a worldwide scale.
​Determined to excel both academically and professionally, my ambition is to leave a lasting mark in the digital world and actively contribute to building a smarter, more human-centric technological future.`,
      birthday: '2004-06-24',
      phone: '56307045 - 94744988',
      city: 'Mahdia',
      email: 'yosrabenrajab@gmail.com',
      degree: 'Information Systems Development',
      cvpath: 'CV-Yosra-IBEN-RAJAB-1-2-699ea44a81012.pdf',
      profection: 'Student',
      locale: 'en'
    },
    {
      id: 6,
      nom: 'Iben Rajab',
      prenon: 'Yosra',
      image: 'IMG-20250502-WA0010-699ea53ba63d5.jpg',
      description: `Studentessa al terzo anno di Laurea in Informatica, specializzata in Sviluppo di Sistemi Informativi (DSI), nutro una profonda passione per l'innovazione tecnologica e la trasformazione digitale.
​Caratterizzata da una grande rigorosità e da uno spirito creativo, amo progettare soluzioni tecniche in grado di fare la differenza. Per me, lo sviluppo non si riduce alla semplice scrittura di codice; è prima di tutto un lavoro di squadra dove la comunicazione è la chiave del successo.
​Curiosa per natura, mi interesso da vicino all'Intelligenza Artificiale e alla crescita personale, ambiti che alimentano la mia visione del futuro. La mia apertura verso il mondo, forgiata dall'amore per i viaggi e dalla scoperta di nuove culture, mi permette di comprendere come la tecnologia si adatti ai bisogni umani su scala globale.
​Determinata a eccellere nel mio percorso accademico e professionale, la mia ambizione è lasciare un'impronta duratura nel mondo del digitale e contribuire attivamente a costruire un futuro tecnologico più intelligente e più umano.`,
      birthday: '2004-06-24',
      phone: '56307045 - 94744988',
      city: 'Mahdia',
      email: 'yosrabenrajab@gmail.com',
      degree: "Sviluppo di Sistemi Informativi (DSI)",
      cvpath: null,
      profection: 'Studentessa',
      locale: 'it'
    }
  ];

  education = [
    {
      id: 4,
      diplome: "Licence en technologie d'informatique",
      etablissement: 'ISET Mednine',
      datedebut: '2023-09-04',
      datefin: '2026-07-01',
      description: 'Spécialité : Développement des Systèmes d\'Information (DSI) à l\'Institut Supérieur des Études Technologiques (ISET) de Médenine',
      locale: 'fr'
    },
    {
      id: 9,
      diplome: 'Baccalauréat en Mathématiques',
      etablissement: 'Lycée Mellouleche',
      datedebut: '2022-09-17',
      datefin: '2023-06-20',
      description: '',
      locale: 'fr'
    },
    {
      id: 10,
      diplome: 'Formation Spécialisée en Intelligence Artificielle',
      etablissement: 'Centre de formation "Designet" à Nabeul',
      datedebut: '2025-07-14',
      datefin: '2025-08-31',
      description: '* Apprentissage Automatique (Machine Learning) : Maîtrise des algorithmes de clustering (K-means) et des modèles prédictifs.\r\n* ​Deep Learning & Réseaux de Neurones : Conception et entraînement de réseaux de neurones (MLP - Multilayer Perceptron).\r\n* ​IA Générative : Mise en œuvre de l\'architecture RAG (Retrieval-Augmented Generation) pour l\'optimisation des LLMs',
      locale: 'fr'
    },
    {
      id: 11,
      diplome: 'Formazione Specialistica in Intelligenza Artificiale',
      etablissement: 'Centro di Formazione "Designet " a Nabeul',
      datedebut: '2025-07-14',
      datefin: '2025-08-31',
      description: '*​ Machine Learning: Padronanza degli algoritmi di clustering (K-means) e modelli predittivi.\r\n​* Deep Learning e Reti Neurali: Progettazione e addestramento di reti neurali (MLP - Multilayer Perceptron).\r\n* ​IA Generativa: Implementazione dell\'architettura RAG (Retrieval-Augmented Generation) per l\'ottimizzazione dei modelli linguistici (LLM).',
      locale: 'it'
    },
    {
      id: 12,
      diplome: 'Specialized Training in Artificial Intelligence',
      etablissement: 'Designet training center in Nabel',
      datedebut: '2025-07-14',
      datefin: '2025-08-31',
      description: '* Machine Learning: Expertise in clustering algorithms (K-means) and supervised learning.\r\n* ​Deep Learning and Neural Networks: Proficient in designing and training Multilayer Perceptrons (MLP).\r\n* ​Generative AI: Implementing RAG (Retrieval-Augmented Generation) architecture to enhance Large Language Models (LLM).',
      locale: 'en'
    },
    {
      id: 13,
      diplome: 'Laurea Triennale in Informatica',
      etablissement: 'Istituto Superiore di Studi Tecnologici (ISET) di Médenine',
      datedebut: '2023-09-04',
      datefin: '2026-07-01',
      description: 'Specializzazione: Sviluppo di Sistemi Informativi (DSI)',
      locale: 'it'
    },
    {
      id: 14,
      diplome: 'Bachelor"s Degree in Computer technology',
      etablissement: 'Higher Institute of Technological Studies (ISET), Médenine',
      datedebut: '2023-09-07',
      datefin: '2026-07-04',
      description: 'Specialization: Information Systems Development (ISD)',
      locale: 'en'
    },
    {
      id: 15,
      diplome: 'Diploma di Maturità Scientifica (Matematica)',
      etablissement: 'Liceo Mellouleche',
      datedebut: '2022-09-17',
      datefin: '2023-06-20',
      description: '',
      locale: 'it'
    },
    {
      id: 16,
      diplome: 'High School Diploma in Mathematics',
      etablissement: 'Mellouleche Secondary School',
      datedebut: '2022-09-17',
      datefin: '2023-06-20',
      description: '',
      locale: 'en'
    }
  ];

  experience = [
    {
      id: 4,
      titre: 'Stage de Perfectionnement',
      entreprise: 'webGraphique',
      local: 'Sfax',
      datedebut: '2024-01-01',
      datefin: '2024-02-01',
      descriotion: 'Projet : Conception et développement d\'une application mobile de réservation de transport.\r\n​Missions :\r\n​Application de la méthodologie de design en 7 étapes (de l\'analyse des besoins au prototypage).\r\n​Conception de l\'interface utilisateur (UI/UX Design) pour une expérience fluide.\r\n​Développement du Front-end mobile en utilisant le framework Flutter.\r\n​Mise en place et configuration de la base de données et de l\'authentification via Firebase.\r\n​Intégration des fonctionnalités de réservation en temps réel.',
      responsabilite: 'Développement de l"interface utilisateur et des interactions en utilisant le langage Dart dans Flutter.\r\n\r\nMise en place de l"authentification Firebase (email/mot de passe).\r\n\r\nIntégration de Firebase Firestore pour la gestion des données en temps réel.\r\n',
      locale: 'fr'
    },
    {
      id: 6,
      titre: "Stage d'été",
      entreprise: 'Designet',
      local: 'Nabeul',
      datedebut: '2025-07-15',
      datefin: '2025-08-31',
      descriotion: 'Projet : Développement d\'un Chatbot IA intelligent (RAG) pour le secteur de la santé.\r\n​Missions & Technologies :\r\n​Mise en place d\'une architecture RAG (Retrieval-Augmented Generation) pour l\'interrogation de documents médicaux.\r\n​Gestion du cycle de données : Extraction, Chunking et génération d\'Embeddings pour transformer les textes en vecteurs.\r\n​Utilisation d\'une Vector Database pour le stockage et la récupération efficace des connaissances médicales.\r\n​Utilisation de LangChain pour orchestrer les chaînes de traitement et le Prompt Engineering.\r\n​Intégration du modèle LLM Google Gemini pour générer des réponses contextuelles et précises.\r\n​Développement de l\'interface utilisateur interactive avec Streamlit.',
      responsabilite: '',
      locale: 'fr'
    },
    {
      id: 8,
      titre: 'Summer internship',
      entreprise: 'Designet',
      local: 'Nabeul',
      datedebut: '2025-07-15',
      datefin: '2025-08-31',
      descriotion: 'Project: AI-powered Health Chatbot using RAG Architecture.\r\n​Key Responsibilities :\r\n​Architected a RAG (Retrieval-Augmented Generation) system to query complex medical PDF/text documents.\r\n​Implemented data pipelines using Embeddings to convert medical knowledge into high-dimensional vectors.\r\n​Managed efficient document retrieval through a Vector Database for semantic search.\r\n​Leveraged LangChain for memory management, document chains, and advanced Prompt Engineering.\r\n​Integrated Google Gemini as the primary LLM for natural language understanding and generation.\r\n​Built a fast, responsive, and user-friendly web interface using Streamlit.',
      responsabilite: '',
      locale: 'en'
    },
    {
      id: 9,
      titre: 'Stage estivo',
      entreprise: 'Designet',
      local: 'Nabeul',
      datedebut: '2025-07-15',
      datefin: '2025-08-31',
      descriotion: 'Progetto: Chatbot basato su IA per il settore sanitario (Architettura RAG).\r\n​Responsabilità :\r\n​Implementazione di un\'architettura RAG (Retrieval-Augmented Generation) per l\'interrogazione di documenti medici specifici.\r\n​Sviluppo di pipeline di dati con Embeddings per la trasformazione del testo in vettori numerici.\r\n​Integrazione di un Vector Database per l\'indicizzazione e il recupero semantico delle informazioni.\r\n​Utilizzo di LangChain per l\'orchestrazione dei flussi e tecniche di Prompt Engineering.\r\n​Integrazione del modello LLM Google Gemini per garantire risposte intelligenti e contestualizzate.\r\n​Sviluppo dell\'interfaccia utente interattiva tramite Streamlit.',
      responsabilite: '',
      locale: 'it'
    },
    {
      id: 10,
      titre: 'Mobile Development Intern',
      entreprise: 'webGraphique',
      local: 'Sfax',
      datedebut: '2024-01-01',
      datefin: '2024-02-01',
      descriotion: 'Project: Design and development of a mobile transportation booking application.\r\n​Key Responsibilities:\r\n​Executed the full 7-step design process (from requirements gathering to final testing).\r\n​Designed a user-friendly and modern interface (UI/UX) independently.\r\n​Developed the mobile Front-end using Flutter (Dart).\r\n​Configured and integrated Firebase for backend services (Authentication & Real-time Database).\r\n​Ensured seamless application flow and data synchronization.',
      responsabilite: '',
      locale: 'en'
    },
    {
      id: 11,
      titre: 'Stagista Sviluppatore Mobile',
      entreprise: 'webGraphique',
      local: 'Sfax',
      datedebut: '2024-01-01',
      datefin: '2024-02-01',
      descriotion: 'Progetto: Progettazione e sviluppo di un\'applicazione mobile per la prenotazione di trasporti.\r\n​Responsabilità:\r\n​Applicazione del processo di design in 7 fasi (dall\'analisi al prototipo finale).\r\n​Progettazione autonoma dell\'interfaccia utente (UI/UX Design).\r\n​Sviluppo del Front-end mobile tramite il framework Flutter.\r\n​Configurazione e integrazione di Firebase per la gestione dei dati e dell\'autenticazione.\r\n​Implementazione delle funzionalità di prenotazione e gestione in tempo reale.',
      responsabilite: '',
      locale: 'it'
    },
    {
      id: 12,
      titre: "3ème Prix | Compétition d'Innovation Technologique (Hackathon)",
      entreprise: 'Swafy',
      local: 'Médenine',
      datedebut: '2025-10-18',
      datefin: '2025-12-20',
      descriotion: 'Projet : Plateforme Éducative Intelligente (Adaptive Learning)\r\n​Concept : Création d\'une plateforme d\'apprentissage personnalisée générant des cours et des quiz dynamiques basés sur le profil de l\'utilisateur.\r\n​Missions et Expertises :\r\n​Intelligence Artificielle : Fine-tuning et déploiement local du modèle Open-source Qwen pour la génération de contenu pédagogique spécifique.\r\n​Optimisation IA : Entraînement local avec focus sur la précision des réponses et la performance du modèle.\r\n​Développement Backend : Architecture robuste avec Django pour la gestion des utilisateurs, des données et l\'intégration de l\'IA via des APIs.\r\n​Développement Frontend : Interface interactive et réactive développée avec React.js.\r\n​Collaboration Agile : Travail d"équipe en mode Agile pour assurer l\'intégration Full-stack d\'une solution IA complexe.',
      responsabilite: '',
      locale: 'fr'
    },
    {
      id: 13,
      titre: '3rd Place Winner | Tech Innovation Hackathon',
      entreprise: 'Swafy',
      local: 'Médenine',
      datedebut: '2025-10-18',
      datefin: '2025-12-20',
      descriotion: 'Project: AI-Powered Adaptive Learning Platform\r\n​Concept: An intelligent educational platform that generates tailored courses and quizzes based on individual learning needs and user behavior.\r\n​Key Contributions & Tech Stack:\r\n​Artificial Intelligence: Performed Fine-tuning and Local Training of the Qwen Open-source LLM for customized content generation.\r\n​AI Optimization: Focused on local deployment efficiency and model accuracy for educational contexts.\r\n​Backend Development: Built a scalable architecture using Django to manage the core logic and AI service integration.\r\n​Frontend Development: Designed and developed a dynamic, user-centric interface using React.js.\r\n​Full-stack Teamwork: Collaborated within an agile team to deliver a production-ready AI solution from scratch.',
      responsabilite: 'klk',
      locale: 'en'
    },
    {
      id: 14,
      titre: "3° Posto | Competizione di Innovazione Tecnologica (Hackathon)",
      entreprise: 'Swafy',
      local: 'Médenine',
      datedebut: '2025-10-18',
      datefin: '2025-12-20',
      descriotion: 'Progetto: Piattaforma Educativa Intelligente (Adaptive Learning)\r\n​Concetto: Una piattaforma di apprendimento adattiva che genera corsi e quiz personalizzati in base alle necessità e al profilo di ogni utente.\r\n​Responsabilità e Tecnologie:\r\n​Intelligenza Artificiale: Fine-tuning e implementazione locale del modello Open-source Qwen per la generazione di contenuti didattici.\r\n​Ottimizzazione IA: Addestramento locale focalizzato sulla precisione del modello e sull\'efficienza delle prestazioni.\r\n​Sviluppo Backend: Progettazione di un\'architettura robusta con Django per la gestione dei servizi e l\'integrazione dell\'IA.\r\n​Sviluppo Frontend: Creazione di un\'interfaccia utente dinamica e reattiva con React.js.\r\n​Teamwork Agile: Collaborazione in team seguendo metodologie Agile per integrare soluzioni IA in un ambiente Full-stack.',
      responsabilite: '',
      locale: 'it'
    }
  ];

  projects = [
    // Télépharmacie - FR
    {
      id: 4,
      titre: "Télépharmacie",
      description: `Télépharmacie est une application web conçue pour faciliter l"accès aux médicaments à distance. Elle permet aux utilisateurs de consulter les produits disponibles, de passer des commandes, et aux pharmaciens de gérer les stocks et les ordonnances.`,
      technologie: "HTML, CSS, JavaScript, Firebase / MySQL",
      githublink: null,
      image: "Screenshot-2025-05-06-120706-6823e0189efc6.png",
      locale: "fr",
      creatdat: "2026-02-13 12:13:00",
      images: [
        "Screenshot-2026-02-24-085713-699d880505741.png",
        "Screenshot-2026-02-24-085713-699d8806dafaa.png"
      ]
    },
    // Télépharmacie - EN
    {
      id: 41,
      titre: "Telepharmacy",
      description: `Telepharmacy is a web application designed to facilitate remote access to medications. It allows users to browse available products, place orders, and pharmacists to manage inventory and prescriptions.`,
      technologie: "HTML, CSS, JavaScript, Firebase / MySQL",
      githublink: null,
      image: "Screenshot-2025-05-06-120706-6823e0189efc6.png",
      locale: "en",
      creatdat: "2026-02-13 12:13:00",
      images: [
        "Screenshot-2026-02-24-085713-699d880505741.png",
        "Screenshot-2026-02-24-085713-699d8806dafaa.png"
      ]
    },
    // Télépharmacie - IT
    {
      id: 42,
      titre: "Telefarmacia",
      description: `Telefarmacia è un"applicazione web progettata per facilitare l"accesso ai farmaci a distanza. Consente agli utenti di consultare i prodotti disponibili, effettuare ordini, e ai farmacisti di gestire le scorte e le prescrizioni.`,
      technologie: "HTML, CSS, JavaScript, Firebase / MySQL",
      githublink: null,
      image: "Screenshot-2025-05-06-120706-6823e0189efc6.png",
      locale: "it",
      creatdat: "2026-02-13 12:13:00",
      images: [
        "Screenshot-2026-02-24-085713-699d880505741.png",
        "Screenshot-2026-02-24-085713-699d8806dafaa.png"
      ]
    },
    // Portfolio - FR
    {
      id: 5,
      titre: "Portfolio",
      description: `Ce projet de portfolio a été conçu pour présenter de manière professionnelle mes réalisations, compétences et parcours dans le domaine du développement web et mobile.\nPrésentation claire de mes projets avec descriptions, technologies et rôles.\nSection “À propos” avec mon parcours éducatif et professionnel.\nInterface responsive adaptée aux écrans mobiles et desktop.\nCode propre, structuré et facilement maintenable.`,
      technologie: "PHP, Symfony, MySQL, HTML",
      githublink: null,
      image: "WhatsApp-Image-2025-05-06-at-23-21-58-adb28b27-6823e160ef57b.jpg",
      locale: "fr",
      creatdat: "2026-02-12 12:14:00",
      images: [
        "Screenshot-2026-02-24-084259-removebg-preview-699d88309214a.png",
        "Screenshot-2026-02-24-084814-removebg-preview-699d883096d1a.png",
        "Screenshot-2026-02-24-084251-removebg-preview-699d883098ecb.png"
      ]
    },
    // Portfolio - EN
    {
      id: 51,
      titre: "Portfolio",
      description: `This portfolio project was designed to professionally showcase my achievements, skills, and background in web and mobile development.\nClear presentation of my projects with descriptions, technologies, and roles.\n”About” section with my educational and professional background.\nResponsive interface adapted to mobile and desktop screens.\nClean, structured, and easily maintainable code.`,
      technologie: "PHP, Symfony, MySQL, HTML",
      githublink: null,
      image: "WhatsApp-Image-2025-05-06-at-23-21-58-adb28b27-6823e160ef57b.jpg",
      locale: "en",
      creatdat: "2026-02-12 12:14:00",
      images: [
        "Screenshot-2026-02-24-084259-removebg-preview-699d88309214a.png",
        "Screenshot-2026-02-24-084814-removebg-preview-699d883096d1a.png",
        "Screenshot-2026-02-24-084251-removebg-preview-699d883098ecb.png"
      ]
    },
    // Portfolio - IT
    {
      id: 52,
      titre: "Portfolio",
      description: `Questo progetto di portfolio è stato progettato per presentare in modo professionale le mie realizzazioni, competenze e percorso nel campo dello sviluppo web e mobile.\nPresentazione chiara dei miei progetti con descrizioni, tecnologie e ruoli.\nSezione “Chi sono” con il mio percorso formativo e professionale.\nInterfaccia responsive adattata a schermi mobili e desktop.\nCodice pulito, strutturato e facilmente manutenibile.`,
      technologie: "PHP, Symfony, MySQL, HTML",
      githublink: null,
      image: "WhatsApp-Image-2025-05-06-at-23-21-58-adb28b27-6823e160ef57b.jpg",
      locale: "it",
      creatdat: "2026-02-12 12:14:00",
      images: [
        "Screenshot-2026-02-24-084259-removebg-preview-699d88309214a.png",
        "Screenshot-2026-02-24-084814-removebg-preview-699d883096d1a.png",
        "Screenshot-2026-02-24-084251-removebg-preview-699d883098ecb.png"
      ]
    },
    {
      id: 7,
      titre: 'University News Management Application',
      description: 'A full-stack web application designed to centralize academic news, exam results, retake schedules, and announcements within a university environment.\r\nCore Functionalities\r\nRole-based login (Student / Professor / Admin)\r\nView news sorted by date\r\nSearch by keyword\r\nFilter by category (Exams, Events, Results, Retake Sessions)\r\nAdd to favorites\r\nReal-time notifications\r\nAdmin content management & scheduled publication',
      technologie: 'React.js • Spring Boot • MySQL • REST API',
      githublink: null,
      image: 'abstract/project-api.svg',
      locale: 'en',
      creatdat: '2026-02-24 15:01:00',
      images: []
    },
    {
      id: 8,
      titre: 'Application de Gestion des Actualités Universitaires',
      description: 'Une application web full-stack conçue pour centraliser les actualités académiques, les résultats d"examens, les sessions de rattrapage et les annonces au sein d"un environnement universitaire.\r\nFonctionnalités principales\r\nConnexion basée sur les rôles (Étudiant / Professeur / Administrateur)\r\nConsultation des actualités triées par date\r\nRecherche par mot-clé\r\nFiltrage par catégorie (Examens, Événements, Résultats, Sessions de rattrapage)\r\nAjout aux favoris\r\nNotifications en temps réel\r\nGestion du contenu par l"administrateur et planification de publication',
      technologie: 'React.js • Spring Boot • MySQL • API REST',
      githublink: null,
      image: 'abstract/project-api.svg',
      locale: 'fr',
      creatdat: '2026-02-24 15:06:00',
      images: []
    },
    {
      id: 9,
      titre: 'Applicazione di Gestione delle Notizie Universitarie',
      description: 'Un"applicazione web full-stack progettata per centralizzare le notizie accademiche, i risultati degli esami, le sessioni di recupero e gli annunci all"interno di un ambiente universitario.\r\n-->Funzionalità principali\r\nAccesso basato sui ruoli (Studente / Professore / Amministratore)\r\nVisualizzazione delle notizie ordinate per data\r\nRicerca per parola chiave\r\nFiltro per categoria (Esami, Eventi, Risultati, Sessioni di recupero)\r\nAggiunta ai preferiti\r\nNotifiche in tempo reale\r\nGestione dei contenuti da parte dell"amministratore e pubblicazione programmata',
      technologie: 'React.js • Spring Boot • MySQL • API REST',
      githublink: null,
      image: 'abstract/project-api.svg',
      locale: 'it',
      creatdat: '2026-02-24 15:11:00',
      images: []
    },
    {
      id: 10,
      titre: 'CondiDrive – Transport Booking Mobile Application',
      description: 'CondiDrive is a role-based mobile application that connects drivers and clients through a centralized transport booking platform. It allows users to publish transport offers or requests and reserve services based on location and vehicle type.\r\n\r\nCore Functionalities\r\n\r\nRole-based authentication (Driver / Client)\r\n\r\nPublication system (post transport offers or requests)\r\n\r\nAdvanced search with geolocation\r\n\r\nFiltering by governorate and vehicle type\r\n\r\nSmart reservation form with automatic driver data retrieval\r\n\r\nBooking history management\r\n\r\nDynamic profile interface',
      technologie: 'Flutter • Firebase Authentication • Cloud Firestore • Google Maps API',
      githublink: null,
      image: 'abstract/project-mobile.svg',
      locale: 'en',
      creatdat: '2026-02-24 15:14:00',
      images: []
    },
    {
      id: 11,
      titre: 'CondiDrive – Application Mobile de Réservation de Transport',
      description: 'CondiDrive est une application mobile basée sur un système de rôles qui connecte les chauffeurs et les clients via une plateforme centralisée de réservation de transport. Elle permet aux utilisateurs de publier des offres ou des demandes de transport et de réserver des services en fonction de la localisation et du type de véhicule.\r\nFonctionnalités principales\r\n\r\nAuthentification basée sur les rôles (Chauffeur / Client)\r\n\r\nSystème de publication (offres ou demandes de transport)\r\n\r\nRecherche avancée avec géolocalisation\r\n\r\nFiltrage par gouvernorat et type de véhicule\r\n\r\nFormulaire de réservation intelligent avec récupération automatique des données du chauffeur\r\n\r\n*Gestion de l"historique des réservations\r\n\r\nInterface de profil dynamique selon le rôle',
      technologie: 'Flutter • Firebase Authentication • Cloud Firestore • Google Maps API',
      githublink: null,
      image: 'abstract/project-mobile.svg',
      locale: 'fr',
      creatdat: '2026-02-24 15:16:00',
      images: []
    },
    {
      id: 12,
      titre: 'CondiDrive – Applicazione Mobile per la Prenotazione di Trasporti',
      description: 'CondiDrive è un"applicazione mobile basata su un sistema di ruoli che collega autisti e clienti attraverso una piattaforma centralizzata di prenotazione dei trasporti.\r\nL"applicazione consente agli utenti di pubblicare offerte o richieste di trasporto e di prenotare servizi in base alla posizione geografica e al tipo di veicolo.\r\nFunzionalità principali\r\n\r\nAutenticazione basata sui ruoli (Autista / Cliente)\r\n\r\nSistema di pubblicazione di offerte e richieste di trasporto\r\n\r\nRicerca avanzata con geolocalizzazione\r\n\r\nFiltro per governatorato e categoria di veicolo\r\n\r\nModulo di prenotazione intelligente con recupero automatico dei dati dell"autista\r\n\r\nGestione dello storico delle prenotazioni\r\n\r\nInterfaccia profilo dinamica in base al ruolo dell"utente',
      technologie: 'Flutter • Firebase Authentication • Cloud Firestore • Google Maps API',
      githublink: null,
      image: 'abstract/project-mobile.svg',
      locale: 'it',
      creatdat: '2026-02-24 15:18:00',
      images: []
    }
  ];

  skills = [
    // Frontend skills
    { id: 10, nom: 'HTML', level: 'Expert', image: 'fab fa-html5', locale: 'fr', is_ai: false, categorie: 'frontend' },
    { id: 11, nom: 'HTML', level: 'Expert', image: 'fab fa-html5', locale: 'en', is_ai: false, categorie: 'frontend' },
    { id: 12, nom: 'HTML', level: 'Expert', image: 'fab fa-html5', locale: 'it', is_ai: false, categorie: 'frontend' },
    { id: 13, nom: 'CSS', level: 'Expert', image: 'fab fa-css3-alt', locale: 'fr', is_ai: false, categorie: 'frontend' },
    { id: 14, nom: 'CSS', level: 'Expert', image: 'fab fa-css3-alt', locale: 'it', is_ai: false, categorie: 'frontend' },
    { id: 15, nom: 'CSS', level: 'Expert', image: 'fab fa-css3-alt', locale: 'en', is_ai: false, categorie: 'frontend' },
    { id: 53, nom: 'Flutter', level: 'Avancé', image: 'fas fa-mobile-alt', locale: 'it', is_ai: false, categorie: 'frontend' },

    // Backend skills
    { id: 16, nom: 'PHP', level: 'Expert', image: 'fab fa-php', locale: 'fr', is_ai: false, categorie: 'backend' },
    { id: 17, nom: 'PHP', level: 'Expert', image: 'fab fa-php', locale: 'en', is_ai: false, categorie: 'backend' },
    { id: 18, nom: 'PHP', level: 'Expert', image: 'fab fa-php', locale: 'it', is_ai: false, categorie: 'backend' },
    { id: 19, nom: 'python', level: 'Avancé', image: 'fab fa-python', locale: 'fr', is_ai: false, categorie: 'backend' },
    { id: 20, nom: 'python', level: 'Avancé', image: 'fab fa-python', locale: 'en', is_ai: false, categorie: 'backend' },
    { id: 21, nom: 'python', level: 'Avancé', image: 'fab fa-python', locale: 'it', is_ai: false, categorie: 'backend' },
    { id: 36, nom: 'Django', level: 'Avancé', image: 'fab fa-python', locale: 'fr', is_ai: false, categorie: 'backend' },
    { id: 37, nom: 'Django', level: 'Avancé', image: 'fab fa-python', locale: 'en', is_ai: false, categorie: 'backend' },
    { id: 38, nom: 'Django', level: 'Avancé', image: 'fab fa-python', locale: 'it', is_ai: false, categorie: 'backend' },
    { id: 45, nom: 'Symfony', level: 'Expert', image: 'fab fa-symfony', locale: 'fr', is_ai: false, categorie: 'backend' },
    { id: 46, nom: 'Symfony', level: 'Expert', image: 'fab fa-symfony', locale: 'en', is_ai: false, categorie: 'backend' },
    { id: 47, nom: 'Symfony', level: 'Expert', image: 'fab fa-symfony', locale: 'it', is_ai: false, categorie: 'backend' },
    { id: 48, nom: 'Spring Boot', level: 'Avancé', image: 'fas fa-leaf', locale: 'fr', is_ai: false, categorie: 'backend' },
    { id: 49, nom: 'Spring Boot', level: 'Avancé', image: 'fas fa-leaf', locale: 'it', is_ai: false, categorie: 'backend' },
    { id: 50, nom: 'Spring Boot', level: 'Avancé', image: 'fas fa-leaf', locale: 'en', is_ai: false, categorie: 'backend' },

    // Frameworks/Libraries
    { id: 27, nom: 'Angular', level: 'Avancé', image: 'fab fa-angular', locale: 'fr', is_ai: false, categorie: 'frontend' },
    { id: 28, nom: 'Angular', level: 'Avancé', image: 'fab fa-angular', locale: 'en', is_ai: false, categorie: 'frontend' },
    { id: 29, nom: 'Angular', level: 'Avancé', image: 'fab fa-angular', locale: 'it', is_ai: false, categorie: 'frontend' },
    { id: 32, nom: 'React.js', level: 'Avancé', image: 'fab fa-react', locale: 'fr', is_ai: false, categorie: 'frontend' },
    { id: 33, nom: 'React.js', level: 'Avancé', image: 'fab fa-react', locale: 'en', is_ai: false, categorie: 'frontend' },
    { id: 34, nom: 'React.js', level: 'Avancé', image: 'fab fa-react', locale: 'it', is_ai: false, categorie: 'frontend' },
    { id: 51, nom: 'Flutter', level: 'Avancé', image: 'fas fa-mobile-alt', locale: 'fr', is_ai: false, categorie: 'frontend' },
    { id: 52, nom: 'Flutter', level: 'Avancé', image: 'fas fa-mobile-alt', locale: 'en', is_ai: false, categorie: 'frontend' },

    // AI/Data Science skills
    { id: 39, nom: 'Flask', level: 'Avancé', image: 'fas fa-flask', locale: 'fr', is_ai: true, categorie: 'data_db' },
    { id: 40, nom: 'Flask', level: 'Avancé', image: 'fas fa-flask', locale: 'en', is_ai: true, categorie: 'data_db' },
    { id: 41, nom: 'Flask', level: 'Avancé', image: 'fas fa-flask', locale: 'it', is_ai: true, categorie: 'data_db' },
    { id: 54, nom: 'PyTorch', level: 'Avancé', image: 'fas fa-brain', locale: 'fr', is_ai: true, categorie: 'data_db' },
    { id: 55, nom: 'PyTorch', level: 'Avancé', image: 'fas fa-brain', locale: 'en', is_ai: true, categorie: 'data_db' },
    { id: 56, nom: 'PyTorch', level: 'Avancé', image: 'fas fa-brain', locale: 'it', is_ai: true, categorie: 'data_db' },
    { id: 57, nom: 'Scikit-learn', level: 'Avancé', image: 'fas fa-microchip', locale: 'fr', is_ai: true, categorie: 'data_db' },
    { id: 58, nom: 'Scikit-learn', level: 'Avancé', image: 'fas fa-microchip', locale: 'en', is_ai: true, categorie: 'data_db' },
    { id: 59, nom: 'Scikit-learn', level: 'Avancé', image: 'fas fa-microchip', locale: 'it', is_ai: true, categorie: 'data_db' },

    // Databases
    { id: 60, nom: 'MongoDB', level: 'Avancé', image: 'fas fa-database', locale: 'fr', is_ai: false, categorie: 'data_db' },
    { id: 61, nom: 'MongoDB', level: 'Avancé', image: 'fas fa-database', locale: 'en', is_ai: false, categorie: 'data_db' },
    { id: 62, nom: 'MongoDB', level: 'Avancé', image: 'fas fa-database', locale: 'it', is_ai: false, categorie: 'data_db' },
    { id: 63, nom: 'MySQL', level: 'Expert', image: 'fas fa-database', locale: 'fr', is_ai: false, categorie: 'data_db' },
    { id: 64, nom: 'MySQL', level: 'Expert', image: 'fas fa-database', locale: 'it', is_ai: false, categorie: 'data_db' },
    { id: 65, nom: 'MySQL', level: 'Expert', image: 'fas fa-database', locale: 'en', is_ai: false, categorie: 'data_db' },
    { id: 66, nom: 'PostgreSQL', level: 'Avancé', image: 'fas fa-database', locale: 'fr', is_ai: false, categorie: 'data_db' },
    { id: 67, nom: 'PostgreSQL', level: 'Avancé', image: 'fas fa-database', locale: 'en', is_ai: false, categorie: 'data_db' },
    { id: 68, nom: 'PostgreSQL', level: 'Avancé', image: 'fas fa-database', locale: 'it', is_ai: false, categorie: 'data_db' }
  ];

  contactMessages = [
    {
      id: 1,
      fullname: 'yosra ben rajab',
      email: 'yosrabenraaj@gmail.com',
      phone: '54827651',
      subject: 'yuooj',
      message: ',,;,,;ryds',
      creatdat: '2025-05-12 23:49:47'
    },
    {
      id: 2,
      fullname: 'ghofranne',
      email: 'ghofranne@gmail.com',
      phone: '1478596',
      subject: 'jfhuiyg',
      message: 'yossra yossra',
      creatdat: '2025-05-13 00:22:26'
    },
    {
      id: 3,
      fullname: 'ghofranne',
      email: 'ghofranne@gmail.com',
      phone: '1478596',
      subject: 'jfhuiyg',
      message: 'azertyuijop',
      creatdat: '2025-05-14 13:19:54'
    },
    {
      id: 4,
      fullname: 'ghofranne',
      email: 'ghofranne@gmail.com',
      phone: '1478596',
      subject: 'jfhuiyg',
      message: 'serrrrrrrrt',
      creatdat: '2025-05-14 13:24:20'
    },
    {
      id: 5,
      fullname: '<wxc v',
      email: 'yosrabenrajab@gmail.com',
      phone: 'hhhhhhhhhhhhhh',
      subject: 'df',
      message: 'dvcbbbbbbb',
      creatdat: '2025-11-03 08:33:28'
    },
    {
      id: 6,
      fullname: 'ben rajab yosra',
      email: 'yosrabenrajab@gmail.com',
      phone: '+21656307045',
      subject: 'jfhuiyg',
      message: 'dtyrrrrrrrrrrrrt',
      creatdat: '2026-02-24 15:31:43'
    },
    {
      id: 7,
      fullname: 'ben rajab yosra',
      email: 'yosrabenrajab@gmail.com',
      phone: '+21656307045',
      subject: 'unnnnnnnnnnnnnnn',
      message: 'dfgrvthyjuk',
      creatdat: '2026-02-24 15:44:16'
    },
    {
      id: 8,
      fullname: 'ben rajab yosra',
      email: 'akkra@gmail.com',
      phone: '+21656307045',
      subject: 'unnnnnnnnnnnnnnn',
      message: 'ytttttttttttttttttttr',
      creatdat: '2026-02-24 15:44:50'
    }
  ];

  // Optional: testimonial data if needed
  testimonials: any[] = []; // Empty array as per database structure

  getPersonalInfo() {
    return this.personalInfo;
  }

  getEducation() {
    return this.education;
  }

  getExperience() {
    return this.experience;
  }

  getProjects() {
    return this.projects;
  }

  getContactMessages() {
    return this.contactMessages;
  }

  getSkills() {
    return this.skills;
  }

  getTestimonials() {
    return this.testimonials;
  }

  // Helper methods to filter by locale
  getPersonalInfoByLocale(locale: string) {
    return this.personalInfo.filter(info => info.locale === locale);
  }

  getEducationByLocale(locale: string) {
    return this.education.filter(edu => edu.locale === locale);
  }

  getExperienceByLocale(locale: string) {
    return this.experience.filter(exp => exp.locale === locale);
  }

  getProjectsByLocale(locale: string) {
    return this.projects.filter(project =>
      project.locale === locale
    );
  }

  getSkillsByLocale(locale: string) {
    return this.skills.filter(skill => skill.locale === locale);
  }

  getSkillsByCategory(category: string, locale: string) {
    return this.skills.filter(skill =>
      skill.categorie === category && skill.locale === locale
    );
  }

  // Helper method to get project with its images
  getProjectWithImages(projectId: number) {
    return this.projects.find(project => project.id === projectId);
  }
}