const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
PORT = 5000;

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
}, {collection: 'users'});
const User = mongoose.model('User', profileSchema);

app.get('/users', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch(error) {
        console.error(error);
        res.status(500).send("Error");
    }
});

app.listen(PORT, ()=> {
    console.log("server running");
})