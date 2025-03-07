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

let btnTrees = document.getElementById('btnTrees');
btnTrees.addEventListener('click', 
    async () => {
        let response = await fetch("Arboles_andes.geojson"); 
        let datos = await response.json();

        // Agregar la capa al mapa
        L.geoJson(
            datos, 
            {
                pointToLayer: (feature, latlong) => {
                    return L.circleMarker(latlong, {
                        radius: 5,
                        fillColor: 'green',
                        weight: 1
                    }); 
                }
            }
        ).addTo(map); // Se asegura que el método se encadene correctamente
    }
)

// manejador de boton distance
/*
let btnTrees = document.getElementById('btnDistance');
btnTrees.addEventListener('click', 
    async () => {
        let response = await fetch("Arboles_andes.geojson"); 
        let datos = await response.json(); 
        //tomar los datos y mapear la llave feature que está en índice 1 ver archivo
        let trees = datos.map((myElement, index) => {
            return {
                id: index + 1,
                coordinates: myElement.geometry.coordinates
            };
        });
    }
);
*/
let btnDistance = document.getElementById('btnDistance');
btnDistance.addEventListener('click', async () => {
    let response = await fetch("Arboles_andes.geojson"); 
    let datos = await response.json(); 

    let trees = datos.features.map((myElement, index) => ({
        id: index + 1,
        coordinates: myElement.geometry.coordinates
    }));

    console.log(trees);

    let distance = [];
    
    trees.forEach(treeA => {
        trees.forEach(treeB => {
            // Calcular la distancia de treeA a cada uno de los treeB
            if (treeA.id !== treeB.id) {
                let dist = turf.distance(
                    turf.point(treeA.coordinates),
                    turf.point(treeB.coordinates)
                );

                distance.push([
                    `Árbol ${treeA.id}`,
                    `Árbol ${treeB.id}`,
                    dist.toFixed(3)  
                ]);
            }
        });
    });

    generatePdf(distance, trees.length); 
});

function generatePdf(distance, totalTrees) {
    let { jsPDF } = window.jspdf;
    let documentPDF = new jsPDF();
    documentPDF.text("REPORTE DE ÁRBOLES BARRIO ANDES", 10, 10);
    documentPDF.text("EL BARRIO ANDES TIENE " + totalTrees, 20, 30);

    if (typeof documentPDF.autoTable !== "function") {
        console.error("No está cargando bien!!");
        return;
    }

    documentPDF.autoTable({
        head: [['Árbol 1', 'Árbol 2', 'Distancia']], 
        body: distance
    });

    documentPDF.save("Andes.pdf");
}

//Manejador boton siniestros 

let btnSiniestros = document.getElementById('btnSiniestros');
btnSiniestros.addEventListener('click', 
    async () => {
        let response = await fetch("siniestros_andes.geojson"); 
        let datos = await response.json();

        // Agregar la capa al mapa
        L.geoJson(
            datos, 
            {
                pointToLayer: (feature, latlong) => {
                    return L.circleMarker(latlong, {
                        radius: 5,
                        fillColor: 'red',
                        weight: 1
                    }); 
                }
            }
        ).addTo(map); // Se asegura que el método se encadene correctamente
    }
)
