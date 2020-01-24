let money = prompt("Ваш бюджет на месяц?", ""),
time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expensesItem = prompt('Введите обязательную статью расходов в этом месяце', ''),
expensesCost = prompt('Во сколько обойдется?', '');
appData.expenses[expensesItem] = expensesCost;

alert(appData.budget/30);