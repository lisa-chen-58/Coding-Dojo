// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

// Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Prediction
// This will print Tesla and Mercedes

// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

// Predict the output
console.log(name);
console.log(otherName);

// Prediction 2
// otherName undefined --> I was close.. name is not defined. the way they're using name is accessing a dictionary within a list within the block scope. name is not within these fields.

// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

//Predict the output
console.log(password);
console.log(hashedPassword);

// Prediction 3
// the password provided is not within the object which is immutable {}. Therefore, this will print undefined

// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

//Predict the output
console.log(first == second);
console.log(first == third);

//Prediction 4
// false and true? <-- confirmed (2 is not equal to 5 and 2 is equal to 2)

// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// Prediction 5
// prints 'value', prints [1,5,1,8,3,3], prints 1, prints 5
