(() => {
  const highlightNav = () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const match = href.includes(currentPage);
      link.classList.toggle("active", match);
    });
  };

  const initForm = () => {
    const form = document.getElementById("cta-form");
    const toastEl = document.getElementById("cta-toast");
    if (!form || !toastEl) return;
    const toast = window.bootstrap ? new window.bootstrap.Toast(toastEl, { delay: 4000 }) : null;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = form.querySelector('input[name="email"]');
      const email = emailInput?.value.trim() || "";
      if (!email) {
        emailInput?.reportValidity();
        return;
      }
      toast?.show();
      form.reset();
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    highlightNav();
    initForm();
  });
})();
