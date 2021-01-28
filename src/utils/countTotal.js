import moment from 'moment';

export default class CountTotal {
  constructor() {
    this.currentDate = moment(Date.now()).format('YYYY-MM-DD');
  }

  getTotalWeek=(arr)=>{
    const currentWeek = moment(Date.now()).isoWeek();

    return arr.reduce((acc,el)=>{
      return moment(el.date,"YYYY-MM-DD").isoWeek() === currentWeek ?
      acc+Number(el.amount) : acc
    },0);

  };


  getTotalMonth=(arr)=>{
    const currentMonth = moment(Date.now()).month();

    return arr.reduce((acc,el)=>{
      return moment(el.date,"YYYY-MM-DD").month() === currentMonth ?
      acc+Number(el.amount) : acc
    },0);
  }

  getTotalDay=(arr)=>{
    const today = moment(Date.now()).format('YYYY-MM-DD');
    return arr.reduce((acc,el)=>{
      return el.date === today ? acc+Number(el.amount) : acc
    },0);
  }
}