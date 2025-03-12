import React, { useState } from "react";

export default function SelectPercentage({ title }) {
  const [percentage, setPercentage] = useState(0);

  return (
    <div>
      <h3>{title}</h3>
      <select
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      >
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
      </select>
    </div>
  );
}
