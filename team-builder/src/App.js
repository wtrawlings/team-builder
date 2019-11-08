import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState( {
    name: "",
    callSign: "",
    email: ""
  } );
  const handleChanges = event => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    console.log(teamMember);
  };



  return (
    <div className="App">
        
        <p>
          Bionic6 Team Lister: Join the Team!
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help Me Learn React!
        </a> */}
        <p>Here are the current Team Members:</p>
        <p>{teamMember}</p>
        <p>Join the Team - enter your information below!</p>
        <form>
          <label>Name: 
            <input
            type="text"
            name="name"
            value={teamMember.name}
            />
            </label>
            <label>Call Sign: 
            <input
            type="text"
            name="callSign"
            value={teamMember.callSign}
            />
            </label>
            <label>email: 
            <input
            type="text"
            name="email"
            value={teamMember.email}
            />
            </label>
            <button type="submit">Join the Team!</button>
        </form>
    </div>
  );
}

export default App;
