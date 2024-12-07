document.addEventListener("DOMContentLoaded", () => {
    // Load Header and Footer
    const loadComponent = async (id, file) => {
      const element = document.getElementById(id);
      if (element) {
        try {
          const response = await fetch(`components/${file}`);
          if (response.ok) {
            const html = await response.text();
            element.innerHTML = html;
  
            // Initialize menu toggle after loading header
            if (id === "header-placeholder") {
              initializeMenuToggle();
            }
          } else {
            console.error(`Failed to load ${file}:`, response.statusText);
          }
        } catch (error) {
          console.error(`Error loading ${file}:`, error);
        }
      }
    };
  
    // Load header and footer components
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
  
    // Initialize Menu Toggle Functionality
    const initializeMenuToggle = () => {
      const menuToggle = document.getElementById("menu-toggle");
      const navMenu = document.querySelector(".nav-menu");
  
      if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
          navMenu.classList.toggle("active");
          console.log("Menu toggled:", navMenu.classList.contains("active"));
        });
      } else {
        console.error("Menu toggle or nav menu not found");
      }
    };
  });