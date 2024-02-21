const express = require('express');
const cors = require('cors');
const { gameModel } = require('./db');

const app = express();

app.use(express.json());
app.use(cors());

// let globalId=1;

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
        id:createPayload.id,
        name: createPayload.name,
        imageUrl: createPayload.imageUrl,
        rating: createPayload.rating
    })
    res.json({
        msg: 'game added successfully'
    })
})

app.delete('/home',async (req,res)=>{
    // let delId=req.body.id;
    // await gameModel.findOneAndDelete(({id:delId}),(err,data)=>{
    //     if(err){
    //         res.send('error:'+err)
    //     }
    //     res.send('deleted:'+data)
    // })
    res.send('inside delete')
})

//delete functionality with model.deleteOne()
app.listen(3000, () => {
    console.log('port running aT 3000');
});