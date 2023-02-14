import { useState, useEffect } from "react";

const Media = ({ item }) => {
  const [media, setMedia] = useState("");
  console.log(item);

  const getMedia = async () => {
    const res = await fetch(item.href);
    const data = await res.json();
    setMedia(data[2]);
  };

  useEffect(() => {
    getMedia();
  }, []);

  if (item.data[0].media_type === "image" && media) {
    return (
      <div>
        <img src={media} alt={item.data[0].title} width="200px" />
      </div>
    );
  } else if (item.data[0].media_type === "video" && media) {
    return (
      <video controls width="200px" preload="auto">
        <source src={media} type="video/mp4" />
      </video>
    );
  }
};

export default Media;
