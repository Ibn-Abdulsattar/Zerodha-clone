import { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import holdingService from "../../services/holding.service";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    holdingService.allholding()
      .then((res) => {
        setAllHoldings(res.allHoldings);
      })
      .catch((err) => console.log(err));
  }, []);

  const labels = allHoldings.map((stock) => stock.name)

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const totalInvest = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const totalCurrentValue = allHoldings.reduce((sum, stock) => {
    return sum + stock.price * stock.qty;
  }, 0)

  const pnl = totalCurrentValue - totalInvest;
  const pnlPercent = totalInvest > 0 ? (pnl / totalInvest) * 100 : 0;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{(stock.avg ?? 0).toFixed(2)}</td>
                  <td>{(stock.price ?? 0).toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvest.toFixed(2)}
            <span>{totalInvest.length}</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {totalCurrentValue.toFixed(2)}{" "}
            <span>{totalCurrentValue.length}</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col ">
          <h5 className={pnl >= 0 ? "profit" : "loss"}>
            {pnl.toFixed(2)} &nbsp; {pnlPercent.toFixed(1)}%
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
