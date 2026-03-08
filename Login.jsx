import { useState } from "react"
import { supabase } from "../services/supabaseClient"

export default function Login({setUser}){

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")

 async function login(){

  const {data,error} = await supabase.auth.signInWithPassword({
   email,
   password
  })

  if(error){
   alert(error.message)
   return
  }

  setUser(data.user)

 }

 return(
  <div className="login">
   <h2>Login FiscoSim</h2>
   <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
   <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
   <button onClick={login}>Login</button>
  </div>
 )
}