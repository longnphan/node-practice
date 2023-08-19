import React from "react";

function New() {
  return (
    <div>
      <h1>Add Pokemon</h1>
      <form action="/new" method="POST">
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name"></input>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default New;
