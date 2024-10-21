
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Welcome to DressStore application');
  });
  
  mongoose.connect('mongodb://localhost:27017/Skeleton', {  
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
  const contactRoutes = require('./routes/contactRoutes');
  const userRoutes = require('./routes/userRoutes');
  
  app.use(express.json());
  app.use('/api/contacts', contactRoutes);
  app.use('/api/users', userRoutes);
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  