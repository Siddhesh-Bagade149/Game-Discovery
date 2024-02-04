const express = require('express');
const cors = require('cors');
const { gameModel } = require('./db');

const app = express();

app.use(express.json());
app.use(cors());


//  /home will be the home page 
app.get('/home', async (req, res) => {
    let games = await gameModel.find();
    res.json({
        games: games
    })
})

app.post('/home', async (req, res) => {
    let createPayload = req.body;
    await gameModel.create({
        name: createPayload.name,
        imageUrl: createPayload.imageUrl
    })
    res.json({
        msg: 'game added successfully'
    })
})

//delete functionality with model.deleteOne()
app.listen(3000, () => {
    console.log('port running aT 3000');
});