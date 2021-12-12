#declare a class and give it name User:
    #self is a reference to the instance, not the class (init)
    #the first parameter of an instance method within a class will be "self"
class User:
    bank_name = "First National Dojo"
    def __init__(self): #instantiate the new object
        self.name = "Michael"
        self.email = "michael@codingdojo.com"
        self.account_balance = 0


#the call:
User()
guido=User()
monty=User()
guido.bank_name = "Dojo Credit Union"
#Accessing the instance's attributes
print(guido.name) #output: Michael
print(monty.name) #output: Michael
User.bank_name = "Bank of Dojo"
print(guido.bank_name)
print(monty.bank_name)

guido.name = "Guido"
print(guido.name) # output: Guido
monty.name = "Monty"
print(monty.name) # output: Monty



