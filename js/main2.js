'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money ;

let start = function () {
  do {
    money = prompt('Ваш месячный доход?', '').trim();
  }
  while (!isNumber(money));
};
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 12,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function () {
      // считаем расходы за месяц
      for (let key in appData.expenses) {
        appData.expensesMonth += appData.expenses[key];
      }
      return appData.expensesMonth;
    },    
    getBudget: function(){ 
      // budgetMonth - чистый доход в месяц     
      appData.budgetMonth = appData.budget - appData.expensesMonth;     
      appData.budgetDay  = appData.budgetMonth / 30;
    },
    getTargetMonth: function () {
      // за сколько выполним цель
      let target = appData.mission / appData.budgetMonth;
      return target;
    }, 
    asking: function(){
      let amount;
      // вводим наши статьи расходов
        for(let i=0; i<2; i++) {
            let question = String(prompt('Введите обязательную статью расходов?', 'Коммунальные платежи'));
            do {
            amount = +prompt('Во сколько это обойдется?');
            }
            while(isNaN(parseFloat(amount)));
            appData.expenses[question] = amount;
        }
        appData.addExpenses = prompt ('Перечислите возможные затраты', 'Например: Путешествия, развлечения').toLowerCase().split(', '); 
        appData.deposit = confirm('Есть ли у Вас депозит в банке?');
    },
    getStatusIncome: function(){
      if(appData.budgetDay >= 1200){
        return('Ваш уровень дохода высокий');
      } else if (appData.budgetDay < 1200 && appData.budgetDay >= 600 ){
        return('Ваш уровень дохода средний');
      } else if (appData.budgetDay < 600 && appData.budgetDay > 0 ){
        return('К сожалению у вас уровень дохода ниже среднего');
      } else if (appData.budgetDay <= 0 ){
        return('Что-то пошло не так');
      }  
    }
  };
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Расходы на месяц ' + appData.expensesMonth);
// console.log("Чистый доход" + appData.budgetMonth);
// console.log(appData.expenses);    
// console.log(appData.deposit);
// console.log('Цель заработать ' + appData.mission + ' рублей');
// console.log('Период равен ' + appData.period + ' Месяцев');
if (appData.getTargetMonth().toFixed(1) > 0 ){ 
  console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth().toFixed(1)) + ' месяцев');
} else {
  console.log('Цель не будет достигнута');
}
console.log(appData.getStatusIncome());


console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
  console.log (key + ": " + appData[key]);
}

