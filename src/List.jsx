import PropTypes from 'prop-types';

function List(props) {

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

    const category = props.category;
    const itemList = props.items;
    
    const listItems = itemList.map(item => 
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>{item.calories}</b>
        </li>
    );

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
}

List.defaultProps = {
    category: "Category",
    items: [],
}


export default List;