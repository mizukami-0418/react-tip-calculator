import React from "react";

export default function Output({ bill, tip }) {
  return (
    <div>
      <h2>
        お支払い額合計:{bill + tip}({bill}円+{tip}円)
      </h2>
    </div>
  );
}
