import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Section from '../../components/shared/section/Section';
import Button from '../../components/shared/button/Button';
import Select from '../../components/shared/select/Select';
import selectOptions from '../../utils/selectOptions';
import Input from '../../components/shared/input/Input';
import {categoryResult} from '../../utils/helpers';
import moment from 'moment';

const SpendList=({spendData, incomeData, match,history})=>{
  const[date,setDate] = useState(moment().format('YYYY-MM-DD'));

  const handleChange=e=>{
    const{name,value}=e.target;
    setDate(value);
  }

  const goBack=()=>history.push('/');

  const {category} = match.params;

  const categoryList = category === "income" ? categoryResult(incomeData,category)
  : category ==="spending" ? categoryResult(spendData,category) : [];

  return (
    <Section>
      <header>
        <Button title="Go back" onClick={goBack}/>
        <Select sets={selectOptions.spendingList}/>
      </header>
      <div>
        <Button title="Go left"/>
          <Input type="date" name="date" value="" onChange={handleChange}/>
        <Button title="Go right"/>
      </div>
      <div>
        <h2>Всего 0,00</h2>
        <ul>
          {categoryList.map(item=>(
          <li key={item.category}>
          <span>{item.category}</span>
          <span>{item.total}</span>
          </li>))}
        </ul>
      </div>

    </Section>
  )
}

export default withRouter(SpendList);
