document.write(`
  <div class="footer">
    <p>&copy; <span id="current-year"></span> Tomas Svoboda</p>
  </div>
  <script>
    document.getElementById('current-year').textContent = new Date().getFullYear();
  </script>
`);
