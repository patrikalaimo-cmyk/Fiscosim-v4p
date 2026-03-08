import * as XLSX from "xlsx"
import { supabase } from "../services/supabaseClient"

export default function ExcelImport(){

 const handleFile = e =>{

  const file = e.target.files[0]
  const reader = new FileReader()

  reader.onload = async evt =>{

   const workbook = XLSX.read(evt.target.result,{type:"binary"})
   const sheet = workbook.Sheets[workbook.SheetNames[0]]
   const rows = XLSX.utils.sheet_to_json(sheet)

   for(const r of rows){

    await supabase.from("clients").insert([
     {
      nome:r.nome,
      codice_fiscale:r.codice_fiscale,
      tipo_soggetto:r.tipo_soggetto
     }
    ])

   }

  }

  reader.readAsBinaryString(file)

 }

 return(
  <div>
   <h2>Import Excel</h2>
   <input type="file" onChange={handleFile}/>
  </div>
 )
}