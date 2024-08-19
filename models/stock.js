//C:\Users\anujw\OneDrive\Desktop\StockAnalysis\backend\models\stock.js
const mongoose = require('mongoose');

// Define the schema for the 'stocks' collection
const stockSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subSector: { type: String, required: true },
    marketCap: { type: Number, required: true }
});

// Create and export the model based on the schema
const Stock = mongoose.model('Stock', stockSchema, 'stocks');

module.exports = Stock;
