function updateLinkText() {
  var navbar = document.querySelector(".navbar");
  var links = navbar.querySelectorAll("a");
  var screenWidth = window.innerWidth;
  if (screenWidth < 571) {
    links[0].textContent = "Profil";
    links[1].textContent = "Karriär";
    links[2].textContent = "Projekt";
    links[3].textContent = "Skills";
    links[4].textContent = "Certifikat";
    links[5].textContent = "Kontakt";
  } else if (screenWidth < 621) {
    links[0].textContent = "Om mig";
    links[1].textContent = "IT-karriär";
    links[2].textContent = "Konsultuppdrag";
    links[3].textContent = "Kompetens";
    links[4].textContent = "Certifieringar";
    links[5].textContent = "Kontakt";
  } else {
    links[0].textContent = "Om mig";
    links[1].textContent = "IT-karriär";
    links[2].textContent = "Konsultuppdrag";
    links[3].textContent = "Kompetens och verktyg";
    links[4].textContent = "Certifieringar";
    links[5].textContent = "Kontakt";
  }
}

window.addEventListener("load", updateLinkText);
window.addEventListener("resize", updateLinkText);
