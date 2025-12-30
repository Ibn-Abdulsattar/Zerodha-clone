import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";

export default function TradSegments() {
  const tabData = {
    Equity: {
      columns: [
        "",
        "Equity delivery",
        "Equity intraday",
        "F&O - Futures",
        "F&O - Options",
      ],
      rows: [
        [
          "Brokerage",
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
        [
          "GST",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        [
          "SEBI charges",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
        ],
        [
          "Stamp charges",
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      ],
    },
    Currency: {
      columns: ["", "Currency futures", "Currency options"],
      rows: [
        [
          "Brokerage",
          "0.03% or ₹ 20/executed order whichever is lower",
          "	₹ 20/executed order",
        ],
        ["STT/CTT", "No STT", "No STT"],
        [
          "Transaction charges",
          "NSE: 0.00035% BSE: 0.00045%",
          `NSE: 0.0311% BSE: 0.001%`,
        ],
        [
          "GST",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        ["SEBI charges", "₹10 / crore", "₹10 / crore"],
        [
          "Stamp charges",
          "0.0001% or ₹10 / crore on buy side",
          "0.0001% or ₹10 / crore on buy side",
        ],
      ],
    },
    Commodity: {
      columns: ["", "	Commodity futures", "Commodity options"],
      rows: [
        [
          "Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "₹ 20/executed order",
        ],
        ["STT/CTT", "0.01% on sell side (Non-Agri)", "	0.05% on sell side"],
        [
          "Transaction charges",
          "MCX: 0.0021% NSE: 0.0001%",
          "MCX: 0.0418% NSE: 0.001%",
        ],
        [
          "GST",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        [
          "SEBI charges",
          "Agri: ₹1 / crore Non-agri: ₹10 / crore",
          "₹10 / crore",
        ],
        [
          "Stamp charges",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      ],
    },
  };

  const [active, setActive] = useState("Equity");

  const tabLabels = Object.keys(tabData);

  const { columns, rows } = tabData[active];

  return (
    <Box sx={{ mb: "2rem", mt: {xs:"3rem", md:"4rem" }}}>
      <Container>
        <TabContext value={active}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={(_, newValue) => setActive(newValue)}
              aria-label="lab API tabs example"
            >
              {tabLabels.map((label, idx) => (
                <Tab
                  sx={{
                    color: "blue",
                    textTransform: "none",
                    fontSize: "1.5rem",
                    pr: "2rem",
                    pl: "2rem",
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                  label={label}
                  key={idx}
                  value={label}
                />
              ))}
            </TabList>
          </Box>
          <Box sx={{ overflowX: "auto", width: "100%" }}>
            <Table
              sx={{
                border: "1px solid #ccc",
                mt: "1.5rem",
                borderRadius: "8px",
                minWidth: "500px", // ⬅️ ensures table doesn't shrink too much
                borderCollapse: "separate",
              }}
            >
              <TableHead>
                <TableRow sx={{ height: "5rem" }}>
                  {columns.map((cell, idx) => (
                    <TableCell sx={{ fontSize: "1.2rem" }} key={idx}>
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, rowIdx) => (
                  <TableRow
                    sx={{
                      "&:nth-of-type(even)": {
                        backgroundColor: "#fbfbfb",
                      },
                      padding: "1rem 0",
                      height: "6rem",
                    }}
                    key={rowIdx}
                  >
                    {row.map((td, colIdx) => (
                      <TableCell
                        sx={{ opacity: "0.75", border: "none" }}
                        key={colIdx}
                      >
                        {td}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </TabContext>
      </Container>
    </Box>
  );
}
