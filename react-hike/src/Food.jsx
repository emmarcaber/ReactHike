
function Food() {

    const foods = [
        'Apple', 'Banana', 'Orange'
    ]

    const foodLists = foods.map(food => 
        <li>{food}</li>
    );

    return (
        <ul>
            {foodLists}
        </ul>
    );
}

export default Food;