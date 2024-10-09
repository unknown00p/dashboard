import React from "react";

function Button({ color, bgColor, text, borderRadius, size }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} px-4 py-3 font-semibold lg:text-sm lg:px-3 lg:py-2 lg:font-medium`}
    >
      {text}
    </button>
  );
}

export default Button;
