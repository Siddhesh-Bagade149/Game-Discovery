const mongoose = require("mongoose");

mongoose.connect(
    ""
  )
  .then(() => {
    console.log("successful connection");
  })
  .catch((e) => {
    console.log("connection error");
  });

const gameSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
  rating: String,
});
const gameModel = mongoose.model("gameModel", gameSchema);
module.exports = {
  gameModel,
};
