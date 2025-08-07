import { useEffect, useState } from "react";
import axios from "axios";

const TotalInvest = () => {
  const [availableMargin, setAvailableMargin] = useState(0)
  const [usedMargin, setUsedMargin] = useState(0)
  const [availableCash, setAvailableCash] = useState(0)
  const [payin, setPayin] = useState(0)

  useEffect(() => {
    axios
      .get("https://ofe1qf8tyd.execute-api.ap-south-1.amazonaws.com/fund/allFund", {withCredentials: true})
      .then((res) => {
        const responseData = res.data;

        // Setting state using fresh data from response
        setAvailableMargin(responseData?.availableMargin?.toLocaleString() || 0);
        setUsedMargin(responseData?.usedMargin?.toLocaleString() || 0);
        setAvailableCash(responseData?.availableCash?.toLocaleString() || 0);
        setPayin(responseData?.payin?.toLocaleString() || 0);
        
      })
      .catch((err) => console.error(err));
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
            {availableMargin}
          </strong>
        </div>
        <div className="data">
          <p>Used margin :</p>&nbsp;
          <strong className="imp text-primary">
            {usedMargin}
          </strong>
        </div>
        <div className="data">
          <p>Available cash :</p>&nbsp;
          <strong className="imp text-warning">
            {availableCash}
          </strong>
        </div>
        <hr />
        <div className="data">
          <p>Payin :</p>&nbsp;
          <strong>{payin}</strong>
        </div>
      </div>
    </div>
  );
};

export default TotalInvest;
