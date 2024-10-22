import React from 'react'

function Main() {
    return (
        <div className='flex flex-col sm:flex-row w-screen h-screen'>
            <div className='flex flex-col w-full md:w-[30%] min-h-screen bg-slate-800'>
                <div className='flex justify-between items-center h-20 px-10'>
                    <button className='h-8 text-white text-xs bg-slate-400 px-4'>Search for places</button>
                    <button className='h-8 text-white rounded-full text-sm bg-slate-400 p-1'>
                        <img className="h-full w-auto" src="/location.svg" alt="" /></button>
                </div>
                <div>
                    <img className='h-full' src="/others/Cloud-background.png" alt="" />
                </div>
                <div className='flex flex-col items-center justify-center h-60 gap-8 mt-10'>

                    <div className='flex text-slate-400 font-bold text-5xl'>temp</div>
                    <div className='flex text-slate-400 font-bold text-xl'>estado del clima</div>
                    <div className='flex text-slate-400 text-xs'>fecha</div>
                    <div className='flex text-slate-400 text-xs'>
                        <img className='h-4' src="/location_on.svg" alt="" />
                        lugar</div>

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
                    <div className='flex flex-wrap px-16 md:px-10 gap-5 md:gap-7'>
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
                        <h3 className='font-bold text-5xl'>medidas<span className='font-normal text-3xl'> ms</span></h3>
                    </div>
                    <div className='flex flex-col gap-3 py-4 items-center h-40 bg-slate-800'>
                        <h2 className='text-xs'>Humidity</h2>
                        <h3 className='font-bold text-5xl'>medidas<span className='font-normal text-3xl'> %</span></h3>
                    </div>
                    <div className='flex flex-col gap-3 py-4 items-center h-32 bg-slate-800'>
                        <h2 className='text-xs'>Visibility</h2>
                        <h3 className='font-bold text-5xl'>medidas<span className='font-normal text-3xl'> km</span></h3>
                    </div>
                    <div className='flex flex-col gap-3 py-4 items-center h-32 bg-slate-800'>
                        <h2 className='text-xs'>Air Presure</h2>
                        <h3 className='font-bold text-5xl'>medidas<span className='font-normal text-3xl'> mb</span></h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
