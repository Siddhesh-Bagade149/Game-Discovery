import { useEffect, useState } from "react";


import GameCard from "../components/GameCard";
import { Button, Grid } from "@mui/material";
let globalId=1;
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

        {/* {console.log(games.length)} */}

        <Button
          variant="contained"
          sx={{
            p: 1.5,
            margin: 2,
            border: 1,
            borderColor: "GrayText",
          }}
          onClick={() => {
            fetch("http://localhost:3000/home", {
              method: "POST",
              body: JSON.stringify({
                id:globalId++,
                name: gameName,
                imageUrl: gameImage,
                rating: gameRating,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            // setGameImage('');
            // setGameName('');
            // setGamerating('');
          }}
        >
          <b>Add New Game</b>
        </Button>
      </div>
    </>
  );
}
