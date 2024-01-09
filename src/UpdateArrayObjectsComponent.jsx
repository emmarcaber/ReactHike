import React, {useState} from "react";

function MyComponent() {

    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setCarMake] = useState("");
    const [model, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
            year: year,
            make: make,
            model: model,
        }
        console.log(newCar);

        setCars(c => [...c, newCar])
        
        setYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index))
    }

    function handleyearChange(e) {
        setYear(() => e.target.value);
    }
    
    function handleCarMakeChange(e) {
        setCarMake(() => e.target.value);
    }
    
    function handleCarModelChange(e) {
        setCarModel(() => e.target.value);
    }

    return (
        <div>
            <h2>List of Car Objects</h2>

            <ul>
                {
                    cars.map((car, index) => {
                        return (
                            <li 
                                style={{ cursor: "pointer" }}
                                key={index}
                                onClick={() => handleRemoveCar(index)}
                            >
                                {car.year} {car.make} {car.model}
                            </li>
                        )
                    })
                }
            </ul>
            
            <input type="number" value={year} 
                onChange={handleyearChange}
                placeholder="Enter car year" /><br />
            <input type="text" value={make} 
                onChange={handleCarMakeChange}
                placeholder="Enter car make" /><br />
            <input type="text" value={model}
                onChange={handleCarModelChange}
                placeholder="Enter car model" /><br />
            <button onClick={() => handleAddCar()}>Add Car</button>
        </div>
    )
}

export default MyComponent;