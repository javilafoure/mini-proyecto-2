async function search(cityName, unit) {
    const apiKey = 'e4b268ec0b234f5bebaccf5504e73000';
    const url = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${apiKey}&units=${unit}&cnt=3`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error en la respuesta de la API: ${response.status}`);
        }

        const data = await response.json();
        
        const resultados = data.list.slice(0, 3).map(ciudad => ({
            name: ciudad.name,
            country: ciudad.sys.country,
            coordinates: {
                lat: ciudad.coord.lat,
                lon: ciudad.coord.lon
            }
        }));

        return resultados;

    } catch (error) {
        console.error("Error al buscar la ciudad:", error);
        return null;
    }
}

export default search;
