let startBtn = document.getElementById('start'),
budgetValue = document.querySelector('.budget-value'),
daybudgetValue = document.querySelector('.daybudget-value'),
levelValue = document.querySelector('.level-value'),
expensesValue = document.querySelector('.expenses-value'),
optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
incomeValue = document.querySelector('.income-value'),
monthsavingsValue = document.querySelector('.monthsavings-value'),
yearsavingsValue = document.querySelector('.yearsavings-value'),
expensesItem = document.querySelectorAll('.expenses-item'),
approveExpensesBtn = document.querySelector('button'),
approveoptiondlExpensesBtn = document.querySelectorAll('button')[1],
calculateBtn = document.querySelectorAll('button')[2],
expensesOptionalItem = document.querySelectorAll('.optionalexpenses-item'),
chooseIncome = document.querySelector('.choose-income'),
savings = document.querySelector('#savings'),
chooseSum = document.querySelector('.choose-sum'),
choosePercent = document.querySelector('.choose-percent'),
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');

let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses : function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && 
                 a != "" && b != "" && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget : function () {
        appData.moneyPerDay = (appData.budget/30).toFixed(); 
        console.log(appData.moneyPerDay);
        alert('Бюджет на один день: ' + appData.moneyPerDay);
    },
    detectLevel : function () {
        if (appData.moneyPerDay <= 10) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 10 && (appData.moneyPerDay < 20) ) {
            console.log("Средний уровень достатка");
        } else if ( appData.moneyPerDay >= 20 ) {
            console.log("Высокий уровень достатка");
        } else  {
            console.log("Произошла ошибка");
        }
    },
    checkSavings : function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let optionalExpense = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i+1] = optionalExpense;
        }
        console.log(appData.optionalExpenses);
    },
    chooseIncome: function () {
            let items = prompt('что несет дополнительный доход? (Перечислите через запятую)', '');
            if (typeof(items) != "string" || items == "" || typeof(items) == null) {
                alert("Введите данные в виде строки");
            } else {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?', ''));
                appData.income.sort();
            } 
        
        appData.income.forEach(function(item, index) {
            alert("Способы доп. заработка: " + (index+1) + " - " + item);
        });
    }     
};

appData.chooseIncome();

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}
