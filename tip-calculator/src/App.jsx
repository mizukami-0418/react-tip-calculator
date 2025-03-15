import React, { useState } from "react";
import Bill from "./Bill.jsx";
import SelectPercentage from "./SelectPercentage.jsx";
import Output from "./Output.jsx";
import Reset from "./Reset.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <h1>チップ計算機</h1>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [servicePercentage, setServicePercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  const tip = (bill * (servicePercentage + friendPercentage)) / 2 / 100;

  function handleReset() {
    setBill("");
    setServicePercentage(0);
    setFriendPercentage(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={servicePercentage}
        onSelect={setServicePercentage}
      >
        "サービスの評価は？"
      </SelectPercentage>
      <SelectPercentage
        percentage={friendPercentage}
        onSelect={setFriendPercentage}
      >
        "お友達の評価は？"
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
    </div>
  );
}

export default App;
