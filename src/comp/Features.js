import React, { useState } from 'react'

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import image3 from "../assist/elegant-dark.jpg";
import { Box, ButtonBase,Link } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import mukul from '../assist/sooryavanshi.png';
function Features() {
  const[video,SetVideo]=useState();
    const useStyles = makeStyles({
      root: {
        maxWidth: 400,
      },
      media: {
        height: 140,
      },
    });
    const classes = useStyles();
    const allcards = [
      {
        title: "Sooryavanshi ",
        img: require("../assist/sooryavanshi.png"),
        url: "https://www.youtube.com/watch?v=u5r77-OQwa8",
      },
      {
        title: "Iron Mask",
        name: "",
        img: require("../assist/sooryavanshi.png"),
        url: "https://www.youtube.com/watch?v=q1u0hzLuDCw",
      },
      {
        title: "Zack Snyder's",
        name: "",
        img: require("../assist/sooryavanshi.png"),
        url: "https://www.youtube.com/watch?v=pLQkPeCR3gY",
      },
      {
        title: "Mumbai Saga ",
        name: "",
        img: require("../assist/sooryavanshi.png"),
        url: "https://www.youtube.com/watch?v=YTGO38DSIsc",
      },
      {
        title: "SPONTANEOUS",
        name: "",
        img: require("../assist/sooryavanshi.png"),
        url: "https://www.youtube.com/watch?v=0dt523AHZWY",
      },
    ];
//    const SetVideo = ()=>{
     

    
// -
//    }
 const [value, setValue] = React.useState(2);

  return (
    
      <div className="container ">
        <div className="row">
          <div className="col-md-12 col-lg-12 text-center">
            <h2 className="font-div">TOP 5 HIT MOVIES</h2>
          </div>

          
            {allcards.map((e,i)=>{
                return (
                  <div
                    style={{ padding: "10px" }}
                    className="col-lg-3 col-md-6  "
                  >
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          // onClick={e.img}
                          className={classes.media}
                          image={mukul}
                        />
                        <CardContent>
                          

                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className="text-center"
                          >
                            {e.title}
                          </Typography>
                          <Button className="MOVIE_BUTTON" variant="contained">
                            <Link target="blank" underline="hover" href={e.url}>
                              Watch Now
                            </Link>
                          </Button>
                          <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                          >
                            <Typography component="legend">Rating</Typography>
                            <Rating name="pristine" value={null} />
                          </Box>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className="text-center"
                          ></Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                );
            })}
            
          </div>
        </div>
      
    
  );
}

export default Features
