const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/cashwavedb'; // Replace 'mydatabase' with your database name

// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Define routes and start server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
