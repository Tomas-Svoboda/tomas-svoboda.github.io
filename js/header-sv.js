document.write(`
  <div class="header">
    <h1>Tomas Svoboda</h1>
    <p>Teknisk testare på Consid Stockholm</p>
  </div>
  <div class="navbar">
    <a href="./">Profil</a>
    <a href="./karriar">Karriär</a>
    <a href="./uppdrag">Projekt</a>
    <a href="./kompetens">Skills</a>
    <a href="./certifieringar">Certifikat</a>
    <a href="./kontakt">Kontakt</a>
    <a id="en-link" href="#"><img src="icons/english.png" alt="English" width="20" height="20"></a>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
        const enLink = document.getElementById('en-link');
        const currentPath = window.location.pathname;

        let newPath = '';
        switch (currentPath) {
            case '/karriar':
                newPath = '/career';
                break;
            case '/uppdrag':
                newPath = '/projects';
                break;
            case '/kompetens':
                newPath = '/skills';
                break;
            case '/certifieringar':
                newPath = '/certifications';
                break;
            case '/kontakt':
                newPath = '/contact';
                break;
            default:
                newPath = '/about';
        }
        enLink.href = newPath;
    });
  </script>
  </div>
`);
