import { React, useState, useEffect } from "react";
import Cardd from "../Card/Cardd";
import Grid from "@mui/material/Grid";

function Home() {
  const [data, setData] = useState([]);

  //Loading State
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users/";

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        console.log("this is message", response);
        const json = await response.json();
        console.log("this is json", json);

        setLoading(false);
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    // setTotalpages(Math.ceil(data.length / 10));
  }, [data.length]);
  return (
    <div>
      <Grid container>
        {data.map((data, index) => (
          <Grid item xs={3}>
            <Cardd
              data={data}
              datas={`movies-${index}`}
              // dispatch={this.props.store.dispatch}
              // isFavourite={this.isMovieFavourite(movie)}
            />
          </Grid>
        ))}
      </Grid>
      <Cardd data={data} />
    </div>
  );
}

export default Home;
