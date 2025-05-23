const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
PORT = 5008;

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

const profileSchema = new mongoose.Schema({
    username: String,
    comment: String,
    gameId: String,
}, {collection: 'comments'});
const Comment = mongoose.model('Comment', profileSchema);

app.get('/comments/:gameId', async(req, res) => {
    try {
        const Comments = await Comment.find({gameId: req.params.gameId});
        res.json(Comments);
    }
    catch(error) {
        console.error(error);
        res.status(500).send("Error");
    }
});

app.post('/commentpost', async(req, res) => {
    try {
        const item = await Comment.create(req.body);
        res.status(201).json({success: true, data: item});
    }
    catch (error) {
        console.error("Error adding news", error);
        res.status(400).json({success: false});
    }
});

app.listen(PORT, ()=> {
    console.log("server running");
})