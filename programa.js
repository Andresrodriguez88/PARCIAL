var map = L.map('map').setView([4.687281514777458, -74.0747551782181], 13);  // Coordenadas actualizadas

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 100,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function loadPolygon() {
    let myData = await fetch('Andes.geojson');
    let myPolygon = await myData.json();

    L.geoJSON(myPolygon, {
        style: {
            color: 'black',
            fillColor: 'green',
            fillOpacity: 0.52,
            weight: 0.5,
            opacity: 0.9,
        }
    }).addTo(map);
}
loadPolygon();

async function loadPoint() {
    let myData2 = await fetch('arboles_andes.geojson');
    let myPoint = await myData2.json();

    L.geoJSON(myPoint, {
        style: {
            color: 'black',
            fillColor: 'green',
            fillOpacity: 0.52,
            weight: 0.5,
            opacity: 0.9,
        }
    }).addTo(map);
}   
loadPoint();

let btnTrees = document.getElementById('btnTrees');
btnTrees.addEventListener('click', () => alert("hola"));



