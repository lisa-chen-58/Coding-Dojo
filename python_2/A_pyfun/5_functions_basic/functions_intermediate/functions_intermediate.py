#1. UPDATE VALUES IN DICTIONARIES AND LISTS
x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

    # 1. Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x[1][0]=15

    # 2. Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]['last_name']='Bryant'

    # 3. In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0]='Andres'

    # 4. Change the value 20 in z to 30
z[0]['y']=30

#2. ITERATE THROUGH A LIST OF DICTIONARIES
# Create a function iterateDictionary(some_list) that, given a list of dictionaries, the function loops through each dictionary in the list and prints each key and the associated value. For example, given the following list:

students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
# iterateDictionary(students) 
# # should output: (it's okay if each key-value pair ends up on 2 separate lines;

def iterate_dictionary(some_list): #key-value pair on 2
    for i in range(len(some_list)):
        for key, val in some_list[i].items():
            print(f"{key} - {val}, ")
# iterate_dictionary(students)

def iterate_dictionary1(some_list): #key-valu pair one 1
    for i in range(len(some_list)):
        new_list=""
        for key,val in some_list[i].items():
            new_list += f"{key} - {val}, "
        print(new_list)
# iterate_dictionary1(students)


# print(students[0]['first_name'])
# print(students[0]['last_name'])
# print(students[1]['first_name'])
# print(students[1]['last_name'])
# print(students[2]['first_name'])
# print(students[2]['last_name'])
# print(students[3]['first_name'])
# print(students[3]['last_name'])

#3 GET VALUES FROM A LIST OF DICTIONARIES

#Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, the function prints the value stored in that key for each dictionary. For example, iterateDictionary2('first_name', students) should output:

def iterateDictionary2(key_name,some_list):
    for i in range(len(some_list)):
        for key,val in some_list[i].items():
            if key==key_name:
                print(val)
# iterateDictionary2('first_name',students)
# iterateDictionary2('last_name',students)

#4. ITERATE THROUGH A DICTIONARY WITH LIST VALUES
#Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list. For example:

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
    }

def printInfo(some_dict):
    for key,val in some_dict.items():              
        print(" ")
        print(f"{len(val)} {key.upper()}")
        for i in range(len(val)):
            print(val[i])
# printInfo(dojo)

# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon
