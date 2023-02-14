import { useEffect, useState } from "react";
import "./App.css";
import Media from "./components/Media";
import Grid from "./layout/Grid";

const App = () => {
  const [keyword, setKeyWord] = useState("artemis");
  const [mediaType, setMediaType] = useState("video");
  const [items, setItems] = useState([]);
  const getData = async () => {
    const res = await fetch(
      `https://images-api.nasa.gov/search?q=${keyword}&media_type=${mediaType}`
    );
    const data = await res.json();
    setItems(data.collection.items);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid>
      {items.map((item) => (
        <Media item={item} />
      ))}
    </Grid>
  );
};

export default App;
