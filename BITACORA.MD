# Bitácora de Desarrollo del Mapa Interactivo

## 1. Crear Repositorio
- Crear un repositorio en GitHub para gestionar el código.
- Clonar el repositorio en el entorno de desarrollo local.
- Configurar archivos base: `index.html`, `style.css`, `script.js`.

## 2. Crear Mapa
### Solución:
- Utilizar librerías como **Leaflet**, **OpenLayers** o **Mapbox**.
- Se elige **Leaflet** por su simplicidad y compatibilidad con OpenStreetMap.

### Pasos:
- Configurar Leaflet en el proyecto.
- Inicializar el mapa con una vista centrada en el área de interés.
- Agregar una capa base con OpenStreetMap.

## 3. Crear Polígono
### 3.1 Buscar un GeoJSON del barrio
- Descargar el archivo desde:  
  [Bogotá Lab Urbano - Datos abiertos](https://bogota-laburbano.opendatasoft.com/explore/dataset/barrios-bogota/export/)

### 3.2 Cargar el GeoJSON en el mapa
- Usar **Leaflet** para cargar el archivo.
- Estilizar el polígono con colores personalizados.

### Nota Importante:
- **JavaScript ejecuta el código línea por línea**. Algunas líneas pueden tardar más en ejecutarse, por lo que **es obligatorio usar `async/await`** para garantizar que los archivos GeoJSON se carguen antes de que el código continúe.

## 4. Crear un Botón y Asignarle un Manejador de Eventos
### Pasos:
- Crear el botón en **HTML**.
- Asignarle un `id` único.
- En **JavaScript**, seleccionarlo con `document.getElementById()`.
- Agregar un `eventListener` para ejecutar una función cuando se haga clic.

## 5. Obtener Datos de los Árboles de Bogotá
### 5.1 Fuentes de datos:
- **Datos Abiertos Bogotá**:  
  [Plataforma de datos abiertos](https://datosabiertos.bogota.gov.co)

### 5.2 Pasos:
- Descargar el **GeoJSON** de los árboles.
- Cargarlo en JavaScript con `fetch()`.
- Usar `L.geoJSON()` para visualizar los puntos en el mapa.
- Estilizar los puntos con `L.circleMarker()`.

## 6. Crear el Bounding Box (BBOX)
### 6.1 Generar un Bounding Box
- Se puede usar **GeoJSON.io** para definir un **Bounding Box (BBOX)**:  
  [GeoJSON.io](https://geojson.io/#map=15.07/4.6917/-74.06557)

### 6.2 ¿Para qué sirve el BBOX?
- Filtrar los datos dentro de una zona específica.
- Mejorar la eficiencia al solicitar datos desde una API.
- Limitar la visualización del mapa a un área de interés.

## 7. Descargar Datos Filtrados desde la API (Servicio REST)
### 7.1 Uso de una API para filtrar datos
- Identificar un servicio REST que provea datos en formato GeoJSON.
- Especificar parámetros como **Bounding Box** (`bbox`), **filtros de atributos**, etc.
- Usar `fetch()` para obtener los datos dinámicamente.

### Nota:
- Si la API devuelve errores SSL (`SSLError`), se debe verificar la conexión o desactivar la verificación SSL en la petición.

## 8. Generar un Reporte en PDF con Datos del Mapa
- Convertir la información de los árboles y distancias en una tabla.
- Usar **jsPDF** para generar un informe en PDF.
- Agregar **autoTable** para estructurar los datos en un formato legible.
PA
