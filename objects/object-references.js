// Unless reassigned the object variables will keep on pointing to the same object in memory.

let myAccount = {
  name: "Ashutosh Bhadoria",
  expense: 0,
  income: 0,
};

myOtherAccount = myAccount;
myOtherAccount.income = 1000;

let addExpense = function (account, expenseAmount) {
  account.expense += expenseAmount;
  console.log(account);
};

addExpense(myAccount, 50);
console.log(myOtherAccount);
console.log(myAccount);
