export async function obtenerUbicacion(lat, lon, unit) {
    const apiKey = 'e4b268ec0b234f5bebaccf5504e73000';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error en la respuesta de la API: ${response.status}`);
        }

        const data = await response.json();

            
            const ciudad = data.name;
            const pais = data.sys?.country;
            const temp = data.main?.temp != null ? Math.round(data.main.temp) : null;
            const desc = data.weather[0]?.description;
            const icon = data.weather[0]?.icon || "04n";
            const speed = data.wind?.speed;
            const deg = data.wind?.deg;
            const humidity = data.main?.humidity;
            const visibility = ((data.visibility) / 1000).toFixed(2);
            const pressure = data.main?.pressure;
            return { ciudad, pais, temp, desc, icon, speed, deg, humidity ,visibility, pressure};
        

    } catch (error) {
        console.error("Error al obtener la ubicación:", error);
        return null;
    }
}
