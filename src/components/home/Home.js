import React, {Component} from 'react';


const Home=({onToggleSpendings})=>{
  return(
    <>
    <h2>Расходы</h2>
    <p>RUB</p>
    <ul>
    <li>
      Сегодня:0,00
    </li>

    <li>
      Неделя:0,00
    </li>

    <li>
      Месяц:0,00
    </li>

    </ul>

    <button type="button" onClick={onToggleSpendings}>+</button>
    </>
  )
}

export default Home;