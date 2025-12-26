
const TotalInvest = ({latestFund}) => {
  return (
    <div className="col">
      <span>
        <p>Equity</p>
      </span>

      <div className="table">
        <div className="data">
          <p>Available margin :</p>&nbsp;
          <strong className="imp text-success">
            {(latestFund?.availableMargin || 0).toLocaleString()}

          </strong>
        </div>
        <div className="data">
          <p>Used margin :</p>&nbsp;
          <strong className="imp text-primary">
            {(latestFund?.usedMargin || 0).toLocaleString()}
          </strong>
        </div>
        <div className="data">
          <p>Available cash :</p>&nbsp;
          <strong className="imp text-warning">
            {(latestFund?.availableCash || 0).toLocaleString()}
          </strong>
        </div>
        <hr />
        <div className="data">
          <p>Payin :</p>&nbsp;
          <strong>{(latestFund?.payin || 0).toLocaleString()}</strong>
        </div>
      </div>
    </div>
  );
};

export default TotalInvest;
