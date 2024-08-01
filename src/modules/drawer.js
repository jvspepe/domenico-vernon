const drawerToggle = document.querySelector(".drawer-toggle");
const drawerBackdrop = document.querySelector(".drawer-backdrop");
const drawerContent = document.querySelector(".drawer-content");
const drawerLinks = document.querySelectorAll("[data-link]");
const header = document.querySelector(".header");

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
  link.addEventListener("click", handleDrawerToggle)
);

drawerBackdrop.addEventListener("click", (event) => {
  if (!drawerContent.contains(event.target)) {
    handleDrawerToggle();
  }
});
