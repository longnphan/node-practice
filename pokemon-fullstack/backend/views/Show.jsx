import React from "react";

function Show({ pokemons }) {
  console.log("This is pokemon data in SHOW:", pokemons);

  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{pokemons.name[0].toUpperCase() + pokemons.name.slice(1)}</h2>
      <img src={pokemons.img}></img>
      <a href="/pokemon">
        <br />
        <button>Go Back</button>
      </a>
    </div>
  );
}

export default Show;
