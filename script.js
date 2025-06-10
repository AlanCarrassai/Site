  const iconPaths = [
    "assets/Grafismos_ícone 1 em preto.svg",
    "assets/Grafismos_ícone 2 em preto.svg",
    "assets/Grafismos_ícone 3 em preto.svg",
    "assets/Grafismos_ícone 4 em preto.svg",
    "assets/Grafismos_ícone 5 em preto.svg"
  ];

  const iconCount = 15;
  const minDistance = 20; // distância mínima entre ícones em porcentagem (mais = mais espaçados)
  const positions = [];
  const container = document.getElementById("floatingIcons");

  function isFarEnough(newTop, newLeft) {
    for (const [top, left] of positions) {
      const dx = newLeft - left;
      const dy = newTop - top;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < minDistance) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < iconCount; i++) {
    let top, left, attempts = 0;
    do {
      top = Math.random() * 160;
      left = Math.random() * 120;
      attempts++;
    } while (!isFarEnough(top, left) && attempts < 100);

    positions.push([top, left]);

    const img = document.createElement("img");
    const icon = iconPaths[i % iconPaths.length];
    const rot = Math.floor(Math.random() * 45);

    img.src = icon;
    img.alt = `Ícone ${i + 1}`;
    img.style.top = `${top}%`;
    img.style.left = `${left}%`;
    img.style.setProperty('--rot', `${rot}deg`);
    container.appendChild(img);
  }