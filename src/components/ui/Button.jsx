import React from 'react';

export default function Button({ onClick, text, disabled, isActive }) {
  return (
    <button
      className={`font-semibold rounded-full py-1 px-2 ${isActive ? 'bg-pink-300' : 'bg-white'} border-white border-4 transition delay-100 bg-white hover:bg-pink-100 duration-300`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
