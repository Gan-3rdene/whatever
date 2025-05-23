const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
PORT = 5004;

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

app.post('/gamepost', async(req, res) => {
    try {
        const newGame = await Game({
            game_id: "",
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
            how_to_play: req.body.how_to_play,
            cover: req.body.cover,
            file: req.body.file,
        });
        const savedUser = await newGame.save();
        res.status(200).json(savedUser);
    }
    catch(error) {
        console.error(error);
        res.status(500).send("Error saving game");
    }
});

app.listen(PORT, ()=> {
    console.log("server running");
})