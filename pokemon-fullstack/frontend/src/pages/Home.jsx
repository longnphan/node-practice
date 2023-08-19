import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  const renderPokemons = pokemons.map(item => (
    <Link to={`/details/${item._id}`} key={item._id}>
      <h2>{item.name}</h2>
    </Link>
  ));

  useEffect(() => {
    async function getPokemons() {
      const response = await axios.get("/pokemon");
      console.log(response.data);

      setPokemons(response.data);
    }
    getPokemons();
  }, []);

  return (
    <>
      <h1>Gotta Catch Them All</h1>
      {renderPokemons}

      <button onClick={() => navigate("/form")}>Add Pokemon</button>
    </>
  );
}

export default Home;
