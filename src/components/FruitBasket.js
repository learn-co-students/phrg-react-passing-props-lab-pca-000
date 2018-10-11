import React from 'react';

import FilteredFruitList from './FilteredFruitList.js';

function FruitBasket(props) {
  return (
    <div className="fruit-basket">
      <FilteredFruitList
        fruit={props.list} filter={props.filter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: ()=>{}
}

export default FruitBasket;