function updateLinkText() {
  var navbar = document.querySelector(".navbar");
  var links = navbar.querySelectorAll("a");
  var screenWidth = window.innerWidth;
  if (screenWidth < 560) {
    links[0].textContent = "Profil";
    links[1].textContent = "Skills";
    links[2].textContent = "Karriär";
    links[3].textContent = "Projekt";
    links[4].textContent = "Certifikat";
    links[5].textContent = "Kontakt";
  } else {
    links[0].textContent = "Om mig";
    links[1].textContent = "Kompetens";
    links[2].textContent = "IT-karriär";
    links[3].textContent = "Konsultuppdrag";
    links[4].textContent = "Certifieringar";
    links[5].textContent = "Kontakt";
  }
}

window.addEventListener("load", updateLinkText);
window.addEventListener("resize", updateLinkText);
