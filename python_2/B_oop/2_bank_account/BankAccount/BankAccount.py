#The BankAccount class should have a balance. When a new BankAccount instance is created, if an amount is given, the balance of the account should initially be set to that amount; otherwise, the balance should start at $0. The account should also have an interest rate, saved as a decimal (i.e. 1% would be saved as 0.01), which should be provided upon instantiation. (Hint: when using default values in parameters, the order of parameters matters!)

class BankAccount:
    # don't forget to add some default values for these parameters!
    all_accounts=[]
    def __init__(self, int_rate=0.03, balance=0): 
        self.int_rate=int_rate
        self.balance=balance
        BankAccount.all_accounts.append(self)
        # don't worry about user info here; we'll involve the User class soon

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
            # withdraw(self, amount) - decreases the account balance by the given amount if there are sufficient funds; if there is not enough money, print a message "Insufficient funds: Charging a $5 fee" and deduct $5
        if self.balance < 0:
            print('Insufficient funds: Charging a $5 fee')
            self.balance -= 5
            return self
        else:
            self.balance -= amount
            return self

    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self
            
    def yield_interest(self):
            # yield_interest(self) - increases the account balance by the current balance * the interest rate (as long as the balance is positive)
        if self.balance < 0:
            print('Insufficient funds')
            return self
        else:
            self.balance *= self.int_rate
            return self

    @classmethod
        #NINJA BONUS: use a classmethod to print all instances of a Bank Account's info
    def all_balances(cls):
        for account in cls.all_accounts:
            account.display_account_info()

checking = BankAccount(0.03,0)
savings = BankAccount(0.02,0)

# To the first account, make 3 deposits and 1 withdrawal, then yield interest and display the account's info all in one line of code (i.e. chaining)
checking.deposit(100).deposit(500).deposit(500).withdraw(200)

# To the second account, make 2 deposits and 4 withdrawals, then yield interest and display the account's info all in one line of code (i.e. chaining)
savings.deposit(300).deposit(2000).withdraw(100).withdraw(100).withdraw(200).withdraw(200)

BankAccount.all_balances()

