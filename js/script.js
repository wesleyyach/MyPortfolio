const body = document.body;
const header = document.getElementById("header");
const navMenu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");
const languageSwitch = document.getElementById("languageSwitch");
const languageButtons = document.querySelectorAll(".language-btn");
const navLinks = document.querySelectorAll(".nav-link");
const revealElements = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const displayWhatsapp = document.getElementById("displayWhatsapp");
const metaDescription = document.getElementById("metaDescription");
const metaKeywords = document.getElementById("metaKeywords");

const whatsappNumber = "5581999630813";
const whatsappDisplay = "+55 81 99963-0813";
const themeStorageKey = "wesley-theme";
const languageStorageKey = "wesley-language";

const translations = {
  "pt-BR": {
    metaTitle: "Wesley de Albuquerque | Portfólio",
    metaDescription: "Portfólio de Wesley de Albuquerque",
    metaKeywords: "Wesley de Albuquerque, portfólio, desenvolvedor web, front-end, HTML, CSS, JavaScript",
    logoAria: "Voltar ao início",
    navAria: "Navegação principal",
    themeAria: "Alternar tema",
    menuAria: "Abrir menu",
    languageSwitchAria: "Selecionar idioma",
    themeToLight: "Claro",
    themeToDark: "Escuro",
    heroBadgePortfolio: "Portfólio",
    heroBadgeAvailability: "Disponível para novos projetos",
    navHome: "Início",
    navAbout: "Sobre",
    navServices: "Serviços",
    navProjects: "Projetos",
    navSkills: "Habilidades",
    navContact: "Contato",
    heroEyebrow: "Desenvolvedor Front-end",
    heroText: "Crio sites modernos, responsivos e bem organizados, com foco em visual profissional e boa experiência para quem acessa. Meu objetivo é transformar ideias em páginas que transmitam confiança e valorizem cada projeto.",
    heroBtnProjects: "Ver projetos",
    heroBtnContact: "Falar comigo",
    heroStat1Title: "Visual profissional",
    heroStat1Text: "Layouts pensados para transmitir mais valor e organização.",
    heroStat2Title: "Responsividade",
    heroStat2Text: "Sites que funcionam bem no computador, tablet e celular.",
    heroStat3Title: "Código organizado",
    heroStat3Text: "Estrutura limpa e fácil de manter conforme o projeto cresce.",
    profileTag: "Portfólio profissional",
    profileTitle: "Sites que unem visual moderno e funcionalidade",
    profileText: "Sou focado no desenvolvimento de interfaces front-end com atenção ao visual, à organização e à experiência do usuário. Busco criar sites que não sejam apenas bonitos, mas que também passem profissionalismo e comuniquem bem o objetivo de cada projeto.",
    profileLine1Label: "Especialidade",
    profileLine1Value: "Landing pages e sites institucionais",
    profileLine2Label: "Foco",
    profileLine2Value: "Front-end, responsividade e apresentação",
    profileLine3Label: "Tecnologias",
    profileLine3Value: "HTML, CSS, JavaScript e Python",
    miniGrid1: "Visual moderno",
    miniGrid2: "Boa navegação",
    miniGrid3: "Estrutura clara",
    miniGrid4: "Leitura objetiva",
    aboutEyebrow: "Sobre mim",
    aboutTitle: "Desenvolvedor focado em criar sites modernos e bem apresentados",
    aboutLead: "Sou Wesley de Albuquerque, estudante de ADS e apaixonado por desenvolvimento web, principalmente front-end. Gosto de criar sites que tenham identidade visual forte, boa organização e uma experiência agradável para o usuário.",
    aboutP1: "Comecei desenvolvendo projetos por conta própria e, com o tempo, fui melhorando tanto meu lado técnico quanto meu olhar para design e apresentação. Hoje, busco construir páginas que não só funcionem bem, mas que também passem profissionalismo e valorizem a marca ou o projeto.",
    aboutP2: "Este portfólio foi criado para reunir meus trabalhos, mostrar minha evolução e apresentar de forma clara como eu desenvolvo interfaces modernas, responsivas e pensadas para diferentes tipos de negócio.",
    aboutList1: "Projetos com visual moderno e profissional",
    aboutList2: "Estrutura organizada e fácil de navegar",
    aboutList3: "Layouts responsivos para diferentes telas",
    aboutList4: "Foco em apresentação, clareza e experiência do usuário",
    aboutCard1Title: "Visual bem trabalhado",
    aboutCard1Text: "Interfaces com atenção a cores, espaçamento e hierarquia visual.",
    aboutCard2Title: "Experiência fluida",
    aboutCard2Text: "Seções organizadas para facilitar a navegação e a leitura.",
    aboutCard3Title: "Desenvolvimento com foco",
    aboutCard3Text: "Cada projeto é pensado para comunicar melhor o objetivo do cliente.",
    aboutCard4Title: "Fácil de adaptar",
    aboutCard4Text: "Estrutura simples de editar, atualizar e expandir.",
    servicesEyebrow: "Serviços",
    servicesTitle: "Tipos de site que eu desenvolvo",
    service1Title: "Landing Pages",
    service1Text: "Páginas criadas para apresentar um serviço, produto ou negócio de forma clara, atrativa e direta. O foco é chamar atenção, gerar contato e valorizar a apresentação da marca.",
    service1Item1: "Estrutura focada em conversão",
    service1Item2: "Design responsivo",
    service1Item3: "Experiência rápida e objetiva",
    service2Title: "Sites Institucionais",
    service2Text: "Sites para empresas e profissionais que precisam mostrar seus serviços, passar mais confiança e fortalecer sua presença online com uma estrutura profissional.",
    service2Item1: "Apresentação de serviços",
    service2Item2: "Fortalecimento de autoridade",
    service2Item3: "Visual alinhado com posicionamento",
    service3Title: "Blog",
    service3Text: "Estruturas voltadas para publicação de conteúdos, notícias ou artigos, com organização pensada para facilitar a leitura e manter o site atualizado.",
    service3Item1: "Publicação de artigos e notícias",
    service3Item2: "Melhoria de visibilidade no Google",
    service3Item3: "Organização de conteúdo por categorias",
    service4Title: "Loja Virtual",
    service4Text: "Sites voltados para venda online, com apresentação de produtos, organização do catálogo e experiência simples para o cliente navegar e comprar.",
    service4Item1: "Catálogo de produtos",
    service4Item2: "Integração com pagamentos",
    service4Item3: "Layout pensado para conversão",
    service5Title: "Manutenção de Site",
    service5Text: "Serviço para corrigir erros, atualizar conteúdos, melhorar partes visuais e manter o site funcionando bem no dia a dia.",
    service5Item1: "Correção de erros e bugs",
    service5Item2: "Atualizações e ajustes visuais",
    service5Item3: "Otimização de desempenho e segurança",
    service6Title: "Interfaces Front-end",
    service6Text: "Desenvolvimento de interfaces modernas, organizadas e responsivas, com foco em boa aparência, usabilidade e código bem estruturado.",
    service6Item1: "HTML semântico",
    service6Item2: "CSS moderno",
    service6Item3: "Interatividade com JavaScript",
    projectsEyebrow: "Projetos",
    projectsTitle: "Alguns dos sites que já desenvolvi",
    projectsLead: "Aqui estão alguns projetos que mostram meu estilo de desenvolvimento, meu cuidado com o visual e minha forma de organizar cada interface.",
    project1Tag: "Landing Page",
    project1Title: "Studio Beauty",
    project1Text: "Landing page desenvolvida para um salão de beleza, com foco em identidade visual elegante, apresentação estratégica dos serviços e fortalecimento da presença digital da marca.",
    project2Tag: "Site Institucional",
    project2Title: "Nactel Construções",
    project2Text: "Site institucional criado para transmitir credibilidade, apresentar os serviços da empresa com clareza e reforçar uma imagem sólida no segmento da construção civil.",
    project3Tag: "Portfólio Profissional",
    project3Title: "Wesley | Portfólio",
    project3Text: "Portfólio criado para apresentar meus projetos, habilidades e estilo de desenvolvimento em uma interface moderna, direta e profissional.",
    project4Tag: "Landing Page",
    project4Title: "Odonto Prime",
    project4Text: "Landing page desenvolvida para uma clínica odontológica, com foco em confiança, apresentação dos serviços e incentivo ao contato e agendamento de pacientes.",
    project5Tag: "Landing Page",
    project5Title: "Lidiane Barreto",
    project5Text: "Landing page criada para uma terapeuta, com comunicação acolhedora, visual leve e estrutura pensada para valorizar os atendimentos e fortalecer a conexão com o público.",
    project6Tag: "Landing Page",
    project6Title: "Brasa Nobre",
    project6Text: "Site desenvolvido para um restaurante com proposta visual premium, navegação fluida e estrutura pensada para destacar cardápio, ambiente e reservas via WhatsApp.",
    project7Tag: "Dashboard",
    project7Title: "Fin Vault",
    project7Text: "Dashboard financeiro interativo com Flask, JavaScript e visual responsivo para acompanhamento de carteira e indicadores de mercado.",
    projectViewSite: "Ver site",
    skillsEyebrow: "Habilidades",
    skillsTitle: "Tecnologias com as quais trabalho",
    skill1Label: "HTML5",
    skill2Label: "JavaScript",
    skill3Label: "CSS Moderno",
    skill4Label: "Python",
    chip1: "HTML5",
    chip2: "CSS3",
    chip3: "JavaScript",
    chip4: "Python",
    chip5: "React",
    chip6: "TypeScript",
    chip7: "UI&UX",
    chip8: "Acessibilidade",
    chip9: "Git",
    chip10: "Vercel",
    chip11: "Landing Pages",
    chip12: "Sites corporativos",
    processEyebrow: "Processo",
    processTitle: "Como eu desenvolvo cada projeto",
    processLead: "Do planejamento até a entrega, busco seguir uma estrutura simples e organizada para criar sites com mais clareza, identidade e qualidade visual.",
    process1Title: "Briefing",
    process1Text: "Entendimento do objetivo do projeto, do público e da proposta visual que o site precisa transmitir.",
    process2Title: "Estrutura",
    process2Text: "Planejamento das seções, organização das informações e definição da base visual da página.",
    process3Title: "Desenvolvimento",
    process3Text: "Construção do site com foco em responsividade, organização do código e boa experiência de navegação.",
    process4Title: "Entrega",
    process4Text: "Revisão final, ajustes visuais e preparação do projeto para publicação.",
    contactEyebrow: "Contato",
    contactTitle: "Vamos tirar sua ideia do papel e transformar em um site profissional",
    contactWhatsapp: "WhatsApp",
    contactLinkedin: "LinkedIn",
    contactGithub: "GitHub",
    formNameLabel: "Seu nome",
    formNamePlaceholder: "Digite seu nome",
    formEmailLabel: "Seu e-mail",
    formEmailPlaceholder: "Digite seu e-mail",
    formSubjectLabel: "Assunto",
    formSubjectPlaceholder: "Ex: Projeto de site profissional",
    formMessageLabel: "Mensagem",
    formMessagePlaceholder: "Conte um pouco sobre o que você precisa",
    formSubmit: "Enviar mensagem",
    formError: "Preencha todos os campos antes de continuar.",
    formOpening: "Abrindo WhatsApp com a mensagem pronta.",
    whatsappIntro: "Olá, Wesley! Me chamo {name} e vim pelo seu portfólio.",
    whatsappEmail: "E-mail: {email}",
    whatsappSubject: "Assunto: {subject}",
    whatsappMessageLabel: "Mensagem:",
    footerText: `© <span id="currentYear"></span> Wesley de Albuquerque. Todos os direitos reservados.`,
    backToTop: "Voltar ao topo"
  },
  en: {
    metaTitle: "Wesley de Albuquerque | Portfolio",
    metaDescription: "Portfolio of Wesley de Albuquerque",
    metaKeywords: "Wesley de Albuquerque, portfolio, web developer, front-end, HTML, CSS, JavaScript",
    logoAria: "Back to home",
    navAria: "Main navigation",
    themeAria: "Toggle theme",
    menuAria: "Open menu",
    languageSwitchAria: "Select language",
    themeToLight: "Light",
    themeToDark: "Dark",
    heroBadgePortfolio: "Portfolio",
    heroBadgeAvailability: "Available for new projects",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",
    heroEyebrow: "Web Developer",
    heroText: "I create elegant, responsive digital experiences built for results. This website was designed to communicate authority, organization and a strong professional presence online.",
    heroBtnProjects: "View projects",
    heroBtnContact: "Get in touch",
    heroStat1Title: "Strategic design",
    heroStat1Text: "Solid visuals focused on clarity and conversion.",
    heroStat2Title: "Responsive experience",
    heroStat2Text: "Layout adjusted for desktop, tablet and mobile.",
    heroStat3Title: "Organized code",
    heroStat3Text: "Clean, scalable structure that is easy to maintain.",
    profileTag: "Premium presentation",
    profileTitle: "Digital presence with sophistication and trust",
    profileText: "I develop modern, organized and professional interfaces designed to highlight projects, strengthen digital presence and convey credibility from the very first visit.",
    profileLine1Label: "Specialty",
    profileLine1Value: "Modern websites and landing pages",
    profileLine2Label: "Focus",
    profileLine2Value: "Performance, interface and credibility",
    profileLine3Label: "Technical base",
    profileLine3Value: "HTML, CSS and JavaScript",
    miniGrid1: "Refined visuals",
    miniGrid2: "Intuitive navigation",
    miniGrid3: "High visual standard",
    miniGrid4: "Objective reading",
    aboutEyebrow: "About me",
    aboutTitle: "A professional presence that is clear and memorable",
    aboutLead: "This space was created to present my journey, highlight my skills and show, with objectivity, how I turn ideas into well-built solutions.",
    aboutP1: "I am Wesley de Albuquerque, a professional focused on building modern, elegant and functional digital solutions. A good portfolio is not only for showing projects. It also communicates vision, aesthetic care, organization and trust.",
    aboutP2: "With an approach focused on visual quality and user experience, this website was designed to position my work for clients, recruiters and partners.",
    aboutList1: "Premium layout with a corporate look",
    aboutList2: "Ideal structure for presenting services and projects",
    aboutList3: "Responsive design with comfortable reading on any screen",
    aboutList4: "Visual elements that reinforce value and credibility",
    aboutCard1Title: "Refined interface",
    aboutCard1Text: "Well-spaced components, strong typography and a premium visual style.",
    aboutCard2Title: "Smooth experience",
    aboutCard2Text: "Simple navigation, objective sections and smooth transitions.",
    aboutCard3Title: "Strategic structure",
    aboutCard3Text: "Organized content that highlights your professional value proposition.",
    aboutCard4Title: "Ready to customize",
    aboutCard4Text: "You can easily change text, links, projects and contact details.",
    servicesEyebrow: "Services",
    servicesTitle: "Service highlights",
    service1Title: "Landing Pages",
    service1Text: "Pages designed to present offers, generate leads and highlight your brand identity with strong visual impact.",
    service1Item1: "Conversion-focused structure",
    service1Item2: "Responsive design",
    service1Item3: "Fast and objective experience",
    service2Title: "Corporate Websites",
    service2Text: "Solutions for companies, professionals and brands that need a strong, organized and trustworthy digital presence.",
    service2Item1: "Service presentation",
    service2Item2: "Authority building",
    service2Item3: "Visual style aligned with positioning",
    service3Title: "Blog",
    service3Text: "Ideal structures for publishing content, strengthening your brand and improving digital presence with strategy and consistency.",
    service3Item1: "Articles and news publishing",
    service3Item2: "Better visibility on Google",
    service3Item3: "Content organization by category",
    service4Title: "Online Store",
    service4Text: "Solutions to sell products online with practicality, security and a simple shopping experience for customers.",
    service4Item1: "Product catalog",
    service4Item2: "Payment integrations",
    service4Item3: "Conversion-oriented layout",
    service5Title: "Website Maintenance",
    service5Text: "A service focused on keeping your website updated, secure and working well every day, preventing failures and improving performance.",
    service5Item1: "Bug fixes and error corrections",
    service5Item2: "Updates and visual adjustments",
    service5Item3: "Performance and security optimization",
    service6Title: "Front-end Interfaces",
    service6Text: "Building clean, modern and efficient interfaces with priority on usability, visual consistency and code organization.",
    service6Item1: "Semantic HTML",
    service6Item2: "Modern CSS",
    service6Item3: "JavaScript interactivity",
    projectsEyebrow: "Featured projects",
    projectsTitle: "Real projects and portfolio projects",
    projectsLead: "A selection of work created with a focus on aesthetics, clarity, responsiveness and a professional digital presence.",
    project1Tag: "Landing Page",
    project1Title: "Studio Beauty",
    project1Text: "Landing page developed for a beauty salon, focused on elegant visual identity, strategic presentation of services and stronger brand presence online.",
    project2Tag: "Corporate Website",
    project2Title: "Nactel Construções",
    project2Text: "Corporate website created to communicate credibility, present the company's services clearly and reinforce a solid image in the construction segment.",
    project3Tag: "Professional Portfolio",
    project3Title: "Wesley | Portfolio",
    project3Text: "Authorial portfolio developed to present projects, skills and visual identity through a modern, objective interface designed to communicate professionalism.",
    project4Tag: "Landing Page",
    project4Title: "Odonto Prime",
    project4Text: "Landing page developed for a dental clinic, focused on trust, service presentation and encouraging patient contact and appointments.",
    project5Tag: "Landing Page",
    project5Title: "Lidiane Barreto",
    project5Text: "Landing page created for a therapist, with welcoming communication, a light visual style and a structure designed to value the services and strengthen audience connection.",
    project6Tag: "Landing Page",
    project6Title: "Brasa Nobre",
    project6Text: "Website developed for a restaurant with a premium visual proposal, smooth navigation and a structure designed to highlight the menu, atmosphere and reservations via WhatsApp.",
    project7Tag: "Dashboard",
    project7Title: "Fin Vault",
    project7Text: "Interactive financial dashboard built with Flask, JavaScript and a responsive interface for tracking portfolios and market indicators.",
    projectViewSite: "View site",
    skillsEyebrow: "Skills",
    skillsTitle: "Technologies and capabilities",
    skill1Label: "HTML5",
    skill2Label: "JavaScript",
    skill3Label: "Modern CSS",
    skill4Label: "Python",
    chip1: "HTML5",
    chip2: "CSS3",
    chip3: "JavaScript",
    chip4: "Python",
    chip5: "React",
    chip6: "TypeScript",
    chip7: "UI/UX",
    chip8: "Accessibility",
    chip9: "Git",
    chip10: "Vercel",
    chip11: "Landing Pages",
    chip12: "Corporate Websites",
    processEyebrow: "Process",
    processTitle: "A clear and professional workflow",
    processLead: "Here is the website project process.",
    process1Title: "Briefing",
    process1Text: "Understanding the goal, audience, visual language and expected result.",
    process2Title: "Structure",
    process2Text: "Organization of sections, content hierarchy and the project's aesthetic direction.",
    process3Title: "Development",
    process3Text: "Interface building with clean code, attention to detail and strong performance.",
    process4Title: "Delivery",
    process4Text: "Final refinements, visual review and preparation for online publishing.",
    contactEyebrow: "Contact",
    contactTitle: "Let's turn your digital presence into something memorable",
    contactWhatsapp: "WhatsApp",
    contactLinkedin: "LinkedIn",
    contactGithub: "GitHub",
    formNameLabel: "Your name",
    formNamePlaceholder: "Enter your name",
    formEmailLabel: "Your email",
    formEmailPlaceholder: "Enter your email",
    formSubjectLabel: "Subject",
    formSubjectPlaceholder: "Example: Professional website project",
    formMessageLabel: "Message",
    formMessagePlaceholder: "Tell me a bit about what you need",
    formSubmit: "Send message",
    formError: "Fill in all fields before continuing.",
    formOpening: "Opening WhatsApp with your message ready.",
    whatsappIntro: "Hello, Wesley! My name is {name}.",
    whatsappEmail: "Email: {email}",
    whatsappSubject: "Subject: {subject}",
    whatsappMessageLabel: "Message:",
    footerText: "© <span id=\"currentYear\"></span> Wesley de Albuquerque. All rights reserved.",
    backToTop: "Back to top"
  }
};

