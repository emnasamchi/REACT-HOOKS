import React, { useContext } from "react";
import { MyContext } from "../context/GlobalContext";

function Second() {
  const { name } = useContext(MyContext);
  return <div>{name} at second </div>;
}

export default Second;
