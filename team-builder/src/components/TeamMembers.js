import React from "react";

const TeamMembers = props => {
  //console.log(props)
  return (
    <div>
      {props.TeamMembers && props.TeamMembers.map(teamMember => (
        //the above is effectively an if statement that says 
        //if this is empty don't do it
        <div key={teamMember.id}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.callSign}</p>
          <p>{teamMember.email}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;