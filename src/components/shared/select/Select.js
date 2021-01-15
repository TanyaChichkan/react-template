import React from 'react';
import styles from './Select.module.css';

const Select=({sets, onChange,value})=>{
  const {title,name,options} = sets;

  return (

    <label>{title}
      <select
        value={value}
        name={name}
        onChange={onChange}
        className={styles.select}
        >
        {options.map(({value,title})=>(
          <option key={value} value={value}>{title}</option>
        ))}
      </select>
    </label>

  )
};

export default Select;