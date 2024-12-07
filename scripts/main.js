document.addEventListener("DOMContentLoaded", () => {
    // Load Header and Footer
    const loadComponent = async (id, file) => {
      const element = document.getElementById(id);
      if (element) {
        const response = await fetch(`components/${file}`);
        if (response.ok) {
          const html = await response.text();
          element.innerHTML = html;
        } else {
          console.error(`Failed to load ${file}:`, response.statusText);
        }
      }
    };
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
  
    // Toggle Menu
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });
    }
  });