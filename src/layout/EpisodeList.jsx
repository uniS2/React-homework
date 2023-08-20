import { useEffect, useState } from "react";
import EpisodeListItem from "./EpisodeListItem";
import useFetchData from "../hooks/useFecthData";

function EpisodeList() {
  const { data } = useFetchData();
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(data.totalEpisode);
  }, [data]);

  return (
    <ul>
      {Array.from({ length: 10 }).map((_, index) => (
        <EpisodeListItem key={index} episodeCount={index + 1} />
      ))}
    </ul>
  );
}

export default EpisodeList;
