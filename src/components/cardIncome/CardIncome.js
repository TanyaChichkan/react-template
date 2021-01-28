// import React, {Component} from 'react';

// import Section  from '../shared/section/Section';
// import Form from '../shared/form/Form';
// import Input from '../shared/input/Input';
// import Select from '../shared/select/Select';
// import CardTitle from '../shared/cardTitle/CardTitle';

// import data from '../../utils/selectOptions';
// import moment from 'moment';

// import { v4 as uuidv4 } from 'uuid';

// const intialState={
//   date: moment(Date.now()).format('YYYY-MM-DD'),
//   time: moment(Date.now()).format('HH:mm'),
//   category: "",
//   amount:"",
//   currency: '',
//   id:""
// };

// class CardIncome extends Component{

//   state={
//     date: moment(Date.now()).format('YYYY-MM-DD'),
//     time: moment(Date.now()).format('HH:mm'),
//     category: "",
//     amount:"",
//     currency: '',
//     id:""
//   }

//   handlerChange=(e)=>{
//     const {name,value}= e.target;
//     this.setState({[name]:value})
//   }

//   handleSubmit=e=>{
//     e.preventDefault();
//     this.props.onAddIncome({...this.state, id: uuidv4()})
//     this.setState(intialState);
//     this.props.onToggleIncome(e);

//   }

//   render(){
//     const {date,time,category,amount,currency} = this.state;
//     console.log(date);
//   return(

//     <>
//     <Section>
//       <Form onSubmit={this.handleSubmit}>
//         <CardTitle title="Доходы" onClose={this.props.onClose}/>
//         <div className="inputWrapper">

//           <Input
//             type="date"
//             title='День'
//             onChange={this.handlerChange}
//             name="date"
//             value={date}
//           />

//           <Input
//             type="time"
//             title='Время'
//             onChange={this.handlerChange}
//             name="time"
//             value={time}
//           />

//         </div>

//         <div className="inputWrapper">
//           <Select
//             sets={data.income}
//             onChange={this.handlerChange}
//             value={category}
//           />
//         </div>

//         <div className="inputWrapper">
//           <Input
//             type="number"
//             title='Сумма'
//             onChange={this.handlerChange}
//             name="amount"
//             value={amount}
//             placeholder="Введите сумму"
//           />
//         </div>

//         <div className="inputWrapper">
//         <Select
//           sets={data.currency}
//           onChange={this.handlerChange}
//           value={currency}
//         />
//         </div>

//       </Form>
//     </Section>
//     </>
//   )
//   }
// }

// export default CardIncome;