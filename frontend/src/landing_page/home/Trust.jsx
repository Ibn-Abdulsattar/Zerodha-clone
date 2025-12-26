import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ecosystem from "../../assets/image/ecosystem.png";
import pressLogos from "../../assets/image/pressLogos.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "@mui/material/Link";

export default function Trust() {
  return (
    <Box
      sx={{
        px: { xs: "1.5rem", md: "3rem", lg: "4rem" },
        py: { xs: "2rem", md: "3rem", lg: "4rem" },
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* Main Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 4, lg: 0 },
          width: "100%",
        }}
      >
        {/* Left Text Content */}
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            pr: { lg: "2rem" },
            lineHeight: "2",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={500}
            mb={4}
            textAlign={{ xs: "center", lg: "left" }}
          >
            Trust with confidence
          </Typography>

          {[
            {
              heading: "Customer-first always",
              text: `That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.`,
            },
            {
              heading: "No spam or gimmicks",
              text: `No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.`,
            },
            {
              heading: "The Zerodha universe",
              text: `Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.`,
            },
            {
              heading: "Do better with money",
              text: `With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.`,
            },
          ].map(({ heading, text }, i) => (
            <Box key={i} mb={3}>
              <Typography variant="h6">{heading}</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 400,
                  lineHeight: "2",
                  color: "#444",
                  mt: 1,
                }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right Image and Links */}
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            textAlign: "center",
            mt: { xs: 3, lg: 0 },
          }}
        >
          <Box>
            <Link href="/product">
            <img
              src={ecosystem}
              alt="ecosystem"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                cursor: "pointer",
              }}
            />
            </Link>
          </Box>

          {/* Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
              gap: 3,
            }}
          >
            <Link
              variant="h6"
              underline="none"
              href="/product"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Explore our products <ArrowRightAltIcon />
            </Link>
            <Link target="_blank"
              variant="h6"
              underline="none"
              href={`${import.meta.env.VITE_Dashboard_Url}`}
              sx={{ display: "flex", alignItems: "center" }}
            >
              Try Kite demo <ArrowRightAltIcon />
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Bottom Logos */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Link href="https://www.brecorder.com/" target='_blank' sx={{ textDecoration: "none" }}>
          <img
            src={pressLogos}
            alt="pressLogos"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Link>
      </Box>
    </Box>
  );
}
