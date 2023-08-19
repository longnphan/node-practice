const express = require("express");
require("dotenv").config();
const mongoConfig = require("./config");
mongoConfig();
const Pokemon = require("./models/Pokemons");

const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

const jsxEngine = require("jsx-view-engine");
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", async (req, res) => {
  try {
    pokemons = await Pokemon.find();
    console.log("lists of pokemons:", pokemons);
  } catch (err) {
    console.log("Failed to create a Pokemon document: ", err);
  }

  res.render("Index", { pokemons });
});

app.get("/pokemon/:id", async (req, res) => {
  let pokemons;

  try {
    pokemons = await Pokemon.findById(req.params.id);
    console.log(pokemons);
  } catch (err) {
    console.log(
      "Failed to find Pokemon document with id " + req.params.id,
      err
    );
  }
  res.render("Show", { id: req.params.id, pokemons });
});

app.get("/new", async (req, res) => {
  res.render("New");
});

app.post("/new", async (req, res) => {
  const pokemonName = req.body.name.toLowerCase();
  try {
    let pokemon = await Pokemon.create({
      name: pokemonName,
      img: `http://img.pokemondb.net/artwork/${pokemonName}.jpg`,
    });
    console.log(pokemon);
  } catch (err) {
    console.log("Failed to create a Pokemon document: ", err);
  }
  res.redirect("/pokemon");
});

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
