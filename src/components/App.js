import React from 'react'
import Fetch from '../fetch-setup.js'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.querySearch = {
      "all": "",
      "dog": "?type=dog",
      "cat": "?type=cat",
      "micropig": "?type=micropig"

    }

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    this.onFindPetsClick()
  }

  onChangeType = (type) =>{
    // this.setState({filters: this.state.})
    console.log(type)
    this.setState({filters: {type}})
  }

  onFindPetsClick = () => {
    fetch("/api/pets"+this.querySearch[this.state.filters.type])
    .then(res => res.json())
    .then(data => this.setState({pets: data}))


    

    
  }
  adopt = (id) => {
    console.log(id)
    this.setState({
      pets: this.state.pets.map(pet => {
        if(pet.id === id){
          return {...pet, isAdopted: true}
        }
        else{
          return pet
        }
      })
    })
  }

  render() {
    
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adopt = {this.adopt} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
