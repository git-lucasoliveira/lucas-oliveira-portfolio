// Translations for Portuguese (PT-BR)
export const pt = {
  nav: {
    about: 'Sobre',
    skills: 'Habilidades',
    projects: 'Projetos',
    experience: 'Experiência',
    education: 'Formação',
    certifications: 'Certificações',
    contact: 'Contato',
  },
  hero: {
    greeting: 'Olá, eu sou',
    name: 'Lucas de Oliveira Amorim',
    role: 'Desenvolvedor Backend | Java & Spring',
    subtitle: 'Pós-graduando em Arquitetura e Desenvolvimento Java @ FIAP',
    badge: '1x AWS Certified',
    description: 'Construindo soluções escaláveis e performantes',
    cta: {
      contact: 'Entre em Contato',
      downloadCV: 'Download CV',
      viewWork: 'Conheça meu trabalho',
    },
  },
  about: {
    title: 'Sobre Mim',
    paragraphs: [
      'Desenvolvedor Backend com foco no ecossistema Java e Cloud Computing. AWS Certified Cloud Practitioner e pós-graduando em Arquitetura e Desenvolvimento Java pela FIAP, possuo experiência prática na criação de APIs RESTful, automação de processos e conteinerização (Docker/AWS).',
      'Orientado a metodologias ágeis (Scrum, Kanban) e boas práticas (SOLID, Clean Code). Tenho facilidade para integrações entre back-end e front-end e atualmente aprofundo meus estudos acadêmicos em Microsserviços, Quarkus e mensageria (Kafka/RabbitMQ) para agregar valor aos projetos de inovação técnica do time.',
    ],
  },
  skills: {
    title: 'Habilidades Técnicas',
    categories: {
      backend: 'Backend',
      database: 'Banco de Dados',
      cloud: 'Cloud & DevOps',
      tools: 'Ferramentas',
      other: 'Outras',
    },
  },
  projects: {
    title: 'Projetos',
    highlight: 'Projeto em Destaque',
    viewCode: 'Ver Repositório',
    viewDemo: 'Ver Demo',
    technologies: 'Tecnologias',
    categories: {
      production: 'Produção',
      academic: 'Acadêmico · FIAP',
      personal: 'Projeto pessoal',
    },
    privateRepo: {
      label: 'Repositório Privado',
      note: 'Projeto em produção com código proprietário da empresa.',
    },
  },
  experience: {
    title: 'Experiência Profissional',
    present: 'Presente',
    promotion: 'Promoção',
  },
  education: {
    title: 'Formação',
    present: 'Presente',
    certificationsTitle: 'Certificações',
  },
  contact: {
    title: 'Vamos Conversar?',
    subtitle: 'Tem um projeto em mente ou quer compor seu time? Entre em contato.',
    form: {
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada!',
      error: 'Erro ao enviar. Tente novamente.',
    },
    or: 'Canais de Atendimento',
    availability: 'Atualmente disponível para novos desafios como Desenvolvedor Java. Focado em criar soluções backend escaláveis e performantes.',
    copied: 'Copiado!',
    copyEmail: 'Copiar e-mail',
    socialLinks: 'Redes Sociais',
  },
  footer: {
    madeWith: 'Feito com',
    by: 'por',
    rights: 'Todos os direitos reservados.',
  },
}

export type Translations = typeof pt
