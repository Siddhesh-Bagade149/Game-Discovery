import { useEffect, useState } from "react";

import GameCard from "../components/GameCard";
import { Button, Grid } from "@mui/material";
let globalId = 1;
export default function HomePage(props) {
  const [games, setGames] = useState([]);
  const [gameName, setGameName] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [gameRating, setGamerating] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/home").then(async (res) => {
      let data = await res.json();
      setGames(data.games);
    });
  }, []);

  //////////////////////////////////////////////

  const addGame = async (newGameData) => {
    try {
      const response = await fetch("http://localhost:3000/home", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGameData),
      });

      if (response.ok) {
        const newGame = await response.json();
        // console.log('new game is'+response);
        console.log('new game is'+newGameData);
        setGames((prevGames) => [...prevGames, newGameData]); // Optimistically update local state
      } else {
        // Handle error (e.g., display error message to user)
      }
    } catch (error) {
      // Handle network or other errors
    }
  };
  ////////////////////////////////
  return (
    <>
      <Grid container spacing={2}>
        {games.map((game) => {
          return (
            <GameCard
              name={game.name}
              imageUrl={game.imageUrl}
              rating={game.rating}
              key={game.id}
            />
          );
        })}
      </Grid>
      <div className="input-box">
        <div className="input-form">
          {/* these inputs are called controllede components. Because they get their value from the state. */}
          <form id="form" autoComplete="off">
            <input
              name="name"
              placeholder="Enter name of game"
              onChange={(ev) => {
                const value = ev.target.value;
                setGameName(value);
              }}
            />
            <input
              name="imageUrl"
              placeholder="enter img url"
              onChange={(ev) => {
                const value = ev.target.value;
                setGameImage(value);
              }}
              onfocus="this.value=''"
            />
            <input
              type="text"
              name="rating"
              placeholder="enter rating"
              onChange={(ev) => {
                const value = ev.target.value;
                setGamerating(value);
              }}
              onfocus="this.value=''"
            />
          </form>
        </div>

        <Button
          variant="contained"
          sx={{
            p: 1.5,
            margin: 2,
            border: 1,
            borderColor: "GrayText",
          }}
          onClick={() => {
            addGame({
                id: globalId++,
                name: gameName,
                imageUrl: gameImage,
                rating: gameRating,
              })
          }}
        >
          <b>Add New Game</b>
        </Button>
      </div>
    </>
  );
}
