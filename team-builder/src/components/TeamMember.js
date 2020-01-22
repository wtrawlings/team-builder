import React from "react";

const TeamMember = props => {
  console.log(props)
  return (
    <div>
      {props.teamMember.map(teamMember => (
        <div key={teamMember.id}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.callSign}</p>
          <p>{teamMember.email}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;