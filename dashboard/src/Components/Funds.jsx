import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import TotalInvest from "./TotalInvest";
import OpenAccount from './OpenAccount';
import Withdraw from './Withdraw';
import AddFund from './AddFund';
import { useState } from "react";

const Funds = () => {

    const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          sx={{
            position: "fixed",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1300,
          }}
        >
          Your commodity account has been successfully opened!
        </Alert>
      )}

      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <AddFund/>&nbsp;&nbsp;
        <Withdraw/>
      </div>

      <div className="row">
        <TotalInvest className="col" />

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <OpenAccount alertVisible={alertVisible} setAlertVisible={setAlertVisible}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
