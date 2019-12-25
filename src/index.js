import React from "react";
import ReactDOM from "react-dom";
import pic from "../public/1.jpg";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <img src={pic} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
