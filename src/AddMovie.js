import React, { useState, useContext } from "react";

import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movies, setMovies] = useContext(MovieContext);

  function updateName(event) {
    setName(event.target.value)
  }

  function updatePrice(event) {
    setPrice(event.target.value)
  }

  function addMovie(event) {
    event.preventDefault();
    setMovies(prevMovies => [...prevMovies, {
      name: name,
      price: `$${price}`,
    }])
  }

  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={updateName}
      ></input>
      <input
        type="text"
        name="price"
        value={price}
        onChange={updatePrice}
      ></input>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default AddMovie;
