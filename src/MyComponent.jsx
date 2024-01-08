import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>{name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>{quantity}</p>
        </div>
    )
}

export default MyComponent;