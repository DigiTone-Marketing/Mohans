document.addEventListener("DOMContentLoaded", () => {
  // Each phrase is an array of words (one word per line)
  const phrases = [
    ["Minor", "Surgery.", "Quicker", "Recovery"],
    ["Less", "Invasive.", "Less", "Expensive"],
    ["Faster", "Healing.", "Better", "Results"]
  ];

  const slider = document.getElementById("text-slider");
  let index = 0;
  const interval = 8000; // 8 seconds per phrase

  function updateText() {
    // Clear current text
    slider.innerHTML = "";

    // Add new words as lines
    phrases[index].forEach(word => {
      const span = document.createElement("span");
      span.textContent = word;
      slider.appendChild(span);
    });

    // Slide-in from left
    slider.style.transform = "translateX(-100%)";
    requestAnimationFrame(() => {
      slider.style.transition = "none";
      slider.style.transform = "translateX(-100%)";
      requestAnimationFrame(() => {
        slider.style.transition = "transform 0.8s ease-in-out";
        slider.style.transform = "translateX(0)";
      });
    });
  }

  function nextPhrase() {
    index = (index + 1) % phrases.length;
    updateText();
  }

  updateText(); // initialize
  setInterval(nextPhrase, interval);
});

