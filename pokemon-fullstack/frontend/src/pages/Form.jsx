import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  async function addPokemon() {
    let pokemon = { name: input.toLowerCase() };
    const response = await axios.post("/pokemon", pokemon);
    const newPokemon = response.data;
    console.log("new pokemon in Form, addPokemon is:", newPokemon);

    setInput("");
    navigate("/");
  }

  const handleSubmit = e => {
    e.preventDefault();
    addPokemon();
  };

  return (
    <>
      <h1>Add Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button>Add</button>
      </form>
      <button onClick={() => navigate("/")}>Back</button>
    </>
  );
}

export default Form;
