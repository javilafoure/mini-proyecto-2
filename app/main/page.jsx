'use client'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import { geoFindMe } from './geolocation'
import { obtenerUbicacion } from '@/api/ubicacion/getUbicacion'

function Main() {
    const [openSearch, setOpenSearch] = useState(false)
    const [ubicacion, setUbicacion] = useState({ ciudad: "", pais: "" });
    const [fechaActual, setFechaActual] = useState('');

    useEffect(() => {

        const lat = -12.0432;
        const lon = -77.0282;

        obtenerUbicacion(lat, lon)
            .then((ubicacion) => {
                if (ubicacion) {
                    setUbicacion(ubicacion);
                }
            })
            .catch((error) => console.error(error));

        const opciones = { weekday: 'short', day: '2-digit', month: 'short' };
        const fecha = new Date().toLocaleDateString('en-US', opciones);
        setFechaActual(fecha);

    }, []);

    return (
        <div className='flex flex-col sm:flex-row w-screen h-screen'>
            <div className='flex flex-col w-full md:w-[30%] min-h-screen bg-slate-800'>
                <Search
                    openSearch={openSearch}
                    setOpenSearch={setOpenSearch}
                />
                <div className='flex justify-between items-center h-20 px-10'>
                    <button className='h-8 text-white text-xs bg-slate-400 px-4'
                        onClick={() => setOpenSearch(true)}
                    >Search for places</button>
                    <button className='h-8 text-white rounded-full text-sm bg-slate-400 p-1' onClick={() => geoFindMe(setUbicacion)}>
                        <img className="h-full w-auto" src="/location.svg" alt="" /></button>
                </div>
                <div className='relative'>
                    <img className='h-full opacity-10' src="/others/Cloud-background.png" alt="" />
                    <img className='w-40 h-40 object-contain absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' src={`/weather/${ubicacion.icon}.png`} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center h-60 gap-8 mt-10'>

                    <div className='flex text-slate-400 font-bold text-5xl'>
                        <h2 className="text-white text-9xl font-medium">{ubicacion.temp}</h2>
                        <h3 className="text-slate-400 text-7xl">°C</h3>
                    </div>
                    <div className='flex text-slate-400 font-bold text-xl'>{ubicacion.desc}</div>
                    <div className='flex text-slate-400 text-xs'>Today .{fechaActual}</div>
                    <div className='flex text-slate-400 text-xs'>
                        <img className='h-4' src="/location_on.svg" alt="" />
                        <h3> {ubicacion.ciudad}, {ubicacion.pais}</h3>
                    </div>

                </div>
            </div>
            <div className='flex flex-col md:items-center w-full md:w-[70%] min-h-screen bg-slate-950'>
                <div className='flex flex-col w-full md:w-[65%]'>
                    <div className='flex justify-end items-center h-20 px-16 gap-4'>
                        <button className='font-bold h-8 w-8 text-slate-950 rounded-full text-sm bg-white p-1'>
                            ºC
                        </button>
                        <button className='font-bold h-8 w-8 text-white rounded-full text-sm bg-slate-400 p-1'>
                            ºF
                        </button>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-5 px-16 md:px-10 gap-5 md:gap-7'>
                        <div className='flex flex-col items-center text-white text-sm h-40 w-28 md:w-32 md:h-48 border shadow bg-slate-800 p-4 gap-2'>
                            <div>Dia</div>
                            <div>
                                <img className='h-full w-auto' src="/weather/03d.png" alt="" />
                            </div>
                            <div>Temperatura</div>
                        </div>
                        <div className='flex flex-col items-center text-white text-sm h-40 w-28 md:w-32 md:h-48 border shadow bg-slate-800 p-4 gap-2'>
                            <div>Dia</div>
                            <div>
                                <img className='h-full w-auto' src="/weather/03d.png" alt="" />
                            </div>
                            <div>Temperatura</div>
                        </div>
                        <div className='flex flex-col items-center text-white text-sm h-40 w-28 md:w-32 md:h-48 border shadow bg-slate-800 p-4 gap-2'>
                            <div>Dia</div>
                            <div>
                                <img className='h-full w-auto' src="/weather/03d.png" alt="" />
                            </div>
                            <div>Temperatura</div>
                        </div>
                        <div className='flex flex-col items-center text-white text-sm h-40 w-28 md:w-32 md:h-48 border shadow bg-slate-800 p-4 gap-2'>
                            <div>Dia</div>
                            <div>
                                <img className='h-full w-auto' src="/weather/03d.png" alt="" />
                            </div>
                            <div>Temperatura</div>
                        </div>
                        <div className='flex flex-col items-center text-white text-sm h-40 w-28 md:w-32 md:h-48 border shadow bg-slate-800 p-4 gap-2'>
                            <div>Dia</div>
                            <div>
                                <img className='h-full w-auto' src="/weather/03d.png" alt="" />
                            </div>
                            <div>Temperatura</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full md:w-[65%] text-white md:mt-20 py-2 px-8 gap-4 bg-slate-950'>
                    <h2 className=' font-bold text-lg'>Today`s Highlights</h2>
                    <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
                        <div className='flex flex-col gap-3 py-4 items-center h-40 bg-slate-800'>
                            <h2 className='text-xs'>Wind status</h2>
                            <h3 className='font-bold text-5xl'>{ubicacion.speed}<span className='font-normal text-3xl'> ms</span></h3>
                            <div className='flex items-center gap-2'>
                                <div className='h-8 w-8 bg-gray-600 rounded-full'>
                                    <img className='p-1'
                                        style={{ transform: `rotate(${ubicacion.deg}deg)` }} src="navigation.svg" alt="" />
                                </div>
                                <span>SSE</span>

                            </div>
                        </div>
                        <div className='flex flex-col gap-3 py-4 items-center h-40 bg-slate-800'>
                            <h2 className='text-xs'>Humidity</h2>
                            <h3 className='font-bold text-5xl'>{ubicacion.humidity}<span className='font-normal text-3xl'> %</span></h3>
                            <div className="w-full px-8">
                                <div className="w-full flex justify-between">
                                    <span className="text-xs font-light">0</span>
                                    <span className="text-xs font-light">50</span>
                                    <span className="text-xs font-light">100</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${ubicacion.humidity}%` }}></div>
                                </div>
                                <div className="w-full flex justify-end">
                                    <span className="text-xs font-light">%</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 py-4 items-center h-32 bg-slate-800'>
                            <h2 className='text-xs'>Visibility</h2>
                            <h3 className='font-bold text-5xl'>{ubicacion.visibility}<span className='font-normal text-3xl'> km</span></h3>
                        </div>
                        <div className='flex flex-col gap-3 py-4 items-center h-32 bg-slate-800'>
                            <h2 className='text-xs'>Air Presure</h2>
                            <h3 className='font-bold text-5xl'>{ubicacion.pressure}<span className='font-normal text-3xl'> mb</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
