import React from "react";

function Index({ pokemons }) {
  return (
    <div>
      <h1>See all the pokemon!</h1>
      <ul>
        {pokemons.map(item => {
          return (
            <li key={item.name}>
              <a href={`/pokemon/${item._id}`}>
                {item.name[0].toUpperCase() + item.name.slice(1)}
              </a>
            </li>
          );
        })}
      </ul>

      <a href="/new">
        <br />
        <button>Add Pokemon</button>
      </a>
    </div>
  );
}

export default Index;
