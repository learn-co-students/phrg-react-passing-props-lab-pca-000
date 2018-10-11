import React from 'react';

function FilteredFruitList(props) {
  const fruit = !props.filter ?
                props.fruit :
                props.fruit.filter(i => i.fruit_type === props.filter);
    return (
      <ul className="fruit-list">
        {fruit.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;