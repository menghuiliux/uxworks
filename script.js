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


// tabs

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const panels = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            buttons.forEach(btn => btn.classList.remove('active'));
            panels.forEach(panel => panel.classList.remove('active'));

            // Add active class to the clicked button and corresponding panel
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});