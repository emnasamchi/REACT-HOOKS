import React, { useContext } from "react";
import { MyContext } from "../context/GlobalContext";
function Update() {
  const { setName } = useContext(MyContext);

  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default Update;
