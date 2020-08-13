import React from 'react';
import styled from 'styled-components';

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

  return (
    <Navbar>
      <h3>Carlos</h3>
      <p>List of Movies: </p>
    </Navbar>
  )
}

export default Nav;
