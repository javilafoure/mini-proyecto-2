
function Card({day, icon, temp_min, temp_max, unit}) {
    return (
        <div className='flex flex-col items-center text-white text-sm h-40 w-28 md:w-32 md:h-48 border rounded-md shadow bg-slate-800 p-4 gap-4'>
            <div>{day}</div>
            <div>
                <img className='h-16 w-16' src={`/weather/${icon}.png`} alt="" />
            </div>
            <div>{temp_max}{unit === 'metric' ? '°C' : '°F'} <span className="text-slate-400">{temp_min}{unit === 'metric' ? '°C' : '°F'}</span></div>
        </div>
    )
}

export default Card
