document.write(`
  <div class="footer">
    <p>Tomas Svoboda &copy; <span id="current-year"></span></p>
  </div>
  <script>
    document.getElementById('current-year').textContent = new Date().getFullYear();
  </script>
`);
