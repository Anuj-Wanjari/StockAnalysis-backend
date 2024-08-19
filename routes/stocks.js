//C:\Users\anujw\OneDrive\Desktop\StockAnalysis\backend\routes\stocks.js
const express = require('express');
const Stock = require('../models/stock');
const router = express.Router();

// Nifty50 Stocks - Market cap between 90556.12 and 2002983.00
router.get('/stocks/nifty50', async (req, res) => {
    try {
        const stocks = await Stock.find({ marketCap: { $gte: 90556.12, $lte: 2002983.00 } });
        if (!stocks.length) {
            console.log('No stocks found for Nifty50.');
        }
        res.json(stocks);
    } catch (error) {
        console.error('Error fetching Nifty50 stocks:', error);
        res.status(500).json({ message: error.message });
    }
});

// router.get('/stocks/nifty50', async (req, res) => {
//     try {
//         const stocks = await Stock.find({});
//         console.log('Fetched stocks:', stocks);
//         res.json(stocks);
//     } catch (error) {
//         console.error('Error fetching stocks:', error);
//         res.status(500).json({ message: error.message });
//     }
// });


// Nifty Midcap Stocks - Market cap between 29547.26 and 90556.12
router.get('/stocks/niftymidcap', async (req, res) => {
    try {
        const stocks = await Stock.find({ marketCap: { $gte: 29547.26, $lte: 90556.12 } });
        if (!stocks.length) {
            console.log('No stocks found for Nifty Midcap.');
        }
        res.json(stocks);
    } catch (error) {
        console.error('Error fetching Nifty Midcap stocks:', error);
        res.status(500).json({ message: error.message });
    }
});

// Nifty Smallcap Stocks - Market cap between 0.00 and 29547.26
router.get('/stocks/niftysmallcap', async (req, res) => {
    try {
        const stocks = await Stock.find({ marketCap: { $gte: 0.00, $lte: 29547.26 } });
        if (!stocks.length) {
            console.log('No stocks found for Nifty Smallcap.');
        }
        res.json(stocks);
    } catch (error) {
        console.error('Error fetching Nifty Smallcap stocks:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
