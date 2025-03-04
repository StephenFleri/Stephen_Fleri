const container = document.querySelector(".carousel-container");
const slide = document.querySelector(".carousel_slide");
const html = document.querySelector("html");

window.addEventListener("resize", (e) => {
  if (window.innerWidth < 1100) {
    html.style.scrollSnapType = "none";
  } else {
    html.style.scrollSnapType = "y mandatory";
  }
});

window.addEventListener("scroll", (e) => {
  if (window.innerWidth < 1100) return;
  transform(container);
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? null : percentage > 230 ? null : percentage;
  if (percentage) {
    html.style.scrollSnapType = "none";
  } else {
    html.style.scrollSnapType = "y mandatory";
  }
  slide.style.transform = `translate3d(-${percentage}vw, 0, 0)`;
}
