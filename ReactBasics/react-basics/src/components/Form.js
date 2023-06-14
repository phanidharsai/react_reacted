import { useState } from "react"

export const Form=()=>{
    const[username,setUserName]=useState('')
    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`Form data is ${username}`)

    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label> Username</label>
                <input type='text' value={username} onChange={(event)=>setUserName(event.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}