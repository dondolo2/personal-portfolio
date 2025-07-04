const roles = [
  "Creative Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "C++ Programmer",
  "React.js Frontend Dev",
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("typewriter-text");

function typeLoop() {
  const currentRole = roles[index];
  const visibleText = currentRole.substring(0, charIndex);
  textElement.textContent = visibleText;

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeLoop, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeLoop, 1000); // Pause after full word
    } else {
      isDeleting = false;
      index = (index + 1) % roles.length;
      setTimeout(typeLoop, 200);
    }
  }
}

typeLoop();

window.addEventListener("scroll", () => {
  const about = document.querySelector(".about-section");
  const position = about.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (position < screenPosition) {
    about.classList.add("reveal");
  }
});
