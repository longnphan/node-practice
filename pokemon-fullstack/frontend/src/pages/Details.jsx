import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();
  const params = useParams();
  console.log("This is params in Details page:", params.id);

  useEffect(() => {
    async function getPokemonById() {
      const response = await axios.get(`/pokemon/${params.id}`);
      console.log(response.data);

      setPokemon(response.data);
    }
    getPokemonById();
  }, []);

  const loaded = () => {
    return (
      <>
        <h1>{pokemon.name[0] + pokemon.name.slice(1)}</h1>
        <img src={pokemon.img} />
      </>
    );
  };

  const notLoaded = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <>
      {pokemon ? loaded() : notLoaded()}
      <br />
      <button onClick={() => navigate("/")}>Back</button>
    </>
  );
}

export default Details;
