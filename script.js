document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".button");
  const fadeElements = document.querySelectorAll(".fade-in");
  const body = document.body;

  btn.addEventListener("click", () => {
    btn.innerText = "Downloading...";
    btn.style.background = "#ffaa00";

    setTimeout(() => {
      btn.innerText = "Successful";
      btn.style.background = "#28a745";
    }, 2000);
  });

  const onScroll = () => {
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });

    if (window.scrollY > window.innerHeight / 2) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const ratio = scrollY / maxScroll;

  const red = Math.floor(240 + (255 - 240) * ratio);
  const green = Math.floor(248 + (192 - 248) * ratio);
  const blue = Math.floor(255 - (255 - 203) * ratio);
  const bgColor = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = bgColor;

  const buttonBox = document.getElementById("buttonBox");
  if (buttonBox) {
    buttonBox.style.backgroundColor = bgColor;
  }
});