const expenses={title: "Категория",
name: "category",
  options:[
    {value:"", title: "Выбор категории"},
    {value:"food", title: "Еда"},
    {value:"drinks", title: "Напитки"},
    {value:"clothes", title: "Одежда"}

  ]
};

const currency={title: "Валюта",
name: "currency",
  options:[
    {value:"", title: "Выбор валюты"},
    {value:"USD", title: "USD"},
    {value:"UAH", title: "UAH"},
    {value:"EUR", title: "EUR"}

  ]
};

const income ={title: "Доходы",
name: "income",
  options:[
    {value:"", title: "Выбор дохода"},
    {value:"salary", title: "Зарплата"},
    {value:"deposit", title: "Депозит"},
    {value:"lottery", title: "Лотерея"}

  ]
};

const spendingList={
  name: "spendingList",
  options:[
    {value:"day",title: "День"},
    {value:"week",title: "Неделя"},
    {value:"month",title: "Месяц"}
  ]
}

export default {expenses, currency, income,spendingList};