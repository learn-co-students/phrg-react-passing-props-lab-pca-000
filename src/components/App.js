import React from "react"

import FruitBasket from "./FruitBasket"

export default class App extends React.Component {
  state = {
    fruit: [],
    filters: [],
    currentFilter: null
  }

  componentDidMount() {
    fetch("/api/fruit")
      .then(response => response.json())
      .then(fruit => {
        this.setState({ fruit })
    })
  }

  componentWillMount() {
    this.fetchFilters()
  }

  fetchFilters = () => {
    fetch("/api/fruit_types")
      .then(response => response.json())
      .then(filters => this.setState({ filters }))
  }

  handleChange = event => {
    this.setState({ currentFilter: event.target.value })
  }
  render() {
    return (
      <FruitBasket
        filters={this.state.filters}
        selectedFilter={this.state.currentFilter}
        addItems={this.addItems}
        setFilters={this.setFilters}
        handleChange={this.handleChange}
        fruit={this.state.fruit}
      />
    )
  }
}
