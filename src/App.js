import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      firstName: " ", 
      lastName: " ", 
      email: " ",
      cellPhone: " ",
      isEnrolled: false,
      gender: " ",
      dormChoice: "Hope Hall ",
      textArea: " "
    }
  this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
   
  }
  render() {
    return (
      <form className= "container">
        <h1>School Application Form </h1>
      <br />
        <input className= "field"
          type= "text"
          value= {this.state.value} 
          name = "firstName"
          placeholder= "First Name"
          onChange= {this.handleChange} />
     <br/>
        <input className="field"
          type= "text"
          value= {this.state.value} 
          name= "lastName" 
          placeholder= "Last Name" 
          onChange= {this.handleChange} /> 
      <br />
        <input className="field"
          type= "text"
          value= {this.state.value}
          name = "email"
          placeholder= "Email"
          onChange= {this.handleChange} />

      <br />
        <input className="field"
          type= "text"
          value= {this.state.value}
          name = "cellNumber"
          placeholder= "Cell Phone"
          onChange= {this.handleChange} />    

      <br />
        <p>Essay</p>
        <textarea
          placeholder= 'Please type your admission essay here:'
          onChange= {this.handleChange}>
         {this.state.textArea}
        </textarea>
          

      <br />
        <label>
        <input 
          type= "checkbox"
          name= "isEnrolled" 
          checked= {this.state.isEnrolled}
          onChange= {this.handleChange} />  
          is enrolled for Fall Semester
        </label>
      <br />
        <label>
        <input 
          type= "radio"
          name= "gender" 
          value= "male"
          checked= {this.state.gender === "male"}
          onChange= {this.handleChange} />  
           Male
        </label>

        <label>
        <input 
          type= "radio"
          name= "gender"
          value= "female" 
          checked= {this.state.gender === "female"}
          onChange= {this.handleChange} />  
          Female
        </label>
        
      <br />
        <label>Preferred Residence Hall: </label>
        <select 
          name= "dormChoice"
          value= {this.state.dormChoice}
          onChange= {this.handleChange}
          
        >
        <option value= "Hope Hall" > Hope Hall </option>
        <option value= "Victory Hall"> Victory Hall </option>
        <option value= "Glory Downs" > Glory Downs </option>
        </select>

        <h1> Entered Information </h1>
        <p> Name: {this.state.firstName} {this.state.lastName} </p>
        <p>  Email: {this.state.email}  </p> 
        <p> Cell Number: {this.state.cellNumber} </p>
        <p> Gender: {this.state.gender} </p>
        <p> Your dorm choice is: {this.state.dormChoice} </p>
      </form>
    );
  }
}

export default App;

