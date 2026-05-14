// Simple parallax-like effect for hero text
(function () {
  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const height = window.innerHeight;
    const progress = Math.min(Math.max(scrollY / height, 0), 1);
    if (heroContent) {
      heroContent.style.transform = `translateY(${progress * -30}px)`;
      heroContent.style.opacity = String(1 - progress * 0.4);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
})();

// ImageWithFallback behavior
(function () {
  const imgs = document.querySelectorAll("img[data-fallback]");
  imgs.forEach((img) => {
    img.addEventListener("error", () => {
      const fallback = img.getAttribute("data-fallback");
      if (fallback && img.src !== fallback) {
        img.src = fallback;
      }
    });
  });
})();
