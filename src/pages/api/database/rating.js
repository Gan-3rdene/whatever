const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
PORT = 5009;

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
    rating: Number,
    gameId: String,
}, {collection: 'rating'});
const Rating = mongoose.model('Rating', profileSchema);

app.get('/rating/:gameId', async(req, res) => {
    try {
        const Ratings = await Rating.find({gameId: req.params.gameId});
        if(!Ratings.length) {
            return res.json({averageRating: 0});
        }
        const totalRating = Ratings.reduce((acc, item) => acc + item.rating, 0);
        const average = totalRating / Ratings.length;

        res.json({averageRating: average.toFixed(1)});
    }
    catch(error) {
        console.error(error);
        res.status(500).send("Error");
    }
});

app.post('/ratingpost', async(req, res) => {
    const {username, gameId, rating} = req.body;

    try {
        const updated = await Rating.findOneAndUpdate(
            {username, gameId},
            {$set: {rating}},
            {new: true, upsert: true, runValidators: true}
        );
        // const item = await Rating.create(req.body);
        res.status(201).json({success: true, data: updated});
    }
    catch (error) {
        console.error("Error adding news", error);
        res.status(400).json({success: false});
    }
});

app.listen(PORT, ()=> {
    console.log("server running");
})