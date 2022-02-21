const { Schema, model } = require("mongoose");

const gameSchema = Schema({
  playerOne: {
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    winner: { type: Boolean, required: true },
  },
  playerTwo: {
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    winner: { type: Boolean, required: true },
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = model("Game", gameSchema);
