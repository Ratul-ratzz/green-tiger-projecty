import { useLocation } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Album() {
  const location = useLocation();
  // console.log(location.state);
  var postData = location.state;
  console.log("postdata", postData);

  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function getCommentByID(data) {
    console.log("comm", data.id);
    const postId = data.id;
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    const response = await fetch(url);

    const json = await response.json();
    // console.log("hgfhgf", json);
    console.log("this is comment", json);
    return json;
  }

  return (
    <div>
      <Grid container>
        {postData.map((data) => (
          <Grid
            item
            xs={3}
            gap={10}
            margin={7}
            minHeight={100}
            border={"1px solid black"}
            alignContent={"center"}
          >
            <Card sx={{ minWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.id}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {data.userID}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
              </CardContent>
              <CardActions>
                <div>Comment</div>
                <ExpandMore
                  expand={expanded}
                  onClick={() => {
                    handleExpandClick();
                    getCommentByID(data);
                  }}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandCircleDownIcon />
                </ExpandMore>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Album;
