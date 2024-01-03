import React from "react";
import "./Item.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Items = (props) => {
  return (
    <div className="Item">
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={props.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <p>${props.new_price}</p>
            <p style={{textDecoration:"line-through"}}>${props.old_price}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
