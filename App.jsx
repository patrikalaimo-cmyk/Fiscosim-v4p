import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"

import ClientList from "./modules/ClientList"
import ExcelImport from "./modules/ExcelImport"
import UsersStudio from "./modules/UsersStudio"

export default function App(){

 const [user,setUser] = useState(null)
 const [page,setPage] = useState("dashboard")

 if(!user){
  return <Login setUser={setUser}/>
 }

 return(
  <div className="app">
   <Sidebar setPage={setPage}/>
   <div className="main">
    {page==="dashboard" && <Dashboard/>}
    {page==="clients" && <ClientList/>}
    {page==="excel" && <ExcelImport/>}
    {page==="users" && <UsersStudio/>}
   </div>
  </div>
 )
}