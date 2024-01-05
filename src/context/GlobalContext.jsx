import { createContext, useContext,useState } from "react";


export const MyContext=createContext()

export const  MyProvidor=({children })=>{
    const[name,setName]=useState("Emna")
return(
    <MyContext.Provider
    value={{name,setName}}>
    {children}


    </MyContext.Provider>
)



};