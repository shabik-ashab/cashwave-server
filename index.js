const express = require('express');
const cors = require("cors")
const mongoose = require('mongoose');
const rootRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())

app.use("api/v1", rootRouter)

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/cashwavedb'; // Replace 'mydatabase' with your database name

// Connect to MongoDB
mongoose.connect(mongoURL).then(() => {
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
