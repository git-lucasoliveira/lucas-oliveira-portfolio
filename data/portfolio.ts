// Portfolio data structure
export interface Project {
  id: string
  title: string
  description: {
    pt: string
    en: string
  }
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  image?: string
  featured: boolean
  highlight?: boolean
  isPrivate?: boolean
}

export interface Experience {
  id: string
  title: {
    pt: string
    en: string
  }
  company: string
  period: {
    start: string
    end: string | 'present'
  }
  description: {
    pt: string[]
    en: string[]
  }
  type: 'work' | 'education'
}

export interface Skill {
  name: string
  category: 'backend' | 'database' | 'cloud' | 'tools' | 'other'
  level?: number // 1-5
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialUrl?: string
}

// Portfolio Data
export const skills: Skill[] = [
  // Backend
  { name: 'Java', category: 'backend', level: 5 },
  { name: 'Spring Boot', category: 'backend', level: 5 },
  { name: 'API REST', category: 'backend', level: 5 },
  { name: 'Spring Security', category: 'backend', level: 4 },
  { name: 'JWT', category: 'backend', level: 4 },
  { name: 'Quarkus', category: 'backend', level: 3 },
  { name: 'Spring Cloud', category: 'backend', level: 3 },
  { name: 'OAuth2', category: 'backend', level: 4 },
  { name: 'Mensageria (Kafka/RabbitMQ)', category: 'backend', level: 3 },

  // Database
  { name: 'SQL Server', category: 'database', level: 5 },
  { name: 'MySQL', category: 'database', level: 4 },
  { name: 'PostgreSQL', category: 'database', level: 4 },
  { name: 'JPA/Hibernate', category: 'database', level: 4 },
  { name: 'NoSQL (Firestore)', category: 'database', level: 4 },
  { name: 'MongoDB', category: 'database', level: 3 },
  { name: 'PL/SQL', category: 'database', level: 3 },

  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', level: 4 },
  { name: 'Docker', category: 'cloud', level: 4 },
  { name: 'Kubernetes', category: 'cloud', level: 3 },
  { name: 'Linux', category: 'cloud', level: 3 },
  { name: 'CI/CD', category: 'cloud', level: 3 },

  // Tools
  { name: 'Git/GitHub', category: 'tools', level: 5 },
  { name: 'JUnit/Mockito', category: 'tools', level: 4 },
  { name: 'Maven', category: 'tools', level: 4 },
  { name: 'Swagger/OpenAPI', category: 'tools', level: 4 },

  // Other
  { name: 'SOLID / Clean Arch', category: 'other', level: 4 },
  { name: 'DDD / CQRS', category: 'other', level: 3 },
  { name: 'Metodologias Ágeis', category: 'other', level: 4 },
  { name: 'Python', category: 'other', level: 3 },
  { name: 'JavaScript', category: 'other', level: 3 },
  { name: 'HTML/CSS', category: 'other', level: 3 },
]

export const projects: Project[] = [
  {
    id: 'project-0',
    title: 'StarSuite',
    description: {
      pt: 'Plataforma interna multi-tenant de operações de crédito consignado, com 11 módulos que substituíram processos manuais por software. Inclui validação documental assistida por IA (Google Gemini), engine financeira própria em BigDecimal com Newton-Raphson e versionada para reprodutibilidade, cálculo de margem com extrato auditável, Clean Architecture por módulo, PostgreSQL com migrations versionadas em Flyway, RBAC, trilha de auditoria completa e integrações resilientes. Deploy containerizado na AWS (EC2/ECR) via CI/CD com GitHub Actions.',
      en: 'Multi-tenant internal platform for payroll-deducted credit operations, with 11 modules that replaced manual processes with software. Includes AI-assisted document validation (Google Gemini), an in-house financial engine built on BigDecimal with a Newton-Raphson solver and versioned for reproducibility, margin calculation with an auditable breakdown, Clean Architecture per module, PostgreSQL with versioned Flyway migrations, RBAC, a full audit trail and resilient integrations. Containerized deployment on AWS (EC2/ECR) via CI/CD with GitHub Actions.',
    },
    technologies: ['Java 21', 'Spring Boot 3.5', 'PostgreSQL', 'Flyway', 'Google Gemini', 'Resilience4j', 'Apache POI', 'PDFBox', 'Docker', 'AWS', 'GitHub Actions'],
    featured: true,
    highlight: true,
    isPrivate: true,
  },
  {
    id: 'project-2',
    title: 'RH System - Open Source',
    description: {
      pt: 'Projeto desenvolvido para demonstrar arquitetura Enterprise e padrões de segurança com Spring Security. Baseado em desafios comuns de sistemas de RH corporativos.',
      en: 'This project was developed to demonstrate Enterprise architecture and security standards using Spring Security. It\'s based on common challenges faced by corporate HR systems.',
    },
    technologies: ['Java', 'Spring Security', 'JWT', 'JPA', 'Bean Validation', 'jsPDF'],
    githubUrl: 'https://github.com/git-lucasoliveira/onboarding-manager',
    featured: true,
  },
]

