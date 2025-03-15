import React from "react";

export default function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>支払いはいくら？</label>
      <input
        type="text"
        placeholder="支払い額を入力してください"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
