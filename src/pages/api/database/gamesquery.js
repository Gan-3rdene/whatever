const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
PORT = 5001;

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
    game_id: Number,
    title: String,
    description: String,
    tags: String,
    how_to_play: String,
    cover: String,
}, {collection: 'games'});
const Game = mongoose.model('Game', profileSchema);

app.get('/games', async(req, res) => {
    try {
        const Games = await Game.find();
        res.json(Games);
    }
    catch(error) {
        console.error(error);
        res.status(500).send("Error");
    }
});

app.listen(PORT, ()=> {
    console.log("server running");
})