// Resume modal
const resumeBtn = document.getElementById("resumeBtn");
const resumeModal = document.getElementById("resumeModal");
const closeModal = document.getElementById("closeModal");

resumeBtn.addEventListener("click", () => {
  resumeModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  resumeModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === resumeModal) {
    resumeModal.style.display = "none";
  }
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");

  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!expanded));
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
});

// Footer email button
function openEmail() {
  window.location.href =
    "mailto:Senay_93@hotmail.com?subject=Subject&body=Hej, jag vill kontakta dig angående...";
}
