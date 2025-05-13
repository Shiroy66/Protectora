import React from "react";

export const PawBtton = () => {
  return (
    <button
      onClick={() => alert("¡Haz clic en la huella!")}
      className="w-28 h-28 p-2 rounded-full bg-transparent hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Dedos */}
        <circle cx="25" cy="40" r="8" fill="#D97236" />
        <circle cx="40" cy="30" r="9" fill="#D97236" />
        <circle cx="60" cy="30" r="9" fill="#D97236" />
        <circle cx="75" cy="40" r="8" fill="#D97236" />

        {/* Almohadilla */}
        <ellipse cx="50" cy="55" rx="20" ry="15" fill="#D97236" />
      </svg>
    </button>
  );
};
export default PawBtton;
