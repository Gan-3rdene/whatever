const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
PORT = 5006;

DB_URL = 'mongodb://localhost:27017/local';
app.use(express.json());
app.use(cors());

mongoose.connect(DB_URL);

const conn = mongoose.connection;
conn.once('open', () => {
    console.log("Connected");  
})
conn.on('error', () =>{
    console.log('Connection error');
    process.exit();
})

const newsSchema = new mongoose.Schema({
    news_id: Number,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    author: String,
}, {collection: 'news'});
const News = mongoose.model('news', newsSchema);

app.get("/news", async(req, res) => {
    try {
        const items = await News.find();
        res.status(200).json(items);
    }
    catch (error) {
        res.status(400).json({success: false});
    }
});

app.post("/newspost", async(req, res) => {
    try {
        const item = await News.create(req.body);
        res.status(201).json({success: true, data: item});
    }
    catch (error) {
        console.error("Error adding news", error);
        res.status(400).json({success: false});
    }
});

app.listen(PORT, ()=> {
    console.log("server running");
});