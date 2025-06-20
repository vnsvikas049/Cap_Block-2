function createBankAccount(initialBalance) {
  let balance = Number(initialBalance);

  if (isNaN(balance) || balance < 0) {
    throw new Error("Invalid initial balance.");
  }

  return {
    deposit(amount) {
      if (amount <= 0 || isNaN(amount)) {
        console.log("Invalid deposit amount.");
        return;
      }
      balance += amount;
      console.log(`Deposited: $${amount.toFixed(2)}`);
    },

    withdraw(amount) {
      if (amount <= 0 || isNaN(amount)) {
        console.log("Invalid withdrawal amount.");
        return;
      }
      if (amount > balance) {
        console.log("Insufficient funds.");
        return;
      }
      balance -= amount;
      console.log(`Withdrew: $${amount.toFixed(2)}`);
    },

    getBalance() {
      return `Current Balance: $${balance.toFixed(2)}`;
    }
  };
}
const myAccount = createBankAccount(1000);

myAccount.deposit(500);         // Deposited: $500.00
myAccount.withdraw(200);        // Withdrew: $200.00
console.log(myAccount.getBalance()); // Current Balance: $1300.00

// Trying to access balance directly:
console.log(myAccount.balance); // undefined ✅ protected
