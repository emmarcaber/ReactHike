import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handleCommentChange(e) {
        setComment(e.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea placeholder="Enter delivery instructions" onChange={handleCommentChange}></textarea>
            <p>Comment: {comment}</p>
        </div>
    )
}

export default MyComponent;