let currentLanguage = localStorage.getItem(languageStorageKey) || "pt-BR";
if (!translations[currentLanguage]) {
  currentLanguage = "pt-BR";
}

function t(key, replacements = {}) {
  const dictionary = translations[currentLanguage] || translations["pt-BR"];
  let value = dictionary[key] || translations["pt-BR"][key] || "";

  Object.entries(replacements).forEach(([placeholder, replacement]) => {
    value = value.replaceAll(`{${placeholder}}`, replacement);
  });

  return value;
}

function refreshCurrentYear() {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function updateThemeToggleLabel() {
  if (!themeToggle) return;

  const isLight = body.getAttribute("data-theme") === "light";
  themeToggle.textContent = isLight ? t("themeToDark") : t("themeToLight");
}

function applyTranslations(language) {
  if (!translations[language]) return;

  currentLanguage = language;
  localStorage.setItem(languageStorageKey, language);
  document.documentElement.lang = language;
  document.title = t("metaTitle");

  if (metaDescription) {
    metaDescription.setAttribute("content", t("metaDescription"));
  }

  if (metaKeywords) {
    metaKeywords.setAttribute("content", t("metaKeywords"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.getAttribute("data-i18n-html");
    element.innerHTML = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.setAttribute("placeholder", t(key));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria");
    element.setAttribute("aria-label", t(key));
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });

  refreshCurrentYear();
  updateThemeToggleLabel();
}

if (displayWhatsapp) {
  displayWhatsapp.textContent = whatsappDisplay;
}

const storedTheme = localStorage.getItem(themeStorageKey);
if (themeToggle) {
  if (storedTheme === "light") {
    body.setAttribute("data-theme", "light");
  }

  themeToggle.addEventListener("click", () => {
    const isLight = body.getAttribute("data-theme") === "light";

    if (isLight) {
      body.removeAttribute("data-theme");
      localStorage.setItem(themeStorageKey, "dark");
    } else {
      body.setAttribute("data-theme", "light");
      localStorage.setItem(themeStorageKey, "light");
    }

    updateThemeToggleLabel();
  });
}

if (languageSwitch) {
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyTranslations(button.dataset.lang);
    });
  });
}

applyTranslations(currentLanguage);

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu && menuToggle) {
      navMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  });
}

if (revealElements.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

const sections = document.querySelectorAll("main section[id]");
if (sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const currentId = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
        });
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-10% 0px -35% 0px",
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const matches = currentFilter === "all" || card.dataset.category === currentFilter;
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const subject = document.getElementById("subject")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !subject || !message) {
      if (formNote) {
        formNote.textContent = t("formError");
      }
      return;
    }

    const whatsappText = [
      t("whatsappIntro", { name }),
      t("whatsappEmail", { email }),
      t("whatsappSubject", { subject }),
      "",
      t("whatsappMessageLabel"),
      message,
    ].join("\n");

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    if (formNote) {
      formNote.textContent = t("formOpening");
    }

    window.open(whatsappLink, "_blank");
    contactForm.reset();
  });
}
