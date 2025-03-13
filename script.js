document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".project-square");
  
    card.addEventListener("click", (event) => {
      card.classList.add("expanded");
      event.stopPropagation();
    });
  
    document.addEventListener("click", (event) => {
      if (!card.contains(event.target)) {
        card.classList.remove("expanded");
      }
    });
  });
  