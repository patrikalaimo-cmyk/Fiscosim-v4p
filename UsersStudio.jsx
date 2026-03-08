import { useEffect,useState } from "react"
import { supabase } from "../services/supabaseClient"

export default function UsersStudio(){

 const [users,setUsers] = useState([])

 useEffect(()=>{load()},[])

 async function load(){

  const {data} = await supabase
   .from("users")
   .select("*")

  setUsers(data)
 }

 return(
  <div>
   <h2>Utenti studio</h2>
   {users.map(u=>(
    <div key={u.id}>
     {u.nome} {u.cognome}
    </div>
   ))}
  </div>
 )
}