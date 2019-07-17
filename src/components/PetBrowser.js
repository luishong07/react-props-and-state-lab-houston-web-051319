import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
    
  
 
  render() {
    console.log(this.props.adopt)
    return <div className="ui cards">
      PET COMPONENT SHOULD GO HERE
      
      {this.props.pets.map(pet => (<Pet name = {pet.name} type = {pet.type} age = {pet.age} weight = {pet.weight} gender = {pet.gender} isAdopted = {pet.isAdopted} id = {pet.id} adopt = {this.props.adopt}/>))}
    </div>
  }

}

export default PetBrowser
