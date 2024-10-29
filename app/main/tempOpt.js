import { useState } from 'react';

export function useUnit() {
    const [unit, setUnit] = useState('metric');

    const handleClick = (event) => {
        setUnit(event.target.value); 
    };

    return { unit, handleClick };
}
