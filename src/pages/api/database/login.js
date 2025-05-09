const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
PORT = 5003;

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

const User = mongoose.models.User || mongoose.model('User', profileSchema);

// export default async function handler(req, res) {
//     if (req.method !== "POST") {
//         return res.status(405).json({message: "not allowed"});
//     }
//     try {
//         const {username, password} = req.body;
//         const user = await User.findOne({username, password});
//         if(user) {
//             return res.status(200).json({message: "Login success"});
//         }
//         else {
//             return res.status(401).json({message: "Wrong password or username"});
//         }
//     }
//     catch(error) {
//         console.error(error);
//         return res.status(500).send("Error logging in");
//     }
// }

app.post('/login', async(req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username, password});
        if(user) {
            res.status(200).json({message: "Login success"});
        }
        else {
            res.status(401).json({message: "Wrong password or username"});
        }
    }
    catch(error) {
        console.error(error);
        res.status(500).send("Error logging in");
    }
});

app.listen(PORT, ()=> {
    console.log("server running");
})