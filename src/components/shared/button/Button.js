import React from 'react';

const Button=({title="", onClick, className="", type="button"})=>{
  return (
    <button onClick={onClick} className={className} type={type}>{title}</button>
  )
};

export default Button;