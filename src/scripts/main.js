import React, { useState } from "react";

function LocalComponent() {
  const [myVariable, setMyVariable] = useState("http://localhost:1337");

  return (
    <div>
      <p>{myVariable}</p>
    </div>
  );
}

export default LocalComponent;