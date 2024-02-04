const mongoose = require('mongoose')




mongoose.connect("mongoUrl").then(()=>{ 
    console.log('successful connection');
}).catch(e=>{
    console.log('connection error');
});

const gameSchema = mongoose.Schema({
    name: String,
    imageUrl: String
})
const gameModel = mongoose.model('gameModel', gameSchema);
module.exports = {
    gameModel
}