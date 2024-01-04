const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());




app.get('/api/user/company', (req, res) => {
   
    const newUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.random.number(100)
    };
  

    const newCompany = {
      name: faker.company.companyName(),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
      },
      revenue: faker.finance.amount()
    };
  
    // Return the new user and new company as a single JSON object
    res.status(200).json({ user: newUser, company: newCompany });
  });


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );




app.listen( port, () => console.log(`Server is running on port ${port}`) );