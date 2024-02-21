import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, IconButton } from "@mui/material";

//using react.memo to stop everything to rerender
export default React.memo(function GameCard(props) {
  return (
    <Card
      sx={{
        width: 220,
        fontWeight: "bold",
        margin: 2,
        color: "white",
        background: "black",
        borderRadius: 3,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={props.imageUrl}
          alt="game image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>{props.name}</b>
          </Typography>
          <Typography variant="body1" color="silver">
            <b>Your Rating: {props.rating}/10</b>
          </Typography>
        </CardContent>
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            alert("btn clicked");
          }}
        >
          <b>Delete</b>
        </Button>
      </CardActionArea>
    </Card>
  );
});
