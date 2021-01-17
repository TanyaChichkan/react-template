import React, {Component} from 'react';
import styles from './Home.module.css';
import Section from '../shared/section/Section';


// const Home=({onToggleSpendings, onToggleIncome,totalExp,totalIncome})=>{
//   return(

//     <Section>
//     <div className={styles.home}>
//       <div className={styles.homeWrapper}>
//         <h5>Расходы</h5>
//         <p className={styles.title}>RUB</p>
//       </div>
//       <ul className={styles.list}>
//         <li className={styles.listItem}>
//          <p>Сегодня:</p>
//          <p>{Number(totalExp).toFixed(2)}</p>
//         </li>

//         <li className={styles.listItem}>
//         <p>Неделя:</p>
//         <p>0,00</p>
//         </li>

//         <li className={styles.listItem}>
//         <p>Месяц:</p>
//         <p>0,00</p>
//         </li>
//       </ul>

//       <button type="button" onClick={onToggleSpendings} className={styles.button} data-index={1}>+</button>

//     </div>

//     <div className={styles.home}>
//       <div className={styles.homeWrapper}>
//         <h5>Доходы</h5>
//         <p className={styles.title}>RUB</p>
//       </div>
//       <ul className={styles.list}>
//       <li className={styles.listItem}>
//         <p>Месяц:</p>
//         <p>{totalIncome.toFixed(2)}</p>
//         </li>
//       </ul>

//       <button type="button" onClick={onToggleIncome} className={styles.button} data-index={1}>+</button>

//     </div>
//     </Section>
//   )
// }

class Home extends Component{

  handleClick=e=>{
    this.props.onToggleCard(e.target.dataset.index);
  }

  render(){
  return(

    <Section>
    <div className={styles.home}>
      <div className={styles.homeWrapper}>
        <h5 className={styles.titlePagefirst}>Расходы</h5>
        <p className={styles.title}>RUB</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
         <p>Сегодня:</p>
         <p>{this.props.totalExpByDay<=0 ?
        '0,00' : this.props.totalExpByDay.toLocaleString('ru')}</p>
        </li>

        <li className={styles.listItem}>
        <p>Неделя:</p>
        <p>{this.props.totalExpByWeek<=0 ?
        '0,00' : this.props.totalExpByWeek.toLocaleString('ru')}</p>
        </li>

        <li className={styles.listItem}>
        <p>Месяц:</p>
        <p>{this.props.totalExpByMonth<=0 ?
        '0,00' : this.props.totalExpByMonth.toLocaleString('ru')}</p>
        </li>
      </ul>

      <button
        type="button"
        onClick={this.handleClick}
        className={styles.button}
        data-index={1}>
        +
      </button>

    </div>

    <div className={styles.home}>
      <div className={styles.homeWrapper}>
        <h5 className={styles.titlePageSecond}>Доходы</h5>
        <p className={styles.title}>RUB</p>
      </div>
      <ul className={styles.list}>
      <li className={styles.listItem}>
        <p>Месяц:</p>
        <p>{this.props.totalIncomeByMonth<=0 ?
        '0,00' : this.props.totalIncomeByMonth.toLocaleString('ru')}
        </p>
        </li>
      </ul>

      <button
        type="button"
        onClick={this.handleClick}
        className={styles.button}
        data-index={2}>
        +
      </button>

    </div>
    </Section>
  )
  }
}

export default Home;