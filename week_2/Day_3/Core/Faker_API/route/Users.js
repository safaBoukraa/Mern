app.post('/api/users/new', (req, res) => {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: parseInt(req.body.age),
    };
  
    res.status(201).json(newUser);
  });