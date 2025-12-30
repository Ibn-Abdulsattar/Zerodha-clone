import { useState } from "react";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";
import WatchListItem from "./WatchListItem";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {

  const [search, setSearch] = useState("");
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      
      <div  className="search-container">

        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search eg:infy, bse, nifty"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist
          .filter((stock) =>
            stock.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((stock) => (
            <WatchListItem stock={stock} key={stock.name} />
          ))}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;
