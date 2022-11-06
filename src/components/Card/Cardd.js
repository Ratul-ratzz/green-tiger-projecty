import { React, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Cardd.css";
import { useNavigate } from "react-router-dom";

function Cardd({ data }) {
  console.log("responsssss", data);

  const userId = data.id;
  const [post, setPost] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const json = await response.json();
        console.log("hgfhgf", json);
        setPost(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [data.length]);
  const navigate = useNavigate();
  const navigateHome = (id) => {
    navigate("/posts", {
      state: post,
    });

    // 👇️ navigate to /
  };
  const navigateTo = useNavigate();
  const navigateTodo = () => {
    navigateTo("/todos");
  };

  return (
    <>
      <div className="container">
        <Card
          sx={{ maxWidth: 345, margin: "14px ", border: "1px solid black" }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            min-height="100"
            image="https://picsum.photos/id/237/200/300"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.id}.{data.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {data.username}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={navigateHome}>
              Post
            </Button>
            <Button size="small" onClick={navigateTodo}>
              To-Dos
            </Button>
            <Button size="small">Albums</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default Cardd;