export const experiences: Experience[] = [
  {
    id: 'exp-0',
    title: {
      pt: 'Analista de Sistemas Jr',
      en: 'Jr Systems Analyst',
    },
    company: 'Starcard',
    period: {
      start: 'Abr 2026',
      end: 'present',
    },
    description: {
      pt: [
        'Criação do StarSuite, plataforma interna multi-tenant de operações de crédito consignado, hoje com 11 módulos — sigo como principal desenvolvedor à medida que o projeto cresceu e passou a envolver outros desenvolvedores.',
        'Automação da validação documental de propostas com IA (Google Gemini): 2.800+ propostas processadas e cerca de 700 horas de operação devolvidas em 4 meses — o que levava ~15 minutos por proposta passou a levar segundos.',
        'Engine financeira própria para o Demonstrativo de Evolução da Dívida, em BigDecimal com Newton-Raphson e versionada para reprodutibilidade: o ciclo de saldo devedor, geração e anexação caiu de ~20 minutos manuais para segundos, e o reprocessamento agendado re-executa 3.000+ demonstrativos em 3 horas.',
        'Substituição do cálculo de margem em planilha manual (~10 minutos por cliente e sujeito a erro) por cálculo automatizado em menos de 1 minuto, com extrato auditável das regras aplicadas por convênio.',
        'Clean Architecture por módulo, PostgreSQL com migrations versionadas em Flyway, controle de acesso por perfil (RBAC), trilha de auditoria e integrações resilientes (circuit breaker, bulkhead, outbox com reconciliação).',
      ],
      en: [
        'Created StarSuite, a multi-tenant internal platform for payroll-deducted credit operations, today with 11 modules — I remain its main developer as the project grew to involve other engineers.',
        'Automated document validation for credit applications using AI (Google Gemini): 2,800+ applications processed and around 700 hours of manual work removed in 4 months — what took ~15 minutes per application now takes seconds.',
        'Built an in-house financial engine for debt-evolution statements on BigDecimal with a Newton-Raphson solver, versioned for reproducibility: the balance to generation to attachment cycle went from ~20 manual minutes to seconds, and scheduled reprocessing re-runs 3,000+ statements in 3 hours.',
        'Replaced manual spreadsheet-based margin calculation (~10 minutes per client and error-prone) with an automated calculation under 1 minute, including an auditable breakdown of the rules applied per agreement.',
        'Clean Architecture per module, PostgreSQL with versioned Flyway migrations, role-based access control (RBAC), audit trail and resilient integrations (circuit breaker, bulkhead, outbox with reconciliation).',
      ],
    },
    type: 'work',
  },
  {
    id: 'exp-1',
    title: {
      pt: 'Assistente de TI (Desenvolvimento Backend)',
      en: 'IT Assistant (Backend Development)',
    },
    company: 'Starcard',
    period: {
      start: 'Jun 2025',
      end: 'Mar 2026',
    },
    description: {
      pt: [
        'Desenvolvimento por conta própria da primeira versão do StarPeople (Java e Spring Boot), sistema interno para automatizar o onboarding — primeiro projeto de software na empresa e o que motivou a transição de suporte para desenvolvimento.',
        'Deploy do sistema oficial de chamados corporativos (GLPI) em produção, 100% containerizado com Docker em ambiente Linux na AWS (EC2, ECR, RDS).',
        'Automação de fluxos de dados entre RH e TI com scripts Python e Power Automate, removendo repasses manuais recorrentes entre as áreas.',
        'Apoio à modelagem e manutenção dos bancos de dados corporativos (SQL Server).',
      ],
      en: [
        'Independently built the first version of StarPeople (Java and Spring Boot), an internal system to automate onboarding — my first software project at the company and what drove my transition from support to development.',
        'Deployed the official corporate ticketing system (GLPI) to production, fully containerized with Docker on Linux over AWS (EC2, ECR, RDS).',
        'Automated data flows between HR and IT with Python scripts and Power Automate, removing recurring manual handoffs between the teams.',
        'Supported modeling and maintenance of corporate databases (SQL Server).',
      ],
    },
    type: 'work',
  },
  {
    id: 'exp-2',
    title: {
      pt: 'Estagiário de TI',
      en: 'IT Intern',
    },
    company: 'Personalcob',
    period: {
      start: 'Out 2023',
      end: 'Dez 2024',
    },
    description: {
      pt: [
        'Suporte técnico N1/N2 a usuários internos, com diagnóstico e correção de falhas em sistemas operacionais e aplicações.',
        'Configuração e manutenção da infraestrutura de rede e dos ambientes de trabalho.',
        'Análise de informações e extração de relatórios em apoio aos sistemas de gestão.',
      ],
      en: [
        'N1/N2 technical support for internal users, diagnosing and fixing issues in operating systems and applications.',
        'Configuration and maintenance of network infrastructure and workstations.',
        'Data analysis and report extraction in support of management systems.',
      ],
    },
    type: 'work',
  },
  {
    id: 'edu-1',
    title: {
      pt: 'Pós-graduação Lato Sensu em Arquitetura de Software',
      en: 'Lato Sensu Postgraduate in Software Architecture',
    },
    company: 'FIAP',
    period: {
      start: 'Fev 2026',
      end: 'Dez 2026',
    },
    description: {
      pt: [
        'Arquitetura: Microsserviços, Clean Architecture, SOLID, Design Patterns, DDD, CQRS e Event Storming',
        'Stack & Qualidade: Java, Spring Boot, Spring Cloud, Quarkus, TDD e testes unitários/integração',
        'Dados & Mensageria: SQL, NoSQL (MongoDB/Cassandra), Kafka e RabbitMQ',
        'DevOps & Segurança: Docker, Kubernetes, CI/CD, Serverless, AWS/Azure, Spring Security, OAuth2 e JWT',
      ],
      en: [
        'Architecture: Microservices, Clean Architecture, SOLID, Design Patterns, DDD, CQRS and Event Storming',
        'Stack & Quality: Java, Spring Boot, Spring Cloud, Quarkus, TDD and unit/integration testing',
        'Data & Messaging: SQL, NoSQL (MongoDB/Cassandra), Kafka and RabbitMQ',
        'DevOps & Security: Docker, Kubernetes, CI/CD, Serverless, AWS/Azure, Spring Security, OAuth2 and JWT',
      ],
    },
    type: 'education',
  },
  {
    id: 'edu-2',
    title: {
      pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      en: 'Associate Degree in Systems Analysis and Development',
    },
    company: 'UNIP',
    period: {
      start: 'Jan 2023',
      end: 'Jan 2025',
    },
    description: {
      pt: [
        'Engenharia de Software e POO: Foco em Programação Orientada a Objetos, Análise de Sistemas e Design de Software',
        'Banco de Dados: Modelagem de dados e SQL',
        'Gestão e Projetos: Gerenciamento de Projetos de Software e Metodologias Ágeis',
      ],
      en: [
        'Software Engineering and OOP: Focus on Object-Oriented Programming, Systems Analysis and Software Design',
        'Databases: Data modeling and SQL',
        'Management and Projects: Software Project Management and Agile Methodologies',
      ],
    },
    type: 'education',
  },
  {
    id: 'edu-3',
    title: {
      pt: 'Cursos Complementares: Especialização Backend',
      en: 'Complementary Courses: Backend Specialization',
    },
    company: 'Alura',
    period: {
      start: 'Nov 2025',
      end: 'Jun 2026',
    },
    description: {
      pt: [
        'Carreira Backend Java com Spring Boot, JPA/Hibernate, Spring Security e APIs REST',
        'Formação Engenharia de Software com foco em Arquitetura, Design de Sistemas e Testes',
      ],
      en: [
        'Backend Java Career with Spring Boot, JPA/Hibernate, Spring Security and REST APIs',
        'Software Engineering Training with focus on Architecture, Systems Design and Testing',
      ],
    },
    type: 'education',
  },
]

export const certifications: Certification[] = [
  {
    id: 'cert-aws-ccp',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2026',
    credentialUrl: 'https://www.credly.com/badges/16ad678b-05b7-46e8-8fc8-a5fbca319edf',
  },
]

export const socialLinks = {
  github: 'https://github.com/git-lucasoliveira',
  linkedin: 'https://linkedin.com/in/lucasoliveiraamorim',
  email: 'lucas.oliveiraa120505@gmail.com',
  location: 'Barueri, São Paulo, Brasil',
}
