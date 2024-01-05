import React, { useContext } from "react";
import { MyContext } from "../context/GlobalContext";
function First() {

  const { name } = useContext(MyContext);

  return (
    <div>
        {name} at first
    </div>
  )
}

export default First
