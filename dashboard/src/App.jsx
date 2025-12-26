import { Route, Routes } from "react-router-dom";
import Funds from "./pages/fund/Funds";
import Holdings from "./pages/holding/Holdings";
import Apps from "./pages/app/Apps";
import Orders from "./pages/order/Orders";
import Positions from "./pages/position/Positions";
import Dashboard from "./pages/dashboard/Dashboard";
import MainLayout from "./layout/MainLayout";
import './App.css';

function App() {

   return (
        <Routes>
          <Route element={<MainLayout/>}>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          </Route>
        </Routes>
  );
}

export default App;




