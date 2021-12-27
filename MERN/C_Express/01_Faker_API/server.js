const express = require("express");
const faker = require("faker");

const app = express();
const port = 8000;

const createUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
})

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
})

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json( newUser );
})

app.get("/api/user/company", (req, res) => {
    const newCompany = createCompany();
    res.json( newCompany );
})

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const newEverything = {
        user: newUser,
        company: newCompany,
    }
    res.json(newEverything)
})

app.listen(port, () => console.log(`express server running on port ${port}`))