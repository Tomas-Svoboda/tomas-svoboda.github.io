document.write(`
  <div class="header">
    <h1>Tomas Svoboda</h1>
    <p>Technical Tester at Consid Stockholm</p>
  </div>
  <div class="navbar">
    <a href="./about">Profile</a>
    <a href="./career">Career</a>
    <a href="./projects">Projects</a>
    <a href="./skills">Skills</a>
    <a href="./certifications">Certs</a>
    <a href="./contact">Contact</a>
    <a id="sv-link" href="#"><img src="icons/swedish.png" alt="Svenska" width="20" height="20"></a>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
        const svLink = document.getElementById('sv-link');
        const currentPath = window.location.pathname;

        let newPath = '';
        switch (currentPath) {
            case '/career':
                newPath = '/karriar';
                break;
            case '/projects':
                newPath = '/uppdrag';
                break;
            case '/skills':
                newPath = '/kompetens';
                break;
            case '/certifications':
                newPath = '/certifieringar';
                break;
            case '/contact':
                newPath = '/kontakt';
                break;
            default:
                newPath = '/';
        }
        svLink.href = newPath;
    });
  </script>
`);
