import React, {Component} from 'react';

import Section  from '../shared/section/Section';
import Form from '../shared/form/Form';
import Input from '../shared/input/Input';
import Select from '../shared/select/Select';
import CardTitle from '../shared/cardTitle/CardTitle';

import moment from 'moment';

import { v4 as uuidv4 } from 'uuid';


const intialState={
  date: moment(Date.now()).format('YYYY-MM-DD'),
  time: moment(Date.now()).format('HH:mm'),
  category: "",
  amount:"",
  currency: '',
  id:""
};

class Card extends Component{

  state={
    date: moment(Date.now()).format('YYYY-MM-DD'),
    time: moment(Date.now()).format('HH:mm'),
    category: "",
    amount:"",
    currency: '',
    id:""
  }

  handlerChange=(e)=>{
    const {name,value}= e.target;
    this.setState({[name]:value})
  }

  handleSubmit=e=>{
    e.preventDefault();
    const index = e.target.dataset.index;
    this.props.onAddItem(index,
    {...this.state, id: uuidv4()});
    this.setState(intialState);
    this.props.onClose();

  }

  render(){
    const {date,time,category,amount,currency} = this.state;
    return(

    <>
    <Section>
      <Form onSubmit={this.handleSubmit} index={this.props.settings.index}>
        <CardTitle title={this.props.settings.title}
        onClose={this.props.onClose}
        />
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
            sets={this.props.settings.category}
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
          sets={this.props.settings.currency}
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

export default Card;