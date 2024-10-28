import { obtenerUbicacion } from '@/api/ubicacion/getUbicacion';

export function geoFindMe(setUbicacion) {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(latitude, longitude)

        obtenerUbicacion(latitude, longitude)
            .then((ubicacion) => {
                if (ubicacion) {
                    setUbicacion(ubicacion);
                    console.log(ubicacion)
                }
            })
            .catch((error) => console.error(error));
    }

    function error() {
        console.log("No se pudo obtener la ubicación.");
    }

    if (!navigator.geolocation) {
        console.log("La geolocalización no es compatible con tu navegador.");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}
