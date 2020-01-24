let money = +prompt("Ваш бюджет на месяц?", ""),
time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }
}

// цикл while
// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
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
//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }
// while (i < 2);

appData.moneyPerDay = appData.budget/30; 
console.log(appData.moneyPerDay);

alert('Бюджет на один день: ' + appData.moneyPerDay);

if (appData.moneyPerDay <= 10) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 10 && (appData.moneyPerDay < 20) ) {
    console.log("Средний уровень достатка");
} else if ( appData.moneyPerDay >= 20 ) {
    console.log("Высокий уровень достатка");
} else  {
    console.log("Произошла ошибка");
}