import React, { Component } from 'react';
import {CardList} from './components/Card-list/cardlist.component'
import {SearchBox} from './components/search-box-component/searchbox.component'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id:1
        },
        {
          name: 'Dracula',
          id:2
        },
        {
          name: 'Zombie',
          id:3
        }
      ],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState( { monsters: data } ))
    .catch(error => console.log(error))
  }

  searchMonsters = e => this.setState({searchField: e.target.value})

  render(){
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          searchMonsters={this.searchMonsters} 
          placeholder="Search Monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
