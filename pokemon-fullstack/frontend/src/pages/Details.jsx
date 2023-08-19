import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function getPokemonById() {
      const response = await axios.get(`/pokemon/${params.id}`);
      setPokemon(response.data);
    }
    getPokemonById();
  }, []);

  const handleClick = async () => {
    const response = await axios.delete(`/pokemon/${params.id}`);
    navigate("/");
  };
  const loaded = () => {
    return (
      <>
        <h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
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
      <br />
      <button onClick={() => navigate("/")}>Back</button>
      <br />
      <br />
      <button onClick={handleClick}>Delete</button>
    </>
  );
}

export default Details;
