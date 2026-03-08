export default function Sidebar({setPage}){

 return(
  <div className="sidebar">
   <h2>FiscoSim v4p</h2>
   <button onClick={()=>setPage("dashboard")}>Dashboard</button>
   <button onClick={()=>setPage("clients")}>Clienti</button>
   <button onClick={()=>setPage("excel")}>Import Excel</button>
   <button onClick={()=>setPage("users")}>Utenti studio</button>
  </div>
 )
}