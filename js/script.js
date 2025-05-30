//Vars
const himno = document.getElementById("himno");
const lightweight = document.getElementById("lightweight");
const introPanel = document.getElementById("intro");
const contentPanel = document.getElementById("content");
var map = null;
const coords = [-20.62570000, 166.30550000];

window.addEventListener('load', () => {
    map = L.map('map').setView(coords, 16);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    L.marker(coords).addTo(map)
      .openPopup();
  });
  
function startFiesta(){
    himno.play();
    lightweight.play();
    introPanel.style.display = "none";
    contentPanel.style.display = "block";

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
