import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import pricing0 from "../../assets/image/pricing0.svg";
import pricingEquity from "../../assets/image/pricingEquity.svg";
import intradayTrades from "../../assets/image/intradayTrades.svg";

export default function Pricing() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: { xs: "center", lg: "flex-start" },
        justifyContent: "space-between",
        px: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "4rem" },
        py: { xs: "2.5rem", sm: "3rem", md: "4rem" },
        gap: { xs: 2, md: 3, lg: 0 },
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      {/* -------- Left Text Section -------- */}
      <Box
        sx={{
          maxWidth: { xs: "100%", sm: "80%", md: "60%", lg: "35%" },
          textAlign: { xs: "center", lg: "left" },
          mx: { xs: "auto", lg: 0 },
          // order:{lg:1, xs:2}
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.7rem", sm: "1.9rem", md: "2rem" },
          }}
        >
          Unbeatable pricing
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            mt: 2,
            color: "text.secondary",
            fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
          }}
        >
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </Typography>

        <Link
          href="/pricing"
          underline="none"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            mt: .5,
            color: "primary.main",
            fontWeight: 500,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          See pricing <ArrowRightAltIcon fontSize="small" />
        </Link>
      </Box>

      {/* -------- Right Pricing Cards Section -------- */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: { xs: 2.5, sm: 6, md: 7 },
          textAlign: "center",
          // order:{lg:2, xs:1}
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
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              width: { xs: "9rem", sm: "10rem", md: "11rem" },
              // minHeight: { xs: "7rem", sm: "8rem" },
            }}
          >
            <Box
              component="img"
              src={img}
              alt={label.replace(/\n/g, " ")}
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                mb: 0,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "0.85rem", sm: "0.9rem" },
                color: "text.secondary",
                whiteSpace: "pre-line",
                lineHeight: 1.4,
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
