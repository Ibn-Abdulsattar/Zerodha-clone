import { useEffect, useState } from "react";
import axios from "axios";

const TotalInvest = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://ofe1qf8tyd.execute-api.ap-south-1.amazonaws.com/fund/allFund", {withCredentials: true})
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="col">
      <span>
        <p>Equity</p>
      </span>

      <div className="table">
        <div className="data">
          <p>Available margin :</p>&nbsp;
          <strong className="imp text-success">
            {data?.availableMargin?.toLocaleString() || 0}
          </strong>
        </div>
        <div className="data">
          <p>Used margin :</p>&nbsp;
          <strong className="imp text-primary">
            {data?.usedMargin?.toLocaleString() || 0}
          </strong>
        </div>
        <div className="data">
          <p>Available cash :</p>&nbsp;
          <strong className="imp text-warning">
            {data?.availableCash?.toLocaleString() || 0}
          </strong>
        </div>
        <hr />
        <div className="data">
          <p>Payin :</p>&nbsp;
          <strong>{data?.payin?.toLocaleString() || 0}</strong>
        </div>
      </div>
    </div>
  );
};

export default TotalInvest;
