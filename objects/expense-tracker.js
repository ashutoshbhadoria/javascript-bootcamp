let myAccount = {
  name: "Ashutosh Bhadoria",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, expenseAmount) {
  account.expenses += expenseAmount;
};

let addIncome = function (account, incomeAmount) {
  account.income += incomeAmount;
};

let resetAccount = function (account) {
  account.income = 0;
  account.expenses = 0;
};

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 1000);
addExpense(myAccount, 50);
addExpense(myAccount, 150);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
