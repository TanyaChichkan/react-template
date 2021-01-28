import React from 'module';
import {withRouter} from 'react-router-dom';

import Button from '../button/Button';

const style={display: 'flex', alignItems:'center'};
const buttonStyle={width: '100px', height:"30px"}

const CardTitle=({title,history})=>{

  const goBackHome=()=>{
    history.push('/');
  }

  return(
    <header style={style}>
      <Button type="button"
      style={buttonStyle}
      onClick={goBackHome}
      title="Go back"/>
 
      <h2>{title}</h2>
      <button type="submit" style={buttonStyle}>OK</button>
    </header>
  )
};

export default withRouter(CardTitle);