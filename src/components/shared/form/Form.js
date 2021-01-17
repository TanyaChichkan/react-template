import React, {Component} from 'react';
import moduleName from 'module'


const Form=({children, onSubmit,index})=>{

  return (
    <form onSubmit ={onSubmit} data-index={index}>
      {children}
    </form>
  )

};

export default Form;