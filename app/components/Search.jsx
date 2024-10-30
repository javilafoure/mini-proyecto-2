import { useState } from 'react';
import search from '@/api/ubicacion/search';

export default function Search({ openSearch, setOpenSearch, setLat, setLon }) {
    const [inputValue, setInputValue] = useState('');
    const [resultados, setResultados] = useState([]);

    const handleSearch = async () => {
        const resultadoBusqueda = await search(inputValue);
        if (resultadoBusqueda) {
            setResultados(resultadoBusqueda); 
        }
    };

    const handleCityClick = (lat, lon) => {
        setLat(lat);
        setLon(lon);
        setOpenSearch(false); 
    };

    return (
        <>
            {openSearch && (
                <div className="z-10 top-0 left-0 m-0 p-0 bg-slate-800 absolute w-full md:w-[30%] h-screen">
                    <div className="w-full px-5 py-2 flex flex-col gap-2 text-white">
                        <button
                            className="self-end mt-4 mb-3"
                            onClick={() => setOpenSearch(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                            </svg>
                        </button>
                        <div className="flex w-full justify-between gap-4">
                            <input
                                className="text-slate-400 border rounded-md bg-slate-800 h-10 w-52 p-2"
                                placeholder="search location"
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button
                                className="h-10 border rounded-md px-3 py-1 bg-blue-700"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>

                        {
                            resultados &&
                        resultados.map((ciudad, index) => (
                            <button
                                key={index}
                                className="py-1 pl-4 text-left"
                                onClick={() => handleCityClick(ciudad.coordinates.lat, ciudad.coordinates.lon)}
                            >
                                {ciudad.name}, {ciudad.country}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
