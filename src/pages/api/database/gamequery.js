const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
PORT = 5005;

DB_URL = 'mongodb://localhost:27017/local';
app.use(express.json());
app.use(cors());

mongoose.connect(DB_URL);

const conn = mongoose.connection;
conn.once('open', () => {
    console.log("Connected");  
})
conn.on('error', () =>{
    console.log('Error');
    process.exit();
})

const gameSchema = new mongoose.Schema({
    game_id: Number,
    title: String,
    description: String,
    tags: String,
    how_to_play: String,
    cover: String,
    file: String,
}, {collection: 'games'});
const Game = mongoose.model('Game', gameSchema);

app.get('/gamequery', async(req, res) => {
    if(req.method !== "GET") {
        return res.status(405).json({message: "only get allowed"});
    }
    try {
        const games = await Game.find();
        return res.json(games);
    }
    catch(error) {
        console.error(error);
        return res.status(500).send("Error");
    }
});

app.listen(PORT, ()=> {
    console.log("server running");
})