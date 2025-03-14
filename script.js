document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-square");

  cards.forEach((card) => {
      card.addEventListener("click", (event) => {
          // First, close any already expanded card
          document.querySelectorAll(".project-square.expanded").forEach(expandedCard => {
              if (expandedCard !== card) {
                  expandedCard.classList.remove("expanded");
              }
          });

          // Expand the clicked card
          card.classList.add("expanded");
          event.stopPropagation();
      });
  });

  // Close if clicking outside
  document.addEventListener("click", (event) => {
      cards.forEach((card) => {
          if (!card.contains(event.target)) {
              card.classList.remove("expanded");
          }
      });
  });
});
