const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
PORT = 5007;

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


app.delete("/newsdelete/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deletedItem = await News.deleteOne({ news_id: id});
        if (deletedItem.deletedCount === 0) {
            return res.status(404).json({success: false, message: "news not found"});
        }
        res.status(200).json({ success: true });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});

app.put("/newsupdate/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {title, description, urlToImage} = req.body;
        const updatedItem = await News.findOneAndUpdate(
            {news_id: id},
            {title, description, urlToImage},
            {new: true}
        );
        // const item = await Item.findByIdAndUpdate(id, req.body, {
        //     new: true,
        //     runValidators: true,
        // });
        if (!updatedItem) {
            return res.status(404).json({success:false, message:"News not found"});
        }
        res.status(200).json({success: true, data: updatedItem});
    }
    catch (error) {
        res.status(400).json({success: false});
    }
});


app.listen(PORT, ()=> {
    console.log("server running");
})