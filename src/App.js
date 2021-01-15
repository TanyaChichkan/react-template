import React, {Component} from 'react';

import CardSpendings from './components/cardSpendings/CardSpendings';
import CardIncome from './components/cardIncome/CardIncome';
import Home from './components/home/Home';


class App extends Component{

  state={
    incomeIsOpen: false,
    spendIsOpen: false,
    homeIsOpen: true
  }

  toggleSpendings=(e)=>{
    const {incomeIsOpen,spendIsOpen, home} = this.state;
    this.setState(prevState=>({spendIsOpen: !prevState.spendIsOpen, homeIsOpen:!prevState.homeIsOpen}))
  }

  render(){
    const {incomeIsOpen,spendIsOpen, homeIsOpen} = this.state;
    return(
      <>
      {homeIsOpen && <Home onToggleSpendings={this.toggleSpendings}/>}
      {spendIsOpen && <CardSpendings onToggleSpendings={this.toggleSpendings}/>}
      {incomeIsOpen && <CardIncome/>}
      </>
    )
  }

}

export default App;
