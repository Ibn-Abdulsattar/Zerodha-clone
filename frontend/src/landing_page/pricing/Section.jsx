import {
  Box,
  Typography,
} from "@mui/material";

export default function Section ({title, discrp}){
    return (
        <Box>
        <Typography sx={{fontSize: "1.2rem"}}>{title}</Typography>
        <Typography sx={{margin: "1.5rem 0", opacity: "0.9"}} variant="subtitle2">{discrp}</Typography>
        </Box>
    )
};