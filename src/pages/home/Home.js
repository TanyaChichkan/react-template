import React, {Component} from 'react';
import styles from './Home.module.css';
import Section from '../../components/shared/section/Section';
import CountTotal from '../../utils/countTotal';
import Button from '../../components/shared/button/Button';

import moment from 'moment';
import { NavLink } from 'react-router-dom';


const Home=({expenses, income,history})=>{

  const counter = new CountTotal();

  const goToSpending=()=>history.push('/spending');
  const goToIncome=()=>history.push('/income');
  const goToListIncome = () => history.push('/list/income');
  const goToListOutlay = () => history.push('/list/spending');

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
         <p>{counter.getTotalDay(expenses)}</p>
        </li>

        <li className={styles.listItem}>
        <p>Неделя:</p>
        <p>{counter.getTotalWeek(expenses)}</p>
        </li>

        <li className={styles.listItem}>
        <p>Месяц:</p>
        <p>{counter.getTotalMonth(expenses)}</p>
        </li>
      </ul>

      <Button
        type="button"
        onClick={goToSpending}
        className={styles.button}
        title="+"
      />


    </div>

    <div className={styles.home}>
      <div className={styles.homeWrapper}>
        <h5 className={styles.titlePageSecond}>Доходы</h5>
        <p className={styles.title}>RUB</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p>Сегодня:</p>
          <p>{counter.getTotalDay(income)}</p>
          </li>

        <li className={styles.listItem}>
          <p>Неделя:</p>
          <p>{counter.getTotalWeek(income)}</p>
        </li>

        <li className={styles.listItem}>
          <p>Месяц:</p>
          <p>{counter.getTotalMonth(income)}
          </p>
        </li>
      </ul>

      <Button
        type="button"
        onClick={goToIncome}
        className={styles.button}
        title="+"
      />

    </div>

    <div>
    <Button onClick={goToListIncome} title="Все доходы" />
    <Button onClick={goToListOutlay} title="Все расходы" />
    </div>
    </Section>
  )

}

export default Home;