import React, {useState,useEffect} from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';

import CardSpendings from './components/cardSpendings/CardSpendings';
import CardIncome from './components/cardIncome/CardIncome';
import Home from './pages/home/Home';
import data from './utils/selectOptions';
import Card from './pages/card/Card';
import SpendList from './pages/spendList/SpendList';
import ApiServices from './services/apiServices';


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

const App=()=>{

  const history = useHistory();

  const[expenses, setExpenses]=useState([]);
  const [income, setIncome] = useState([]);
  const [error, setError] = useState(null);
  const api = new ApiServices();

  useEffect(() => {
    api.getSpending()
      .then(result=>setExpenses(result))
      .catch(err=>setError(err));
    api.getIncome()
    .then(result=>setIncome(result))
    .catch(err=>setError(err));
  }, [])


  const addNewPartitian=async (cardIndex,value)=>{
    const category = cardIndex==="1" ? "spending" : "income";

    const responseData = await api.post(category, value);

    return cardIndex === "1"?
     setExpenses(prevState=>([...prevState, responseData]))
     :
    setIncome(prevState=>([...prevState, responseData]));
  }


    return(
      <>
      {error ? (
        <h1>{error.message}</h1>
      ) : (
      <Switch>
      <Route exact path='/' render={(props)=>
        <Home
        expenses={expenses}
        income = {income}
        {...props}/>
        }/>

      <Route exact path='/income' render={(props)=>
        <Card settings={cardIncome}
        onAddItem={addNewPartitian}
        {...props}/>
        }/>

      <Route exact path='/spending' render={(props)=>
       <Card settings={cardExpenses}
       onAddItem={addNewPartitian}
       {...props}/>
      }/>

      <Route exact path='/list/:category' render={(props)=>
        <SpendList spendData={expenses} incomeData={income}
        {...props}/>
      }/>

      <Redirect to="/"/>

      </Switch>
      )}
      </>)



}

export default App;