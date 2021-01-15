import React, {Component} from 'react';

import Section  from '../shared/section/Section';
import Form from '../shared/form/Form';
import Input from '../shared/input/Input';
import Select from '../shared/select/Select';

import outlay from '../../utils/selectOptions';
import moment from 'moment';
import CardTitle from '../shared/cardTitle/CardTitle';

class CardSpendings extends Component{

  state={
    date: moment(Date.now()).format('YYYY-MM-DD'),
    time: moment(Date.now()).format('HH:mm'),
    category: "",
    amount:"",
    currency: ''
  }

  handlerChange=(e)=>{
    const {name,value}= e.target;
    this.setState({[name]:value})
  }

  render(){
    const {date,time,category,amount,currency} = this.state;
    console.log(date);
  return(

    <>
    <Section>
      <Form>
        <CardTitle title="Расходы" onToggle={this.props.onToggleSpendings}/>
        <div className="inputWrapper">

          <Input
            type="date"
            title='День'
            onChange={this.handlerChange}
            name="date"
            value={date}
          />

          <Input
            type="time"
            title='Время'
            onChange={this.handlerChange}
            name="time"
            value={time}
          />

        </div>

        <div className="inputWrapper">
          <Select
            sets={outlay.category}
            onChange={this.handlerChange}
            value={category}
          />
        </div>

        <div className="inputWrapper">
          <Input
            type="number"
            title='Сумма'
            onChange={this.handlerChange}
            name="amount"
            value={amount}
            placeholder="Введите сумму"
          />
        </div>

        <div className="inputWrapper">
        <Select
          sets={outlay.currency}
          onChange={this.handlerChange}
          value={currency}
        />
        </div>

      </Form>
    </Section>
    </>
  )
  }
}

export default CardSpendings;