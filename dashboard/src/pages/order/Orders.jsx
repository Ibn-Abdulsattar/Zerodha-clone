import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import orderService from "../../services/order.service";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    orderService.allOrder()
      .then((res) => {
        setAllOrders(res.allOrders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return allOrders.length === 0 ? (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  ) : (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Mode</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrders.map((order, idx) => (
            <TableRow key={idx}>
              <TableCell>
                {dayjs(order.createdAt).format("DD MM YYYY, hh:mm A")}
              </TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.qty}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>{order.orderType || "CNC"}</TableCell>
              <TableCell
                sx={{ color: order.mode == "Buy" ? "#4184f3" : "#ff5722" }}
              >
                <i>
                  <b>{order.mode}</b>
                </i>
              </TableCell>
              <TableCell>{order.status || "Completed"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Orders;
