import { useEffect,useState } from "react"
import { supabase } from "../services/supabaseClient"

export default function ClientList(){

 const [clients,setClients] = useState([])

 useEffect(()=>{load()},[])

 async function load(){

  const {data} = await supabase
   .from("clients")
   .select("*")

  setClients(data)
 }

 return(
  <div>
   <h2>Clienti</h2>
   {clients.map(c=>(
    <div key={c.id}>
     {c.nome} — {c.tipo_soggetto}
    </div>
   ))}
  </div>
 )
}