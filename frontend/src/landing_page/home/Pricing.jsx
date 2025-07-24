import Box from "@mui/material/Box";
import pricing0 from "../../assets/image/pricing0.svg";
import pricingEquity from "../../assets/image/pricingEquity.svg";
import intradayTrades from "../../assets/image/intradayTrades.svg";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Pricing() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "column", lg: "row" },
        gap: { xs: 4, lg: 0 },
        px: { xs: 2, md: 4, lg: "4rem" },
        py: { xs: 4, lg: "4rem" },
        alignItems: { xs: "center", lg: "flex-start" },
        justifyContent: "space-between",
      }}
    >
      {/* Text Section */}
      <Box sx={{ maxWidth: { xs: "100%", lg: "30%" }, textAlign: { xs: "center", lg: "left" } }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Unbeatable pricing
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ lineHeight: "2rem", mt: 2, color: "#444" }}
        >
          We pioneered the concept of discount broking and price
          transparency in India. Flat fees and no hidden charges.
        </Typography>
        <Link
          href="/pricing"
          sx={{
            fontSize: "1.25rem",
            display: "inline-block",
            mt: 2,
            textDecoration: "none",
            color: "primary.main",
          }}
        >
          See pricing <ArrowRightAltIcon />
        </Link>
      </Box>

      {/* Pricing Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          gap: { xs: 4, sm: 6 },
          mt: { xs: 4, lg: 0 },
          justifyContent: "center",
        }}
      >
        {[
          {
            img: pricing0,
            label: "Free account\nopening",
          },
          {
            img: pricingEquity,
            label: "Free equity delivery\nand direct mutual funds",
          },
          {
            img: intradayTrades,
            label: "Intraday and\nF&O",
          },
        ].map(({ img, label }, idx) => (
          <Box
            key={idx}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              width: "10rem",
            }}
          >
            <img
              src={img}
              alt="pricing visual"
              style={{ width: "100%", zIndex: 1 }}
            />
            <Typography
              variant="caption"
              sx={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "0.75rem",
                color: "#444",
                whiteSpace: "pre-line",
              }}
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
