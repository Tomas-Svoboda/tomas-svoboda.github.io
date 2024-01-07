document.addEventListener('DOMContentLoaded', function () {
  var mainLinks = document.querySelectorAll('.main a');
  mainLinks.forEach(function (link) {
    link.setAttribute('target', '_blank');
  });
});
