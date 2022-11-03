import React, { useState } from "react";
import './styles.css'
import axios from "axios";
import styled from "styled-components";

function App() {
  const [text, setText] = useState("Search Movie");

  const [movie, setMovie] = useState([]);

  const changeText = (event) => {
    setText(event.target.value);
  };

  const getMovie = (e) => {
    e.preventDefault();

    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=a3086dd1`)
      .then((response) => setMovie(response.data.Search));
  };

  return (
    <>
      <Nav>
        <Logo>
          <a href="#">Movie App</a>
        </Logo>
        <SearchBar>
          <form onSubmit={getMovie}>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" />
            <input type="search"
              placeholder="Search"
              aria-label="Search"
              value={text}
              onChange={changeText} />
            <button type="submit">Search</button>
          </form>
        </SearchBar>
      </Nav>

      {movie.map((value, index) => {
        return (
          <Container>
            <Card>
              <img src={value.Poster} />
              <h2>{value.Title}</h2>
              <h3>{value.Year}</h3>
            </Card>
          </Container>
        )
      })}
    </>
  );
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background: #2A325E;
`

const Logo = styled.div``

const SearchBar = styled.div`
  margin-right: 4rem;

  img{
    width: 20px;
    height: 20px;
    position: absolute;
    margin: 0.7rem;
  }

  input{
    font-size: 1rem;
    padding: 0.7rem 9rem 0.7rem 3rem;
    border: none;
  }
  
  button{
    padding: 0.7rem 2rem;
    border: none;
    background: white;
    font-size: 1rem;
    margin-left: 0.5rem;
    cursor: pointer;
  }

  button:hover{
    background: #b1b1b1;
  }

`

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  margin-top: 2rem;
  width: auto;
`

const Card = styled.div`
  background: #2A325E;
  padding: 5px;
  width: 240px;
  text-align: center;
  color: #fff;
  margin: 1rem;
  line-height: 2rem;
  border: 5px solid purple;
  
  img{
    height 300px;
  }

  h2{
    font-size: 1rem;
  }
`

export default App;
