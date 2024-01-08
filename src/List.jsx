
function List() {
    const fruits = [
    {
        id: 1,
        name: "Apple",
        calories: 95
    }, 
    {
        id: 2,
        name: "Orange",
        calories: 45
    }, 
    {
        id: 3,
        name: "Banana",
        calories: 105
    }, 
    {
        id: 4,
        name: "Coconut",
        calories: 159
    }, 
    {
        id: 5,
        name: "Pineapple",
        calories: 37
    }];
    
    // SORTING THE LISTS
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); //  NUMERIC
    fruits.sort((a, b) => b.calories - a.calories); //  NUMERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories >=  100);

    const listItems = highCalFruits.map(highCalFruit => 
        <li key={highCalFruit.id}>
            {highCalFruit.name}: &nbsp;
            <b>{highCalFruit.calories}</b>
        </li>
    );

    return (
        <ol>{listItems}</ol>
    );
}

export default List;