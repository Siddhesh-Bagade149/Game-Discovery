import { useState } from "react";

import "./App.css";
import GameCard from "../components/GameCard";
import { Button, Grid } from "@mui/material";
// import { positions } from '@mui/system';

function App() {
  const [games, setGames] = useState([]);
  const [gameName, setGameName] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [gameRating, setGamerating] = useState("");
  //this method is not good at all send infinite requests :-(
  fetch("http://localhost:3000/home").then(async (res) => {
    let data = await res.json();
    setGames(data.games);
  });
  return (
    <>
      <Grid container spacing={2}>
        {games.map((game) => {
          return (
            <GameCard
              name={game.name}
              imageUrl={game.imageUrl}
              rating={game.rating}
            />
          );
        })}
      </Grid>
      <div className="input-box">
        <div className="input-form">
          {/* these inputs are called controllede components. Because they get their value from the state. */}
          <form id="form">
            <input
              type="text"
              name="name"
              placeholder="Enter name of game"
              onChange={(ev) => {
                const value = ev.target.value;
                setGameName(value);
              }}
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="enter img url"
              onChange={(ev) => {
                const value = ev.target.value;
                setGameImage(value);
              }}
            />
            <input
              type="text"
              name="rating"
              placeholder="enter rating"
              onChange={(ev) => {
                const value = ev.target.value;
                setGamerating(value);
              }}
            />
          </form>
        </div>
        <Button
          variant="contained"
          sx={{
            p: 1.5,
            border: 1,
            borderColor: 'GrayText'
          }}
          onClick={() => {
            fetch("http://localhost:3000/home", {
              method: "POST",
              body: JSON.stringify({
                name: gameName,
                imageUrl: gameImage,
                rating: gameRating,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });
          }}
        >
          <b>Add New Game</b>
        </Button>
      </div>
    </>
  );
}

export default App;
