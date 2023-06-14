import { useState } from "react";

export const UserGreeting=()=>{
    const [initialStatus,finalStatus]=useState(false);
    var changeStatus=()=>{
        finalStatus(true);
        console.log("clicked");
    }
    return (
    <div>
    <p>Welcome {initialStatus ? 'Phanidharsai':'guest'}</p>
    {/* <p>Welcome {isLoggedIn &&'Phanidharsai'}</p> 
     if we use above it prints "Welcome phanidharsai" if isLoggedIn is true else "Welcome" */}
    {/* <p>Welcome {isLoggedIn}</p> */}
    <button onClick={()=>changeStatus}>Log in</button>
    
    </div>)
}