import { useState, useEffect } from "react";
import axios from "axios";
import TopMenu from "./TopMenu";

const TopBar = () => {
  const [nifty, setNifty] = useState(1);
  const [sensex, setSensex] = useState(1);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const [niftyRes, sensexRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_Backend_Url}/api/price/^NSEI`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_Backend_Url}/api/price/^BSESN`, {
            withCredentials: true,
          }),
        ]);
        setNifty(niftyRes.data.price);
        setSensex(sensexRes.data.price);
      } catch (err) {
        console.error("Error fetching index prices:", err);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="topbar-container">
      <div  className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{nifty ? nifty.toFixed(1) : "—"} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX 30</p>
          <p className="index-points">{sensex ? sensex.toFixed(1) : "—"}</p>
          <p className="percent"></p>
        </div>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <TopMenu />
      </div>
    </div>
  );
};

export default TopBar;
