# Bitacora
1. crear repositorio
2. crear mapa
# solucion
leaflet, openlayers, map open
# 3. crear poligono
3.1 buscar un geojson de mi bariio 
3.1.1 en esta oag https://bogota-laburbano.opendatasoft.com/explore/dataset/barrios-bogota/export/
3.2 con leaflet cargar el geojson
Nota: js ejecuta linea por linea, añgunas lineas se pueden demorar pero el continua con los geojson se debe usar asinc await para que el espere hasta que carge y no genere errores
# 4. Crear un boton y s¿asignarle un manejador de eventos
4.1 crearlo en html y ejecutar el js