import { useEffect,useState } from "react"
import { supabase } from "../services/supabaseClient"

export default function Dashboard(){

 const [count,setCount] = useState(0)

 useEffect(()=>{load()},[])

 async function load(){

  const {count} = await supabase
   .from("clients")
   .select("*",{count:"exact"})

  setCount(count)
 }

 return(
  <div>
   <h2>Dashboard</h2>
   <p>Clienti totali: {count}</p>
  </div>
 )
}