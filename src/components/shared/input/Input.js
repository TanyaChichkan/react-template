import React from 'react';
import  styles from './Input.module.css';

const Input=({title,type="text",onChange,value,name,placeholder=""})=>{
  return (
    <label>{title}
      <input type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
    </label>
  )
};

export default Input;