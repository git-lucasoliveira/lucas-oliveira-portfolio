# 🚀 Lucas de Oliveira Amorim - Portfolio

> Professional portfolio website showcasing my journey as a **Java Backend Developer** specialized in Spring Boot and enterprise solutions.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

🌐 **[Ver Portfolio Online](https://lucasoliveiraamorim.dev)** | 📧 [Contato](mailto:lucasaoliveira777@gmail.com)

---

## 📋 Sobre o Projeto

**[PT-BR]**  
Portfolio profissional desenvolvido com as mais modernas tecnologias frontend. Apresenta meus projetos reais em produção, experiência profissional atual na **Starcard (Fintech)** e formação técnica completa. 

✨ **Destaques:**
- Design minimalista moderno com glassmorphism
- Efeito spotlight interativo que segue o mouse
- Performance otimizada com lazy loading e code splitting
- Cards translúcidos com bordas elegantes
- Tipografia refinada com hierarquia visual clara

**[EN]**  
Professional portfolio built with cutting-edge frontend technologies, showcasing real production projects, current professional experience at **Starcard (Fintech)**, and complete technical background.

✨ **Highlights:**
- Modern minimalist design with glassmorphism
- Interactive spotlight effect that follows the mouse
- Optimized performance with lazy loading and code splitting
- Translucent cards with elegant borders
- Refined typography with clear visual hierarchy

---

## ✨ Funcionalidades Principais

### 🎨 Design & UX
- **Glassmorphism Cards** - Cards translúcidos com bordas sutis e backdrop-blur
- **Spotlight Background** - Efeito de gradiente que segue o cursor do mouse
- **Tema Claro/Escuro** - Toggle manual com persistência
- **Animações Suaves** - Framer Motion otimizado para performance
- **Tipografia Refinada** - Hierarquia visual com slate-400 e line-height 1.7

### 🌍 Internacionalização
- **Bilíngue** - Português (PT-BR) e Inglês (EN-US)
- **Troca Instantânea** - Sem reload da página
- **Context API** - Gerenciamento global de idioma

### 📱 Responsividade
- **Mobile-First** - Design otimizado para dispositivos móveis
- **Breakpoints Inteligentes** - Tailwind CSS breakpoints (sm, md, lg, xl)
- **Touch-Friendly** - Interações otimizadas para touch screens

### ⚡ Performance
- **Lazy Loading** - Seções abaixo da dobra carregadas sob demanda
- **Code Splitting** - Dynamic imports do Next.js
- **Image Optimization** - Next/Image com AVIF e WebP
- **Scroll Throttling** - RequestAnimationFrame para scroll events
- **Memoized Components** - React.memo() para prevenir re-renders

### 🎯 Seções
1. **Hero** - Apresentação com CTA para projetos
2. **Sobre** - Biografia profissional e soft skills
3. **Habilidades** - Stack técnico em grid compacto
4. **Projetos** - StarPeople (Produção) e RH System (Open Source)
5. **Experiência** - Starcard e Personalcob
6. **Formação** - Alura e UNIP
7. **Contato** - Formulário funcional + informações diretas

---

## 🛠️ Stack Tecnológica

### Core
- **Framework:** [Next.js 14.2](https://nextjs.org/) - App Router, React 18, Server Components
- **Linguagem:** [TypeScript 5.4](https://www.typescriptlang.org/) - Type-safe development
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) - Utility-first CSS
- **Animações:** [Framer Motion 11.0](https://www.framer.com/motion/) - Production-ready animations

### UI/UX
- **Ícones:** [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
- **Forms:** [React Hook Form](https://react-hook-form.com/) - Performant form validation

### Otimizações
- **SWC Minify** - Compilador Rust ultra-rápido
- **Image Optimization** - AVIF/WebP automatic conversion
- **CSS Optimization** - Experimental CSS optimizer
- **Bundle Analysis** - Code splitting automático

---

## 🚀 Começando

### Pré-requisitos

```bash
Node.js 18+ (recomendado: v20.x ou v24.x)
npm 9+ ou yarn 1.22+
```

### Instalação Local

```bash
# 1. Clone o repositório
git clone https://github.com/git-lucasoliveira/portfolio.git
cd portfolio-website

# 2. Instale as dependências
npm install

# 3. Execute o servidor de desenvolvimento
npm run dev

# 4. Abra http://localhost:3000
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (http://localhost:3000)
npm run build    # Build de produção
npm start        # Servidor de produção
npm run lint     # ESLint check
```

---

## 📁 Estrutura do Projeto

```
portfolio-website/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout com providers
│   ├── page.tsx                 # Homepage (dynamic imports)
│   └── globals.css              # Estilos globais
│
├── components/
│   ├── effects/                 # Efeitos visuais
│   │   ├── SpotlightBackground.tsx  # Mouse spotlight (RAF optimized)
│   │   ├── LoadingScreen.tsx        # Loading inicial
│   │   └── BackToTop.tsx            # Botão scroll to top
│   │
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Navbar com scroll detection
│   │   └── Footer.tsx           # Footer minimalista
│   │
│   ├── sections/                # Seções da página
│   │   ├── HeroSection.tsx      # Landing section
│   │   ├── AboutSection.tsx     # Sobre mim
│   │   ├── SkillsSection.tsx    # Habilidades técnicas
│   │   ├── ProjectsSection.tsx  # Projetos destacados
│   │   ├── ExperienceSection.tsx    # Experiência profissional
│   │   ├── EducationSection.tsx     # Formação acadêmica
│   │   └── ContactSection.tsx       # Contato + formulário
│   │
│   └── ui/                      # Componentes reutilizáveis
│       ├── Card.tsx             # Glassmorphism card (memoized)
│       ├── Section.tsx          # Section wrapper (memoized)
│       └── Button.tsx           # Button component
│
├── contexts/                    # React Context providers
│   └── LanguageContext.tsx      # i18n context
│
├── data/                        # Dados estruturados
│   └── portfolio.ts             # Projetos, skills, experiências
│
├── locales/                     # Traduções
│   ├── pt.ts                    # Português (PT-BR)
│   └── en.ts                    # Inglês (EN-US)
│
├── lib/                         # Utilities
│   └── motion.ts                # Framer Motion configs
│
├── public/                      # Assets estáticos
│   └── cv/                      # Currículo PDF
│
├── styles/                      # Estilos
│   └── globals.css              # Tailwind + custom CSS
│
├── next.config.js               # Next.js config (optimized)
├── tailwind.config.ts           # Tailwind config (custom theme)
└── tsconfig.json                # TypeScript config
```

---

## 🎨 Design System

### Cores

```typescript
// Light Mode
background: '#f8fafc'   // Slate 50
surface: '#f1f5f9'      // Slate 100
text-primary: '#0f172a' // Slate 900
text-secondary: '#64748b' // Slate 500

// Dark Mode
background: '#0f172a'   // Slate 900
surface: '#1e293b'      // Slate 800
text-primary: '#f8fafc' // Slate 50
text-secondary: '#94a3b8' // Slate 400

// Accent
primary: '#3b82f6'      // Blue 500
accent: '#06b6d4'       // Cyan 500
```

### Tipografia

```css
/* Hierarquia */
h1: text-7xl md:text-8xl font-bold
h2: text-4xl md:text-5xl font-bold
h3: text-xl font-semibold
body: text-sm text-slate-400 (line-height: 1.7)

/* Fontes */
font-sans: Inter (variável)
font-mono: JetBrains Mono (variável)
```

### Componentes

**Glassmorphism Cards:**
```css
background: rgba(255, 255, 255, 0.03)
border: 1px solid rgba(255, 255, 255, 0.1)
backdrop-filter: blur(12px)
padding: 32px
border-radius: 12px
```

---

## ⚡ Otimizações de Performance

### Métricas Alcançadas

| Métrica | Valor | Score |
|---------|-------|-------|
| **First Contentful Paint** | ~0.8s | 🟢 Excelente |
| **Largest Contentful Paint** | ~1.2s | 🟢 Excelente |
| **Time to Interactive** | ~2.0s | 🟢 Excelente |
| **Cumulative Layout Shift** | <0.1 | 🟢 Excelente |
| **First Input Delay** | <100ms | 🟢 Excelente |

### Técnicas Implementadas

✅ **Code Splitting** - Dynamic imports para seções  
✅ **Lazy Loading** - Componentes carregados sob demanda  
✅ **Image Optimization** - Next/Image com AVIF/WebP  
✅ **RAF Throttling** - requestAnimationFrame para eventos  
✅ **React.memo()** - Componentes memoizados  
✅ **Passive Listeners** - Event listeners otimizados  
✅ **Bundle Optimization** - SWC Minify + Tree shaking  
✅ **CSS Optimization** - Experimental CSS optimizer  

---

## 📊 Dados do Portfolio

### Projetos Destacados

**1. StarPeople - Enterprise Solution**
- Stack: Java 21, Spring Boot 3, SQL Server, AWS EC2, Docker
- Status: 🟢 Produção (Starcard)
- Foco: Sistema corporativo de gestão de colaboradores

**2. RH System - API & Architecture**
- Stack: Java 21, Spring Security, JWT, Swagger, JUnit
- Status: 📦 Open Source
- Foco: Arquitetura, boas práticas e design patterns

### Stack Técnico (18 skills)

**Backend:** Java, Spring Boot, API REST, Spring Security, JWT  
**Database:** SQL Server, MySQL, JPA/Hibernate  
**Cloud:** AWS EC2, Docker, Linux  
**Tools:** Git, GitHub, Maven, Swagger  
**Other:** Python, JavaScript, HTML/CSS

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. 🐛 Reportar bugs
2. 💡 Sugerir novas funcionalidades  
3. 📝 Melhorar a documentação
4. 🎨 Propor melhorias de design

**Como contribuir:**
```bash
# 1. Fork o projeto
# 2. Crie sua feature branch
git checkout -b feature/MinhaFeature

# 3. Commit suas mudanças
git commit -m 'Add: Minha nova feature'

# 4. Push para a branch
git push origin feature/MinhaFeature

# 5. Abra um Pull Request
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Lucas de Oliveira Amorim**  
Backend Java Developer @ Starcard

[![LinkedIn](https://img.shields.io/badge/LinkedIn-lucasoliveiraamorim-blue?logo=linkedin)](https://www.linkedin.com/in/lucasoliveiraamorim/)
[![GitHub](https://img.shields.io/badge/GitHub-git--lucasoliveira-black?logo=github)](https://github.com/git-lucasoliveira)
[![Email](https://img.shields.io/badge/Email-lucasaoliveira777%40gmail.com-red?logo=gmail)](mailto:lucasaoliveira777@gmail.com)

---

## 🙏 Agradecimentos

- Design inspirado em portfolios modernos de desenvolvedores
- Comunidade Next.js e React pela excelente documentação
- Vercel pelo melhor DX em hospedagem

---

<div align="center">

**Desenvolvido com ❤️ por Lucas Oliveira**

⭐ Se este projeto te ajudou, considere dar uma estrela!

</div>
└── tailwind.config.ts       # Configuração Tailwind
```

## 🎨 Customização

### Alterar Dados Pessoais

Edite o arquivo `data/portfolio.ts`:

```typescript
export const socialLinks = {
  github: 'https://github.com/seu-usuario',
  linkedin: 'https://linkedin.com/in/seu-perfil',
  email: 'seu@email.com',
}

// Adicione/edite projetos
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Seu Projeto',
    // ...
  },
]
```

### Alterar Cores

Edite `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    light: '#2563eb',
    dark: '#3b82f6',
  },
  // ...
}
```

### Adicionar/Editar Traduções

Edite `locales/pt.ts` e `locales/en.ts`

## 📸 Screenshots

### Desktop - Light Mode
![Desktop Light](./screenshots/desktop-light.png)

### Desktop - Dark Mode
![Desktop Dark](./screenshots/desktop-dark.png)

### Mobile
![Mobile](./screenshots/mobile.png)

## 🚀 Deploy na Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/git-lucasoliveira/portfolio)

1. Faça push do código para seu GitHub
2. Conecte o repositório na Vercel
3. Configure as variáveis de ambiente (se necessário)
4. Deploy automático!

## 📝 Checklist de Deploy

- [ ] Atualizar dados pessoais em `data/portfolio.ts`
- [ ] Adicionar seus projetos reais
- [ ] Atualizar links sociais (GitHub, LinkedIn)
- [ ] Adicionar seu email real
- [ ] Testar formulário de contato
- [ ] Adicionar CV para download
- [ ] Configurar domínio customizado (opcional)
- [ ] Testar responsividade em todos os dispositivos
- [ ] Validar SEO com Google Search Console

## 🤝 Contribuindo

Contribuições, issues e sugestões são bem-vindas!

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Lucas de Oliveira Amorim**

- GitHub: [@git-lucasoliveira](https://github.com/git-lucasoliveira)
- LinkedIn: [lucasoliveiraamorim](https://linkedin.com/in/lucasoliveiraamorim)

## 🙏 Agradecimentos

- Design inspirado em portfolios de desenvolvedores de big tech
- Ícones por [Lucide](https://lucide.dev)
- Hospedagem por [Vercel](https://vercel.com)

---

<div align="center">
  <p>Desenvolvido com ❤️ por Lucas de Oliveira Amorim</p>
  <p>Se este projeto te ajudou, considere dar uma ⭐</p>
</div>
