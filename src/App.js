import React, {Component} from 'react';

import CardSpendings from './components/cardSpendings/CardSpendings';
import CardIncome from './components/cardIncome/CardIncome';
import Home from './components/home/Home';
import data from './utils/selectOptions';
import Card from './components/card/Card';

import moment from 'moment';


// console.log(today===`${moment(new Date('2021-1-17')).get('year')}-0${moment(new Date('2021-1-17')).get('month')+1}-${moment(new Date('2021-1-17')).get('date')}`);


// class App extends Component{

//   state={
//     incomeIsOpen: false,
//     spendIsOpen: false,
//     homeIsOpen: true,
//     expenses:[],
//     income:[],
//   }

//   toggleSpendings=(e)=>{
//     const {incomeIsOpen,spendIsOpen, home} = this.state;
//     this.setState(prevState=>({spendIsOpen: !prevState.spendIsOpen, homeIsOpen:!prevState.homeIsOpen}))
//   }

//   toggleIncome=(e)=>{
//     const {incomeIsOpen,spendIsOpen, home} = this.state;
//     this.setState(prevState=>({incomeIsOpen: !prevState.incomeIsOpen, homeIsOpen:!prevState.homeIsOpen}))
//   }

//   closeCards=()=>{
//     this.setState({
//     incomeIsOpen: false,
//     spendIsOpen: false,
//     homeIsOpen: true
//     })
//   }

//   addToExpenses=cost=>{
//     console.log(cost);
//     this.setState(prevState=>({expenses:[...prevState.expenses, cost]}));
//   }

//   addToIncome=income=>{
//     this.setState(prevState=>({income:[...prevState.income, income]}));
//   }

//   getTotalExp(){
//     return this.state.expenses.reduce((acc,el)=>acc+Number(el.amount),0);
//   }

//   getTotalIncome(){
//     return this.state.income.reduce((acc,el)=>acc+Number(el.amount),0);
//   }

//   render(){
//     const {incomeIsOpen,spendIsOpen, homeIsOpen} = this.state;
//     const totalExp=this.getTotalExp();
//     const totalIncome=this.getTotalIncome();

//     return(
//       <>
//       {homeIsOpen && (
//       <Home onToggleSpendings={this.toggleSpendings}
//       onToggleIncome={this.toggleIncome}
//       totalExp={totalExp}
//       totalIncome = {totalIncome}
//       />)}

//       {spendIsOpen && <CardSpendings
//       onClose={this.closeCards}
//       onAddExpenses={this.addToExpenses}
//       onToggleSpendings={this.toggleSpendings}/>}

//       {incomeIsOpen && <CardIncome
//       onClose={this.closeCards}
//       onAddIncome={this.addToIncome}
//       onToggleIncome={this.toggleIncome}
//       />}
//       </>
//     )
//   }

// }

// export default App;

const cardIncome={
  index:2,
  title: "Доходы",
  category:data.income,
  currency:data.currency
};

const cardExpenses={
  index:1,
  title: "Расходы",
  category:data.expenses,
  currency:data.currency
};

class App extends Component{

  state={
    incomeIsOpen: false,
    spendIsOpen: false,
    homeIsOpen: true,
    expenses:[],
    income:[],
  }

  toggleCard=index=>{

    index ==="1" ? (
    this.setState(prevState=>(
      {spendIsOpen: !prevState.spendIsOpen, homeIsOpen:!prevState.homeIsOpen}))
    )
    :
    (this.setState(prevState=>(
      {incomeIsOpen: !prevState.incomeIsOpen, homeIsOpen:!prevState.homeIsOpen}))
    )
  };

  closeCards=()=>{
    this.setState({
    incomeIsOpen: false,
    spendIsOpen: false,
    homeIsOpen: true
    })
  };

  addNewPartitian=(cardIndex,value)=>{
    cardIndex === "1" ?
      this.setState(prevState=>({expenses:[...prevState.expenses, value]}))
      :
      this.setState(prevState=>({income:[...prevState.income, value]}))
  }

  // getTotalByDay=(cardIndex)=>{
  //   const today = moment(Date.now()).format('YYYY-MM-DD');

  //  return cardIndex === '1' ? this.state.expenses.reduce((acc,el)=>{
  //     return el.date === today ? acc+Number(el.amount) : acc
  //   },0) : this.state.income.reduce((acc,el)=>{
  //     return el.date === today ? acc+Number(el.amount) : acc
  //   },0)
  // }

  getTotalExpWeek=()=>{
    const currentWeek = moment(Date.now()).isoWeek();

    return this.state.expenses.reduce((acc,el)=>{
      return moment(el.date,"YYYY-MM-DD").isoWeek() === currentWeek ?
      acc+Number(el.amount) : acc
    },0);
  }

  getTotalExpMonth=()=>{
    const currentMonth = moment(Date.now()).month();

    return this.state.expenses.reduce((acc,el)=>{
      return moment(el.date,"YYYY-MM-DD").month() === currentMonth ?
      acc+Number(el.amount) : acc
    },0);
  }

  getTotalIncomeMonth(){
    const currentMonth = moment(Date.now()).month();

    return this.state.income.reduce((acc,el)=>{
      return moment(el.date,"YYYY-MM-DD").month() === currentMonth ?
      acc+Number(el.amount) : acc
    },0);
  }

  getTotalExpToday(){
    const today = moment(Date.now()).format('YYYY-MM-DD');
    return this.state.expenses.reduce((acc,el)=>{
      return el.date === today ? acc+Number(el.amount) : acc
    },0);
  }

  render(){
    const {incomeIsOpen,spendIsOpen, homeIsOpen} = this.state;
    const totalExpByDay=this.getTotalExpToday();
    const totalIncomeByMonth=this.getTotalIncomeMonth();
    const totalExpByWeek = this.getTotalExpWeek();
    const totalExpByMonth = this.getTotalExpMonth();

    return(
      <>
      {homeIsOpen && (
      <Home
      onToggleCard={this.toggleCard}
      totalExpByDay={totalExpByDay}
      totalIncomeByMonth={totalIncomeByMonth}
      totalExpByWeek = {totalExpByWeek}
      totalExpByMonth={totalExpByMonth}
      />)}

      {incomeIsOpen && (
        <Card settings={cardIncome}
        onClose={this.closeCards}
        onAddItem={this.addNewPartitian}
        />
      )}

      {spendIsOpen && (
        <Card settings={cardExpenses}
        onClose={this.closeCards}
        onAddItem={this.addNewPartitian}
        />
      )}
      </>
    )
  }

}

export default App;