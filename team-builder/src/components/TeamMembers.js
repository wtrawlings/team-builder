import React from "react";

const TeamMembers = props => {
  //console.log(props)
  //the above console.log shows up empty object- even after submit
  return (
    <div className="teamMemberList">
      {/*<h3>Team Member List</h3> so I know it's there, I just can't see it*/}
      {props.teamMembers && props.TeamMembers.map(teamMember => (
        //the above is effectively an if statement that says 
        //if this is empty don't do it
        <div className="teamMember" key={teamMember.id}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.callSign}</p>
          <p>{teamMember.email}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;