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
    id: 'project-1',
    title: 'StarPeople',
    description: {
      pt: 'Sistema implantado em produção no Grupo Starcard que centraliza o ciclo de vida de mais de 150 colaboradores. Otimizou em 85% o tempo de processos manuais com geração de relatórios PDF. Possui endpoints RESTful, proteção de dados com JWT Stateless e 80% de cobertura de testes com JUnit/Mockito.',
      en: 'System deployed to production at Starcard Group that centralizes the lifecycle of more than 150 employees. Optimized manual processes time by 85% with PDF report generation. Features RESTful endpoints, data protection with Stateless JWT, and 80% test coverage with JUnit/Mockito.',
    },
    technologies: ['Java', 'Spring Boot', 'SQL Server', 'Spring Security', 'JWT', 'Docker', 'JUnit', 'Mockito'],
    featured: true,
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
      en: 'Junior Systems Analyst',
    },
    company: 'Starcard',
    period: {
      start: 'Abr 2026',
      end: 'present',
    },
    description: {
      pt: [
        'Condução da evolução do sistema StarPeople, projetando novos módulos e integrações para ampliar a cobertura do ciclo de vida de mais de 150 colaboradores.',
        'Administração e otimização da infraestrutura em nuvem AWS (EC2, ECR, RDS, S3) com containers Docker, garantindo disponibilidade e segurança dos ambientes.',
        'Expansão da esteira de automações com Python e Power Automate, eliminando processos manuais entre os times de TI e RH.',
        'Levantamento e análise de requisitos junto às áreas de negócio, traduzindo demandas em soluções técnicas alinhadas a boas práticas de arquitetura.',
      ],
      en: [
        'Driving the evolution of the StarPeople system, designing new modules and integrations to expand lifecycle coverage for 150+ employees.',
        'Administration and optimization of AWS cloud infrastructure (EC2, ECR, RDS, S3) with Docker containers, ensuring environment availability and security.',
        'Expansion of the automation pipeline with Python and Power Automate, eliminating manual processes between IT and HR teams.',
        'Requirements gathering and analysis with business areas, translating demands into technical solutions aligned with architecture best practices.',
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
      end: 'Abr 2026',
    },
    description: {
      pt: [
        'Orquestração do desenvolvimento backend do sistema StarPeople, centralizando o ciclo de vida de mais de 50 colaboradores e garantindo a integridade dos dados.',
        'Automação de tarefas repetitivas com scripts Python e Power Automate, economizando mais de 15 horas mensais operacionais da equipe.',
        'Otimização da infraestrutura em nuvem, reduzindo em 30% a latência do banco de dados Firestore (NoSQL).',
        'Deploy do sistema GLPI 100% containerizado com Docker em ambiente Linux na infraestrutura AWS (EC2, ECR, RDS, S3).',
      ],
      en: [
        'Orchestration of the backend development for the StarPeople system, centralizing the lifecycle of 50+ employees and ensuring data integrity.',
        'Automation of repetitive tasks using Python scripts and Power Automate, saving over 15 hours per month.',
        'Optimization of cloud infrastructure, reducing Firestore (NoSQL) database latency by 30%.',
        'Deployment of the GLPI system 100% containerized with Docker in a Linux environment on AWS infrastructure (EC2, ECR, RDS, S3).',
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
        'Resolução de rotinas de suporte N1/N2, diagnosticando e corrigindo falhas para mais de 30 usuários internos e garantindo 95% de cumprimento do SLA.',
        'Configuração e manutenção da infraestrutura de rede e ambientes de trabalho.',
        'Garantia de 100% de estabilidade tecnológica contínua para um parque de 40 equipamentos.',
      ],
      en: [
        'Resolution of N1/N2 support routines, diagnosing and fixing flaws for over 30 internal users and guaranteeing 95% SLA compliance.',
        'Configuration and maintenance of network infrastructure and work environments.',
        'Ensuring 100% continuous technological stability for a fleet of 40 equipments.',
      ],
    },
    type: 'work',
  },
  {
    id: 'edu-1',
    title: {
      pt: 'Pós-graduação Lato Sensu em Engenharia de Software',
      en: 'Lato Sensu Postgraduate in Software Engineering',
    },
    company: 'FIAP',
    period: {
      start: 'Fev 2026',
      end: 'Jan 2027',
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
  },
]

export const socialLinks = {
  github: 'https://github.com/git-lucasoliveira',
  linkedin: 'https://linkedin.com/in/lucasoliveiraamorim',
  email: 'lucas.oliveiraa120505@gmail.com',
  phone: '+55 11 95314-3462',
  location: 'Barueri, São Paulo, Brasil',
}
