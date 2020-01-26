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
    console.log(teamMember);
  };
  const submitHandler = event => {
    event.preventDefault();
    const newTeamMember = {
      ...teamMember,
      id: Date.now()
    };
    //props.addNewTeamMember(newTeamMember);
    console.log(newTeamMember);
    console.log(event.target.name);
    setTeamMember({ name: "", callSign: "", email: "" });
  };


  return (
    <div className="App">
        
        <p>
          Bionic6 Team Lister: Join the Team!
        </p>
        
        <p>Here are the current Team Members:</p>
        
        <p>Join the Team - enter your information below!</p>
        <form>
          <label>Name: 
            <input onChange={handleChanges}
            type="text"
            name="name"
            value={teamMember.name}
            />
            </label>
            <label>Call Sign: 
            <input onChange={handleChanges}
            type="text"
            name="callSign"
            value={teamMember.callSign}
            />
            </label>
            <label>email: 
            <input onChange={handleChanges}
            type="text"
            name="email"
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
