import React, { useState } from "react";
import Bill from "./Bill.jsx";
import SelectPercentage from "./SelectPercentage.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Bill />
      <SelectPercentage title="サービスの評価は？" />
      <SelectPercentage title="お友達の評価は？" />

      <h4>お支払い額の合計</h4>
    </div>
  );
}

export default App;
