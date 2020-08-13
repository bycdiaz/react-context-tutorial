import React, { useContext } from 'react';
import styled from 'styled-components';

import { MovieContext } from "./MovieContext";

const Navbar = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
padding: 10px 0px;

color: white;
background-color: #362c43;

`

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  const numberOfMovies = movies.length;

  return (
    <Navbar>
      <h3>Carlos</h3>
        <p>List of Movies: {numberOfMovies}</p>
    </Navbar>
  )
}

export default Nav;
