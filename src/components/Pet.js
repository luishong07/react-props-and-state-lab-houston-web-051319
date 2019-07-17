import React from 'react'

class Pet extends React.Component {
  constructor(){
    super()
    this.gender = {
      "male": "♂",
      "female": "♀"
    }
  }
 
  render() {
  
  let button
  if (this.props.isAdopted ){
    console.log(this.props)
    button = <button className="ui disabled button" onClick = {(id) => {this.props.adopt(this.props.id)}}>Already adopted</button>
  }
  else {
   button = <button className="ui primary button" onClick = {(id) => {this.props.adopt(this.props.id)}}>Adopt pet</button>
    
  }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender[this.props.gender]}
            PET NAME: {this.props.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight} </p>
          </div>
        </div>
        <div className="extra content">
         {button}
        
        </div>
      </div>
    )
  }
}

export default Pet
