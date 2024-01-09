import React, { useState } from "react";

function MyComponent() {
    
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang",
    })

    function handleCarYearChange(e) {
        setCar(c =>  ({...c, year: e.target.value}))
    }
    
    function handleCarMakeChange(e) {
        setCar(c =>  ({...c, make: e.target.value}))
    }
    
    function handleCarModelChange(e) {
        setCar(c =>  ({...c, model: e.target.value}))
    }

    return (
        <>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleCarYearChange} /><br />
            <input type="text" value={car.make} onChange={handleCarMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleCarModelChange} /><br />
        </>
    )
}

export default MyComponent;