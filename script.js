const contactForm = document.querySelector(".contact-form");
const drawer = document.querySelector(".drawer");
const drawerToggle = drawer.querySelector(".drawer-toggle");
const drawerBackdrop = drawer.querySelector(".drawer-backdrop");
const drawerContent = drawer.querySelector(".drawer-content");
const drawerLinks = drawer.querySelectorAll("[data-link]");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

function handleDrawerToggle() {
  const isOpen = drawerContent.dataset.open === "false";

  // Prevent scrolling when open
  document.documentElement.style.overflowY = isOpen ? "hidden" : "";

  // Backdrop
  drawerBackdrop.ariaHidden = !isOpen;
  drawerBackdrop.dataset.open = isOpen;

  // Content
  drawerContent.ariaHidden = !isOpen;
  drawerContent.dataset.open = isOpen;

  // Toggle
  drawerToggle.ariaExpanded = isOpen;
  drawerToggle.ariaLabel = isOpen ? "Fechar Menu" : "Abrir Menu";
  drawerToggle.title = isOpen ? "Fechar Menu" : "Abrir Menu";
  drawerToggle.dataset.open = isOpen;
  drawerToggle.innerHTML = `<svg aria-hidden="true" class="icon"><use class="drawer-toggle-icon" href="/icons/${
    isOpen ? "x" : "menu"
  }.svg#${isOpen ? "x" : "menu"}" /></svg>`;
}

drawerToggle.addEventListener("click", handleDrawerToggle);
drawerLinks.forEach((link) =>
  link.addEventListener("click", handleDrawerToggle),
);
