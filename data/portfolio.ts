// Portfolio data structure
export interface Project {
  id: string
  title: string
  description: {
    pt: string
    en: string
  }
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  image?: string
  featured: boolean
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

// Portfolio Data
export const skills: Skill[] = [
  // Backend
  { name: 'Java', category: 'backend', level: 5 },
  { name: 'Spring Boot', category: 'backend', level: 5 },
  { name: 'API REST', category: 'backend', level: 5 },
  { name: 'Spring Security', category: 'backend', level: 4 },
  { name: 'JWT', category: 'backend', level: 4 },
  
  // Database
  { name: 'SQL Server', category: 'database', level: 5 },
  { name: 'MySQL', category: 'database', level: 4 },
  { name: 'JPA/Hibernate', category: 'database', level: 4 },
  
  // Cloud & DevOps
  { name: 'AWS EC2', category: 'cloud', level: 4 },
  { name: 'Docker', category: 'cloud', level: 4 },
  { name: 'Linux (Ubuntu)', category: 'cloud', level: 3 },
  
  // Tools
  { name: 'Git', category: 'tools', level: 5 },
  { name: 'GitHub', category: 'tools', level: 5 },
  { name: 'Maven', category: 'tools', level: 4 },
  { name: 'Swagger/OpenAPI', category: 'tools', level: 4 },
  
  // Other
  { name: 'Python', category: 'other', level: 3 },
  { name: 'JavaScript', category: 'other', level: 3 },
  { name: 'HTML/CSS', category: 'other', level: 3 },
]

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'StarPeople - Enterprise Solution',
    description: {
      pt: 'Solução corporativa desenvolvida e implantada em produção na Starcard. O sistema centraliza a gestão de colaboradores e automatiza fluxos do RH, rodando em ambiente Cloud (AWS).',
      en: 'Corporate solution developed and deployed to production at Starcard. The system centralizes employee management and automates HR workflows, running in Cloud environment (AWS).',
    },
    technologies: ['Java 21', 'Spring Boot 3', 'SQL Server', 'AWS EC2', 'Docker'],
    githubUrl: 'https://github.com/git-lucasoliveira/people-manager',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'RH System - API & Architecture',
    description: {
      pt: 'Versão Open Source focada em arquitetura de software e boas práticas. Este projeto demonstra implementação avançada de segurança, documentação com Swagger e padrões de projeto para escalabilidade.',
      en: 'Open Source version focused on software architecture and best practices. This project demonstrates advanced security implementation, Swagger documentation and design patterns for scalability.',
    },
    technologies: ['Java 21', 'Spring Security', 'RBAC/JWT', 'Swagger/OpenAPI', 'JUnit', 'Design Patterns'],
    githubUrl: 'https://github.com/git-lucasoliveira/rh-system',
    featured: true,
  },
]

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: {
      pt: 'Assistente de TI',
      en: 'IT Assistant',
    },
    company: 'Starcard',
    period: {
      start: 'Jun 2025',
      end: 'present',
    },
    description: {
      pt: [
        'Desenvolvimento do sistema StarPeople com Java 21 e Spring Boot 3',
        'Deploy GLPI em AWS EC2 com Docker e Linux',
        'Banco de Dados: Planejamento e estruturação de banco de dados corporativo no SQL Server',
        'Suporte Técnico Nível 2: Resolução de incidentes complexos, manutenção de ativos e segurança da informação',
      ],
      en: [
        'Development of StarPeople system with Java 21 and Spring Boot 3',
        'GLPI deployment on AWS EC2 with Docker and Linux',
        'Database: Planning and structuring corporate database in SQL Server',
        'Level 2 Technical Support: Resolution of complex incidents, asset maintenance and information security',
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
        'Análise de dados e extração de relatórios usando SQL',
        'Manutenção de redes e configuração de ambientes',
        'Diagnóstico Técnico: Resolução de problemas relacionados a sistemas operacionais e aplicativos',
      ],
      en: [
        'Data analysis and report extraction using SQL',
        'Network maintenance and environment configuration',
        'Technical Diagnostics: Resolution of problems related to operating systems and applications',
      ],
    },
    type: 'work',
  },
  {
    id: 'edu-1',
    title: {
      pt: 'Carreira Backend Java',
      en: 'Backend Java Career',
    },
    company: 'Alura',
    period: {
      start: 'Nov 2025',
      end: 'Mai 2026',
    },
    description: {
      pt: [
        'Java 17/21: POO, Collections, Streams',
        'Spring Boot 3, JPA/Hibernate, Spring Security',
        'APIs REST com Swagger e boas práticas',
      ],
      en: [
        'Java 17/21: OOP, Collections, Streams',
        'Spring Boot 3, JPA/Hibernate, Spring Security',
        'REST APIs with Swagger and best practices',
      ],
    },
    type: 'education',
  },
  {
    id: 'edu-2',
    title: {
      pt: 'Formação Engenharia de Software',
      en: 'Software Engineering Training',
    },
    company: 'Alura',
    period: {
      start: 'Jan 2026',
      end: 'Jun 2026',
    },
    description: {
      pt: [
        'Gestão de requisitos',
        'Arquitetura e design de sistemas',
        'Padrões de projeto',
        'Banco de dados',
        'Testes de software',
        'Gestão de projetos',
        'Infraestrutura e deploy',
      ],
      en: [
        'Requirements management',
        'Systems architecture and design',
        'Design patterns',
        'Databases',
        'Software testing',
        'Project management',
        'Infrastructure and deployment',
      ],
    },
    type: 'education',
  },
  {
    id: 'edu-3',
    title: {
      pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      en: 'Associate Degree in Systems Analysis and Development',
    },
    company: 'UNIP',
    period: {
      start: 'Fev 2023',
      end: 'Dez 2024',
    },
    description: {
      pt: [
        'Engenharia de Software e POO: Foco em Programação Orientada a Objetos (Java), Análise de Sistemas e Design de Software',
        'Banco de Dados: Modelagem de dados e SQL',
        'Gestão e Projetos: Gerenciamento de Projetos de Software e Metodologias Ágeis',
      ],
      en: [
        'Software Engineering and OOP: Focus on Object-Oriented Programming (Java), Systems Analysis and Software Design',
        'Databases: Data modeling and SQL',
        'Management and Projects: Software Project Management and Agile Methodologies',
      ],
    },
    type: 'education',
  },
]

export const socialLinks = {
  github: 'https://github.com/git-lucasoliveira',
  linkedin: 'https://linkedin.com/in/lucasoliveiraamorim',
  email: 'lucas.oliveiraa120505@gmail.com',
  phone: '+55 11 95314-3462',
  location: 'São Paulo, Brasil',
}
