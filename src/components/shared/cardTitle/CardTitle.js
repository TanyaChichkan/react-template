import React from 'module';

const style={display: 'flex', alignItems:'center'};
const buttonStyle={width: '100px', height:"30px"}

const CardTitle=({title, onClose})=>{
  return(
    <header style={style}>
      <button type="button"
      style={buttonStyle}
      onClick={onClose}
      >Go back</button>
      <h2>{title}</h2>
      <button type="submit" style={buttonStyle}>OK</button>
    </header>
  )
};

export default CardTitle;