import React, { Component } from "react"

import Filter from "./Filter"
import FilteredFruitList from "./FilteredFruitList.js"

const FruitBasket = props => {
  return (
    <div className="fruit-basket">
      <Filter
        filters={props.filters}
        handleChange={props.handleChange}
        setFilters={props.setFilters}
      />
      <FilteredFruitList
        fruit={props.fruit}
        addItems={props.addItems}
        filter={props.selectedFilter}
      />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket
