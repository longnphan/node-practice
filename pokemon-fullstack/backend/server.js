const express = require("express");
require("dotenv").config();
const mongoConfig = require("./config");
mongoConfig();
const Pokemon = require("./models/Pokemons");

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// "index" route
app.get("/pokemon", async (req, res) => {
  try {
    pokemons = await Pokemon.find();
    console.log("lists of pokemons:", pokemons);
    res.json(pokemons);
  } catch (err) {
    console.log(err.message);
    res.json({ error: err.message });
  }
});

app.get("/pokemon/:id", async (req, res) => {
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
app.post("/pokemon", async (req, res) => {
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
