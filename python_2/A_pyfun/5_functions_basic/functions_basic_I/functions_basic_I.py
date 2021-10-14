#1
def number_of_food_groups():
    return 5
print(number_of_food_groups())
    #returns 5

#2
def number_of_military_branches():
    return 5
print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())
    #returns an error because number_of_days_in_a_week_silicon_or_triangle_sides is not defined

#3
def number_of_books_on_hold():
    return 5
    ="keyword from-rainbow">return 10
print(number_of_books_on_hold())
    #returns 5, the comment starting with "=" will not execute because of the return function (return 5)

#4
def number_of_fingers():
    return 5
    print(10)
print(number_of_fingers())
    #returns 5

#5
def number_of_great_lakes():
    print(5)
x = number_of_great_lakes()
print(x)
    #error due to lack of return statement


#6
def add(b,c):
    print(b+c)
print(add(1,2) + add(2,3))
    #returns an error because there's no return "NoneType"

#7
def concatenate(b,c):
    return str(b)+str(c)
print(concatenate(2,5))
    #25 as a string

#8
def number_of_oceans_or_fingers_or_continents():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(number_of_oceans_or_fingers_or_continents())
    #prints 100, prints 10

#10
def addition(b,c):
    return b+c
    return 10
print(addition(3,5))
    #returns 8

#11
b = 500
print(b)
def foobar():
    b ="keyword operator from-rainbow">= 300
    print(b)
print(b)
foobar()
print(b)
    #prints 500, prints 500, runs into error because the function is trying to assign a conditional feature to a variable - TypeError

#12
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
foobar()
print(b)
    #prints 500, prints 500, prints 300, prints 500


#13
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
b=foobar()
print(b)
    #prints 500, prints 500, prints 300, prints 300


#14
def foo():
    print(1)
    bar()
    print(2)
def bar():
    print(3)
foo()
    #returns prints 1, prints 3, prints 2
777777777777777
#15
def foo():
    print(1)
    x = bar()
    print(x)
    return 10
def bar():
    print(3)
    return 5
y = foo()
print(y)
    #prints print 1, print 3, print 5, print 10