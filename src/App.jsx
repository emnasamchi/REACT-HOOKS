// //

// import { useState,useEffect } from "react";
// function App(){
//   const [name,setName]=useState("emna");
//   useEffect({()=>{
//     console.log("mounted"));
//   }
import First from "./components/First";
import Second from "./components/Second";
import Update from "./components/Update";
import { useState, useEffect, useRef,useCallback, useMemo } from "react";

function App() {
  const myRef = useRef(null);
  const UpdateInnerHTML = useCallback((e) => {
    const element = myRef.current;
    if (element) {
      element.innerHTML = e.target.value;
    }
  });
  return (
    <>
      { ""}
      <div ref={myRef}>initial content</div>
      <input onChange={UpdateInnerHTML} />
      <First/>{
        useMemo(()=>{
          return <Second/>
        }
        )
      }
    </>
  );
}
export default App;
