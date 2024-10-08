//C:\Users\anujw\OneDrive\Desktop\StockAnalysis\backend\index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Stock = require('./models/stock'); // Import the Stock model

const app = express();
app.use(cors({
    origin: "https://stock-analysis-frontend-iota.vercel.app"
}));
app.use(express.json());

async function connectMongoDB(){
// Connect to MongoDB
return mongoose.connect('mongodb+srv://anujwanjari5:RHEKPqcROl2Wh8hj@cluster0.vuoxk.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((res) => {
    console.log('Database connected successfully');
    return true;
}).catch(err => {
    console.error('Database connection error:', err);
    return false;
});

}


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


async function startServer(){
    // Connect to MongoDB
    await connectMongoDB();

    // Start the server
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
    
}

startServer();
