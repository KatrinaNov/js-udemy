let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "")
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

let optionalExpenses = {};

function chooseExpenses() {
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
}
chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed(); 
    console.log(appData.moneyPerDay);
    alert('Бюджет на один день: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    appData.moneyPerDay = (appData.budget/30).toFixed(); 
    if (appData.moneyPerDay <= 10) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 10 && (appData.moneyPerDay < 20) ) {
        console.log("Средний уровень достатка");
    } else if ( appData.moneyPerDay >= 20 ) {
        console.log("Высокий уровень достатка");
    } else  {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
 for (let i = 0; i < 3; i++) {
     let optionalExpense = prompt('Статья необязательных расходов?', '');
     optionalExpenses[i+1] = optionalExpense;
 }
 console.log(optionalExpenses);
}
chooseOptExpenses();


// цикл while
// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && 
//        a != "" && b != "" && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }

// цикл do while
// let i = 0;
// do  {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null &&
// a != "" && b != "" && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }
// while (i < 2);