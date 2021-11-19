const express = require('express');
const faker = require('faker');
const app = express();
const port = 8000;

class User {
  constructor() {
    this._id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumberFormat();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this._id = faker.datatype.uuid();
    this.name = faker.company.companyName();
    this.address = faker.address.streetAddress();
    this.street = faker.address.streetName();
    this.city = faker.address.cityName();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/user/new', (req, res) => {
  res.json(new User());
});

app.get('/api/company/new', (req, res) => {
  res.json(new Company());
});

app.get('/api/user/company/', (req, res) => {
  res.json({ User: new User(), Company: new Company() });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' });
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${port}`),
);
