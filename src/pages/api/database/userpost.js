const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
PORT = 5002;

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

const profileSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    phone: Number,
}, {collection: 'users'});
const User = mongoose.model('User', profileSchema);

app.post('/users', async(req, res) => {
    try {
        const newUser = await User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            phone: req.body.phone,
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(error) {
        console.error(error);
        res.status(500).send("Error saving");
    }
});

app.listen(PORT, ()=> {
    console.log("server running");
})