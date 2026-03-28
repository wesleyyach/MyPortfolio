const body = document.body;
const header = document.getElementById("header");
const navMenu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");
const navLinks = document.querySelectorAll(".nav-link");
const revealElements = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.getElementById("contactForm");
const currentYear = document.getElementById("currentYear");
const formNote = document.getElementById("formNote");
const displayWhatsapp = document.getElementById("displayWhatsapp");

const whatsappNumber = "5581999630813";
const whatsappDisplay = "+55 81 99963-0813";

if (displayWhatsapp) {
  displayWhatsapp.textContent = whatsappDisplay;
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const storedTheme = localStorage.getItem("wesley-theme");
if (themeToggle) {
  if (storedTheme === "light") {
    body.setAttribute("data-theme", "light");
    themeToggle.textContent = "Escuro";
  } else {
    themeToggle.textContent = "Claro";
  }

  themeToggle.addEventListener("click", () => {
    const isLight = body.getAttribute("data-theme") === "light";

    if (isLight) {
      body.removeAttribute("data-theme");
      localStorage.setItem("wesley-theme", "dark");
      themeToggle.textContent = "Claro";
    } else {
      body.setAttribute("data-theme", "light");
      localStorage.setItem("wesley-theme", "light");
      themeToggle.textContent = "Escuro";
    }
  });
}

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
        formNote.textContent = "Preencha todos os campos antes de continuar.";
      }
      return;
    }

    const whatsappText = [
      `Olá, Wesley! Me chamo ${name}.`,
      `E-mail: ${email}`,
      `Assunto: ${subject}`,
      "",
      "Mensagem:",
      message,
    ].join("\n");

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    if (formNote) {
      formNote.textContent = "Abrindo WhatsApp com a mensagem pronta.";
    }

    window.open(whatsappLink, "_blank");
    contactForm.reset();
  });
}