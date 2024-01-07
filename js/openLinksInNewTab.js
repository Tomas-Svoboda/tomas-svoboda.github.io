document.addEventListener('DOMContentLoaded', function () {
  var mainLinks = document.querySelectorAll('.main a');
  mainLinks.forEach(function (link) {
    link.setAttribute('target', '_blank');
  });
  link.addEventListener('mouseover', function () {
    link.classList.add('hovered-link');
  });
  link.addEventListener('mouseout', function () {
    link.classList.remove('hovered-link');
  });
});
