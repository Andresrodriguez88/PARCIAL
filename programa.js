// Nombres del barrio y localidad
const barrio = "ANDES";
const localidad = "SUBA";

// Asignar los valores al HTML
document.getElementById("barrioNombre").textContent = barrio;
document.getElementById("localidadNombre").textContent = localidad;

// Crear el mapa asegurando que el `div` existe
var map = L.map('map').setView([4.687281514777458, -74.0747551782181], 13);

// Agregar capa base de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Función para cargar el polígono del barrio
async function loadPolygon() {
    try {
        let response = await fetch('Andes.geojson');
        let myPolygon = await response.json();

        L.geoJSON(myPolygon, {
            style: {
                color: 'black',
                fillColor: 'green',
                fillOpacity: 0.52,
                weight: 0.5,
                opacity: 0.9,
            }
        }).addTo(map);
    } catch (error) {
        console.error("Error cargando el polígono:", error);
    }
}

// Cargar el polígono
loadPolygon();
