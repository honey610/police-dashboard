const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const  Efir = require('./model/efirmodel');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    app.use(cors({origin:'*'}));
    app.use(bodyParser.json());

    // Tourist app build

app.get('/', (req, res) => {
    
    res.send('Hello from the backend!');
});

app.post("/api/efir", async (req, res) => {
  try {
    const newEfir = new Efir(req.body);
    await newEfir.save();
    res.status(201).json({ message: "E-FIR submitted successfully", data: newEfir });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit E-FIR" });
  }
});

app.get("/api/efir", async (req, res) => {
  try {
    const efirs = await Efir.find();
    res.json(efirs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch E-FIRs" });
  }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});