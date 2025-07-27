import { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [data, setData] = useState({});
  const [user, setUser] = useState('User')

  useEffect(() => {
    axios
      .get("https://ofe1qf8tyd.execute-api.ap-south-1.amazonaws.com/fund/allFund", {withCredentials: true})
      .then((res) => {setData(res.data)})
      .catch((err) => console.log(err));

      axios.get('https://ofe1qf8tyd.execute-api.ap-south-1.amazonaws.com/user', { withCredentials: true })
      .then(res => {setUser(res.data.username);})
      .catch(err => console.log(err));
  }, []);

  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("https://ofe1qf8tyd.execute-api.ap-south-1.amazonaws.com/holding/allholdings", {withCredentials: true})
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const totalInvest = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const totalCurrentValue = allHoldings.reduce((sum, stock) => {
    return sum + stock.price * stock.qty;
  }, 0);

  const pnl = totalCurrentValue - totalInvest;
  const pnlPercent = totalInvest > 0 ? (pnl / totalInvest) * 100 : 0;

  return (
    <>
      <div className="username">
        <h6>Hi, <i style={{color: "#4B0082"}}>{user}</i> !</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3> {data?.availableMargin?.toLocaleString() || 0}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used
              <span> {data?.usedMargin?.toLocaleString() || 0}</span>
            </p>
            <p>
              Opening balance
              <span> {data?.availableCash?.toLocaleString() || 0}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              {pnl.toFixed(2)} <small>{pnlPercent.toFixed(2)}%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{totalCurrentValue.toLocaleString()}</span>
            </p>
            <p>
              Investment <span>{totalInvest.toLocaleString()}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
