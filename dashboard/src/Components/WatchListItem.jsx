import { useState } from "react";
import WatchListActions from './WatchListActions';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";


const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  const idRef = stock.name;

  return (
    <li onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchListActions
          idRef={idRef}
          setShowWatchlistActions={setShowWatchlistActions}
        />
      )}
    </li>
  );
};

export default WatchListItem;