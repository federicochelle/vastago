document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".animate-from-left, .animate-from-right, .process-card, .card",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25, // aparece cuando se ve 25%
    },
  );

  animatedElements.forEach((el) => observer.observe(el));
});
