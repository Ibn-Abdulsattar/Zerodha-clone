import { Route, Routes } from "react-router-dom";
import Funds from "./Components/Funds";
import Holdings from "./Components/Holdings";
import Apps from "./Components/Apps";
import Orders from "./Components/Orders";
import Positions from "./Components/Positions";
import Summary from "./Components/Summary";
import WatchList from "./Components/WatchList";
import './App.css';

function App() {

   return (
    <div className="dashboard-container">
        <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;




