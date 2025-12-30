import {
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Chip,
} from "@mui/material";

export default function OpeningFee() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: 4, mt: "0rem" }}>
      <Container>
        <Typography sx={{ fontSize: "1.5rem", fontWeight: 500, mb: 2 }}>
          Charges for account opening
        </Typography>

        <Table
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            overflow: "hidden",
            borderCollapse: "separate",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Type of account</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Charges</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { type: "Online account", charge: "FREE" },
              { type: "Offline account", charge: "FREE" },
              { type: "NRI account (offline only)", charge: "₹ 500" },
              {
                type: "Partnership, LLP, HUF, or Corporate accounts (offline only)",
                charge: "₹ 500",
              },
            ].map((row, idx) => (
              <TableRow
                key={idx}
                sx={{
                  backgroundColor: idx % 2 === 1 ? "#fbfbfb" : "transparent",
                }}
              >
                <TableCell sx={{border: "none"}}>{row.type}</TableCell>
                <TableCell sx={{border: "none"}}>
                  {row.charge === "FREE" ? (
                    <Chip
                      label="FREE"
                      size="small"
                      sx={{
                        backgroundColor: "#4caf50",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        px: 1.5,
                        borderRadius: "4px",
                      }}
                    />
                  ) : (
                    row.charge
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Box>
  );
}
