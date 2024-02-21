const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://siddhesh:CNwdQmdIvwcOGoGb@cluster0.rbwuu52.mongodb.net/gameData"
  )
  .then(() => {
    console.log("successful connection");
  })
  .catch((e) => {
    console.log("connection error");
  });

const gameSchema = mongoose.Schema({
  id: Number,
  name: String,
  imageUrl: String,
  rating: String,
});
const gameModel = mongoose.model("gameModel", gameSchema);
module.exports = {
  gameModel,
};
