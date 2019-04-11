let money = prompt("Ваш буджет на месяц?","362"),
    time = prompt("Введите дату в формате YYYY-MM-DD","2019 04 11"),
    expensesQuestionOne = prompt("Введите обязательную статью расходов в этом месяце"),
    expensesQuestionTwo = prompt("Во сколько обойдется?"),
    addData = { moneyData : money, timeData : time, expenses: {
        expensesQuestionOne : expensesQuestionTwo
    }, optionalExpensesData : optionalExpenses, incomeData : income, saving : false };

alert(addData.moneyData);