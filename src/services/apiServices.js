import axios from 'axios';

export default class ApiServices {
  constructor(){
    axios.defaults.baseURL='http://localhost:3001';
  }

  getIncome(){
    return axios.get('income')
    .then(response=>response.data)
      .catch(err=>err);
  }

  getSpending(){
    return axios.get("spending")
    .then(response=>response.data)
      .catch(err=>err);
  }

  post(category,data){
    return axios.post(category,data)
      .then(response=>response.data)
      .catch(err=>err);
  }
}
