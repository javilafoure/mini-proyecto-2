export async function obtenerUbicacion(lat, lon) {
    const apiKey = '935bb5d727b4466f86848f2a69a239a4';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error en la respuesta de la API: ${response.status}`);
        }
        
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const location = data.results[0].components;
            const ciudad = location.city || location.town || location.village;
            const pais = location.country;
            return { ciudad, pais };
        } else {
            console.error("No se encontraron datos de ubicación.");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener la ubicación:", error);
        return null;
    }
}
