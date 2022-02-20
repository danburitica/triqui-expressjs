const { Schema, model } = require("mongoose");

const gameSchema = Schema({
  winnerPlayer: {
    name: { type: String, required: true },
    symbol: { type: String, required: true },
  },
  loserPlayer: {
    name: { type: String, required: true },
    symbol: { type: String, required: true },
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = model("Game", gameSchema);
