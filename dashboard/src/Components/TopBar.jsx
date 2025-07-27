import { useState, useEffect } from "react";
import axios from "axios";
import TopMenu from "./TopMenu";

const TopBar = () => {
  const [nifty, setNifty] = useState(1);

  useEffect(() => {
    axios
      .get(`https://zerodha-clone-backend.eba-fe3juwiv.ap-south-1.elasticbeanstalk.com/api/price/^NSEI`, {withCredentials: true})
      .then((res) => {
        setNifty(res.data.price);
      })
      .catch((err) => console.log(err));
  }, []);

  const [sensex, setSensex] = useState(1);

  useEffect(() => {
    axios
      .get(`https://zerodha-clone-backend.eba-fe3juwiv.ap-south-1.elasticbeanstalk.com/api/price/^BSESN`, {withCredentials: true})
      .then((res) => {
        setSensex(res.data.price);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{nifty.toFixed(1)} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX 30</p>
          <p className="index-points">{sensex.toFixed(1)}</p>
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
