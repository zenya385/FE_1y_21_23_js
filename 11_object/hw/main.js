


const bankAccount = {
    ownerName: "Alina",
    accountNumber: 5,
    balance: 600,


    deposit(money) {
    this.balance += money
    },

    withdraw(money) {
        this.balance -= money
   },
}

bankAccount.deposit(100)
bankAccount.deposit(200)
bankAccount.deposit(300)
bankAccount.withdraw(100)


console.log(bankAccount.balance);








