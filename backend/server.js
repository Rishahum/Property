const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();



  const infoSchema = new mongoose.Schema({
    superarea: String,
    status: String,
    floor: String,
    transaction: String,
    furnishing: String,
    Bedroom: Number,
    PriceBreakup: String, 
    BookingAmount: Number, 
    Address: String,
    Contact: String,
  });


const User = mongoose.model('infos', infoSchema);

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
}));
// app.use(bodyparser.json());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

app.get('/', async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
    console.log(data)
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(2000, () => {
  console.log('Server is running on port 2000');
});
