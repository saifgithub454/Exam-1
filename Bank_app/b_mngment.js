
        // BankAccount class definition
    class BankAccount {
        constructor(accountNumber, ownerName, balance = 0) {
        this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
            }

    deposit(amount) {
                if (amount > 0) {
        this.balance += amount;
    console.log(`Deposited $${amount} to account ${this.accountNumber}. New balance: $${this.balance}`);
                } else {
        console.log("Deposit amount must be positive.");
                }
            }

    withdraw(amount) {
                if (amount > this.balance) {
        console.log("Insufficient funds.");
                } else if (amount > 0) {
        this.balance -= amount;
    console.log(`Withdrew $${amount} from account ${this.accountNumber}. New balance: $${this.balance}`);
                } else {
        console.log("Withdrawal amount must be positive.");
                }
            }

    getBalance() {
                return this.balance;
            }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
            }
        }

    // Creating two instances of BankAccount class
    const account1 = new BankAccount(1001, 'John Doe', 500);
    const account2 = new BankAccount(1002, 'Jane Smith', 1000);

    // Demonstrating the functionality
    console.log("---- Account 1 Info ----");
    account1.displayAccountInfo();
    account1.deposit(200);
    account1.withdraw(100);
    account1.withdraw(700);
    console.log("Current Balance: $" + account1.getBalance());

    console.log("\n---- Account 2 Info ----");
    account2.displayAccountInfo();
    account2.deposit(300);
    account2.withdraw(500);
    console.log("Current Balance: $" + account2.getBalance());
