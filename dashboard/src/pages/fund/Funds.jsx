import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import TotalInvest from "./TotalInvest";
import OpenAccount from "./OpenAccount";
import Withdraw from "./Withdraw";
import AddFund from "./AddFund";
import { useEffect, useState } from "react";
import withdrawService from "../../services/withdraw.service";
import { useAuth } from "../../context/AuthContext";
import fundService from "../../services/fund.service";

const Funds = () => {
  const { setAlert } = useAuth();
  const [openWithdraw, setOpenWithdraw] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [payMethod, setPayMethod] = useState("");
  const [payMethodError, setPayMethodError] = useState(false);

  // Fetch Data
  const [data, setData] = useState({});

  const fetchData = () => {
    fundService
      .allfund()
      .then((res) => setData(res.latestFund))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Withdraw
  const handleOpenWithdraw = () => setOpenWithdraw(true);
  const handleCloseWithdraw = () => setOpenWithdraw(false);
  const handleSubmitWithdraw = async (e) => {
    try {
      e.preventDefault();
      const withdraw = new FormData(e.target);
      const withdraw_amount = withdraw.get("withdraw_amount");

      const response = await withdrawService.withdraw({
        withdraw_amount,
      });
      handleCloseWithdraw();
      fetchData();
      setAlert({ type: "success", message: response.message });
    } catch (err) {
      handleCloseWithdraw();
      setAlert({ type: "error", message: err.message });
    }
  };

  // Add fund
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setPayMethod("");
    setPayMethodError(false);
  };

  const handleFundSubmit = async (e) => {
    e.preventDefault();
    const fundData = new FormData(e.target);
    const amount = fundData.get("amount");

    // Custom required check for Select
    if (!payMethod) {
      setPayMethodError(true);
      return;
    }

    try {
      const response = await fundService.createfund({ amount, payMethod });
      handleClose();
      setAlert({ type: "success", message: response.message });
      fetchData();
    } catch (err) {
      handleClose();
      setAlert({ type: "error", message: err.message });
    }
  };

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
        <AddFund
          open={open}
          payMethod={payMethod}
          setPayMethod={setPayMethod}
          payMethodError={payMethodError}
          setPayMethodError={setPayMethodError}
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleFundSubmit={handleFundSubmit}
        />
        &nbsp;&nbsp;
        <Withdraw
          openWithdraw={openWithdraw}
          handleOpenWithdraw={handleOpenWithdraw}
          handleCloseWithdraw={handleCloseWithdraw}
          handleSubmitWithdraw={handleSubmitWithdraw}
          data={data}
        />
      </div>

      <div className="row">
        <TotalInvest latestFund={data} className="col" />

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <OpenAccount
              alertVisible={alertVisible}
              setAlertVisible={setAlertVisible}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
