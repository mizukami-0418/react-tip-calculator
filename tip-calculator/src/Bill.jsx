import React, { useState } from "react";

export default function Bill() {
  const [bill, setBill] = useState(null);

  return (
    <div>
      <h3>支払いはいくら？</h3>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}
