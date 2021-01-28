import React, {Component, useState} from 'react';

import Section  from '../../components/shared/section/Section';
import Form from '../../components/shared/form/Form';
import Input from '../../components/shared/input/Input';
import Select from '../../components/shared/select/Select';
import CardTitle from '../../components/shared/cardTitle/CardTitle';

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

const Card=({onAddItem, history,settings})=>{
  const [date, setDate] = useState(moment(Date.now()).format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment(Date.now()).format('HH:mm'));
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState('');
  const [currency, setCurrency] = useState("");

  const handlerChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'date':
        return setDate(value);
      case 'time':
        return setTime(value);
      case 'amount':
        return setAmount(value);
      case 'category':
        return setCategory(value);
      case 'currency':
        return setCurrency(value);
      default:
        return;
    }
  };

  const handleSubmit=e=>{
    e.preventDefault();
    const index = e.target.dataset.index;
    const status = index==="1"? "spending" : "income";

    const data = { date, time, amount, category, currency };

    onAddItem(index,
      { id: uuidv4(), ...data, status});
      setDate(intialState.date);
      setTime(intialState.time);
      setAmount("");
      setCategory("");
      setCurrency("");
      history.push('/');
    }

    return(

    <>
    <Section>
      <Form onSubmit={handleSubmit} index={settings.index}>
        <CardTitle title={settings.title}/>
        <div className="inputWrapper">

          <Input
            type="date"
            title='День'
            onChange={handlerChange}
            name="date"
            value={date}
          />

          <Input
            type="time"
            title='Время'
            onChange={handlerChange}
            name="time"
            value={time}
          />

        </div>

        <div className="inputWrapper">
          <Select
            sets={settings.category}
            onChange={handlerChange}
            value={category}
          />
        </div>

        <div className="inputWrapper">
          <Input
            type="number"
            title='Сумма'
            onChange={handlerChange}
            name="amount"
            value={amount}
            placeholder="Введите сумму"
          />
        </div>

        <div className="inputWrapper">
        <Select
          sets={settings.currency}
          onChange={handlerChange}
          value={currency}
        />
        </div>

      </Form>
    </Section>
    </>
  )

}

export default Card;