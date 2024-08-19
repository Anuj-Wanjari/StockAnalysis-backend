//C:\Users\anujw\OneDrive\Desktop\StockAnalysis\backend\index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Stock = require('./models/stock'); // Import the Stock model

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/stocksDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected successfully');
}).catch(err => {
    console.error('Database connection error:', err);
});

// Define a route to send sample data
app.get('/api/stocks/nifty50', async (req, res) => {
    try {
        // Fetch all stock data from the 'stocks' collection
        const data = await Stock.find({ marketCap: { $gte: 90556.12, $lte: 2002983.00 } });
        
        res.json(data); // Send the data as JSON response
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});


app.get('/api/stocks/niftymidcap', async (req, res) => {
    try {
        // Fetch all stock data from the 'stocks' collection
        const data = await Stock.find({ marketCap: { $gte: 29547.26, $lte: 90556.12 } });
        
        res.json(data); // Send the data as JSON response
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});


app.get('/api/stocks/niftysmallcap', async (req, res) => {
    try {
        // Fetch all stock data from the 'stocks' collection
        const data = await Stock.find({ marketCap: { $gte: 0.00, $lte: 29547.26 } });
        
        res.json(data); // Send the data as JSON response
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

