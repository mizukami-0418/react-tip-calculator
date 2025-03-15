import React from "react";

export default function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">うーん☹️ 0%</option>
        <option value="5">まあまあ😕 5%</option>
        <option value="10">いいね🙂 10%</option>
        <option value="20">サイコー😃 20%</option>
      </select>
    </div>
  );
}
