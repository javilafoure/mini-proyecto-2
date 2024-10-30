export async function obtenerPronostico(lat, lon, unit) {
    const apiKey = 'e4b268ec0b234f5bebaccf5504e73000';
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error en la respuesta de la API: ${response.status}`);
        }

        const data = await response.json();

        const pronosticoPorDia = {};

        data.list.forEach(entry => {
            const date = new Date(entry.dt * 1000);
            const day = date.toLocaleDateString("en-EN", {
                weekday: "short",
                day: "2-digit",
                month: "short"
            });

            if (!pronosticoPorDia[day]) {
                pronosticoPorDia[day] = {
                    day: day,
                    icon: entry.weather[0].icon,
                    temp_min: entry.main.temp_min != null ? Math.round(entry.main.temp_min) : null,
                    temp_max: entry.main.temp_max != null ? Math.round(entry.main.temp_max) : null,
                };
            } else {
                pronosticoPorDia[day].temp_min = Math.round(
                    Math.min(pronosticoPorDia[day].temp_min, entry.main.temp_min)
                );
                pronosticoPorDia[day].temp_max = Math.round(
                    Math.max(pronosticoPorDia[day].temp_max, entry.main.temp_max)
                );
            }
        });

        const pronostico = Object.values(pronosticoPorDia);

        return pronostico;

    } catch (error) {
        console.error("Error al obtener el pronóstico:", error);
        return null;
    }
}
