import React from "react";


function Edituser(props){
    return(
        <>
            <h1>User {props.match.params.id} </h1>
        </>
    )
}

export default Edituser;