import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers';


function App() {
  //const MemberForm = props => {
    //console.log("this is our props?")
  const [teamMember, setTeamMember] = useState( {
    name: "",
    callSign: "",
    email: ""
  } );
  //should this be an array of objects or defaulted to object?
  const handleChanges = event => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    //console.log(teamMember);
    //the above console log makes the updates show up as soon as you type something in (the console).
  };
  const submitHandler = event => {
    event.preventDefault();//that stops the page refresh
    const newTeamMember = {
      ...teamMember,
      id: Date.now()//this works as the unique key for the .map function
    };
    //props.addNewTeamMember(newTeamMember);
    console.log(newTeamMember);
    console.log(event.target.name);//this shows up empty
    setTeamMember({ name: "", callSign: "", email: "" });//this resets the forms to blank
  };


  return (
    <div className="App">
        
        <p>
          Bionic6 Team Lister: Join the Team!
        </p>
        
        <p>Here are the current Team Members:</p>
        
        <p>Join the Team - enter your information below!</p>
        <form>
          <label htmlFor="name">Name: 
            <input onChange={handleChanges}
            type="text"
            name="name"
            placeholder="name"
            value={teamMember.name}
            />
            </label>
            <label htmlFor="callSign">Call Sign: 
            <input onChange={handleChanges}
            type="text"
            name="callSign"
            placeholder="callsign"
            value={teamMember.callSign}
            />
            </label>
            <label htmlFor="email">email: 
            <input onChange={handleChanges}
            type="text"
            name="email"
            placeholder="email"
            value={teamMember.email}
            />
            </label>
            <button onClick={submitHandler} type="submit">Join the Team!</button>
        </form>
        <p>Current Team Members Post Under the submit button.</p>
        <TeamMembers />
    </div>
  );
}
//}
export default App;
