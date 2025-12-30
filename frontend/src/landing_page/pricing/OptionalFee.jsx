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
} from "@mui/material";

export default function OptionalFee() {
  return (
    <Box sx={{ mt: 4, mb: 10}}>
      <Container>
        <Grid container>
            <Typography sx={{mb: "1.5rem", fontSize: "1.5rem"}}>Charges for optional value added services</Typography>
          <Grid item size={{xs: 12}}>
            <Table sx={{ border: "1px solid #ccc", }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight: 600}}>Service</TableCell>
                  <TableCell sx={{fontWeight: 600}}>Billing Frequency</TableCell>
                  <TableCell sx={{fontWeight: 600}}>Charges</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{border: "none"}}>Tickertape</TableCell>
                  <TableCell sx={{border: "none"}}>Monthly / Annual</TableCell>
                  <TableCell sx={{border: "none"}}>Free: 0 | Pro: 249/2399</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: "#fbfbfb" }}>
                  <TableCell sx={{border: "none"}}>Smallcase</TableCell>
                  <TableCell sx={{border: "none"}}>Per transaction</TableCell>
                  <TableCell sx={{border: "none"}}>
                    Buy &amp; Invest More: 100 | SIP: 10
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Kite Connect</TableCell>
                  <TableCell>Monthly</TableCell>
                  <TableCell>Connect: 500 | Historical: 500</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
