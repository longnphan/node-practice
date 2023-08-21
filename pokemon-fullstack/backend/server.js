const express = require("express");
require("dotenv").config();
const mongoConfig = require("./config");
mongoConfig();
const Pokemon = require("./models/Pokemons");

const app = express();
const PORT = 3000;
app.use(express.json());

// "index" route
app.get("/api/pokemon", async (req, res) => {
  try {
    pokemons = await Pokemon.find();
    console.log("lists of pokemons:", pokemons);
    res.json(pokemons);
  } catch (err) {
    console.log(err.message);
    res.json({ error: err.message });
  }
});

// "delete" route
app.delete("/api/pokemon/:id", async (req, res) => {
  try {
    await Pokemon.findByIdAndDelete(req.params.id);
    res.json({ message: "successfully deleted" });
  } catch (err) {
    console.log(err.message);
    res.json({ error: err.message });
  }
});

// "get" by id route
app.get("/api/pokemon/:id", async (req, res) => {
  let pokemons;

  try {
    pokemons = await Pokemon.findById(req.params.id);
    console.log(pokemons);
    res.json(pokemons);
  } catch (err) {
    console.log(err.message);
    res.json({ error: err.message });
  }
});

// "create" route
app.post("/api/pokemon", async (req, res) => {
  const pokemonName = req.body.name;
  try {
    let pokemon = await Pokemon.create({
      name: pokemonName,
      img: `http://img.pokemondb.net/artwork/${pokemonName}.jpg`,
    });
    console.log(pokemon);
    res.json(pokemon);
  } catch (err) {
    console.log(err.message);
    res.json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
