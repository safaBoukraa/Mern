app.post('/api/companies/new', (req, res) => {
    const newCompany = {
      name: req.body.name,
      address: req.body.address,
      revenue: parseInt(req.body.revenue),
    };
  
    res.status(201).json(newCompany);
  });