import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

const Apps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios
      .get("https://ofe1qf8tyd.execute-api.ap-south-1.amazonaws.com/userApp/user-apps")
      .then((res) => setApps(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

const handleToggle = async (appId, action) => {
  const endpoint = action === "connect" ? "user-apps/connect" : "user-apps/disconnect";

  await axios.post(`https://ofe1qf8tyd.execute-api.ap-south-1.amazonaws.com/userApp/${endpoint}`, { appId });

  const res = await axios.get("https://ofe1qf8tyd.execute-api.ap-south-1.amazonaws.com/userApp/user-apps");
  setApps(res.data);
};


  return (
    <div className="apps-container">
      <h2>Connected Apps</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>App Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apps.map((app) => (
              <TableRow key={app._id}>
                <TableCell> <b>{app.name}</b> </TableCell>
                <TableCell> {app.description}</TableCell>
                <TableCell>
                  {app.connected ? "Connected" : "Not Linked"}
                </TableCell>
                <TableCell>
                  {app.connected ? (
                    <Button onClick={() => handleToggle(app._id, "disconnect")}>
                      🔌 Disconnect
                    </Button>
                  ) : (
                    <Button onClick={() => handleToggle(app._id, "connect")}>
                      🔗 Connect Now
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Apps;
