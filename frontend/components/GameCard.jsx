import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function GameCard() {
  return (
    <Card
      sx={{
        width: 220,
        fontWeight: "bold",
        margin: 2,
        color:'white',
        background:"black",
        borderRadius:3
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="	https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Witcher 3</b>
          </Typography>
          <Typography variant="body2" color="silver">
            Great game i guess
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
