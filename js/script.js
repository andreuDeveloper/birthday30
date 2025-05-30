//Vars
const himno = document.getElementById("himno");
const lightweight = document.getElementById("lightweight");
const introPanel = document.getElementById("intro");
const contentPanel = document.getElementById("content");
const btnStart = document.getElementById("startButton");
const countdown = document.getElementById('countdown');

var map = null;
const coords = [-20.62570000, 166.30550000];

window.addEventListener('load', () => {
    map = L.map('map').setView(coords, 16);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; John Cena'
    }).addTo(map);
  
    L.marker(coords).addTo(map)
      .openPopup();
  });
  
  function startCountdown() {
    let secRemaining = 3;
    const btnStart = document.getElementById("startButton");
  
    btnStart.disabled = true;
    btnStart.textContent = secRemaining;
  
    const interval = setInterval(() => {
      // Aplicar animación
      btnStart.classList.remove("shrinking"); // Reset animación
      void btnStart.offsetWidth;              // Reflow para reiniciar
      btnStart.classList.add("shrinking");
  
      secRemaining--;
  
      if (secRemaining === 0) {
        clearInterval(interval);
        startFiesta();
      } else {
        setTimeout(() => {
          btnStart.textContent = secRemaining;
        }, 50);
      }
    }, 1000);

    btnStart.classList.add("shrinking");
  }

function startFiesta(){
    himno.play();
    lightweight.play();
    introPanel.style.display = "none";
    contentPanel.style.display = "flex";

    if (map) {
        setTimeout(() => {
            map.invalidateSize();
        }, 300)
    }
}

function openMaps(){
  const url = `https://www.google.com/maps/search/?api=1&query=${coords[0]},${coords[1]}`;
  window.open(url, '_blank');
}
