import { useState } from "react";

import "./App.css";
import GameCard from "../components/GameCard";
import { Grid } from "@mui/material";

function App() {
  const [games, setGames] = useState([]);
  //this method is not good at all send infinite requests :-(
  fetch("http://localhost:3000/home").then(async (res) => {
    let data = await res.json();
    setGames(data.games);
  });
  return (
    <div>
      <Grid container spacing={2}>
        {
          games.map((game)=>{
            return (
              <GameCard 
                name={game.name}
                imageUrl={game.imageUrl}
                rating={game.rating}
              />
            )
          })
        }
        {/* <GameCard
          name="Witcher 3"
          imageUrl="https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
          score="9"
        /> */}
      </Grid>
    </div>
  );
}

export default App;
