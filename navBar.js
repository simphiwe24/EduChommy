fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = data;
    const scripts = tempDiv.querySelectorAll("script");
    scripts.forEach(oldScript => {
      const newScript = document.createElement("script");
      newScript.text = oldScript.text;
      document.body.appendChild(newScript);
    });
  });
