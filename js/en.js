function updateLinkText() {
  var navbar = document.querySelector(".navbar");
  var links = navbar.querySelectorAll("a");
  var screenWidth = window.innerWidth;
  if (screenWidth < 524) {
    links[0].textContent = "About";
    links[1].textContent = "Skills";
    links[2].textContent = "Career";
    links[3].textContent = "Projects";
    links[4].textContent = "Certs";
    links[5].textContent = "Contact";
  }
  else if (screenWidth < 554) {
    links[0].textContent = "About";
    links[1].textContent = "Skills";
    links[2].textContent = "Career";
    links[3].textContent = "Projects";
    links[4].textContent = "Certs";
    links[5].textContent = "Contact";
  } 
  else {
    links[0].textContent = "About Me";
    links[1].textContent = "Skills & Tools";
    links[2].textContent = "IT Career";
    links[3].textContent = "Assignments";
    links[4].textContent = "Certifications";
    links[5].textContent = "Contact";
  }
}

window.addEventListener("load", updateLinkText);
window.addEventListener("resize", updateLinkText);
