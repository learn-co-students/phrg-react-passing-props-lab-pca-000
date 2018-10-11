import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter'

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        filters: [],
        currentFilter: null,
        fruit: []
      };
    }

    componentWillMount() {
      this.fetchFilters();
      this.fetchFruit();
    }

    fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }))
    }

    handleChange = event => {
      let filter = event.target.value==='all' ? null : event.target.value;
      this.setState({currentFilter: filter})
    }

    fetchFruit = () => {
      fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
    }

    render() {
      return (
        <div>
          <Filter filters={this.state.filters} handleChange={this.handleChange}/>
          <FruitBasket list={this.state.fruit} filter={this.state.currentFilter} />
        </div>
      )
    }
}

export default App;
