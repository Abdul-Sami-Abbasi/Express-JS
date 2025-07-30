// 12-static-files/public/script.js
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerText = data.message;
  });
