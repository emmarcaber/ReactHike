import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>{name}</p>
        </div>
    )
}

export default MyComponent;