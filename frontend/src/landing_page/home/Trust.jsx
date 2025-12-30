import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ecosystem from "../../assets/image/ecosystem.png";
import pressLogos from "../../assets/image/pressLogos.png";

export default function Trust() {
  return (
    <Box
      sx={() => ({
        px: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "4rem" },
        py: { xs: "0rem", md:"1rem" },
        // width: "100%",
        overflowX: "hidden",
        backgroundColor: "#fff",
      })}
    >
      {/* Main Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center" },
          justifyContent: "space-between",
          gap: { xs:3,sm: 5, md: 6 },
          width: "100%",
        }}
      >
        {/* Left Text Content */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            pr: { lg: "2rem" },
            textAlign: { xs: "center", md: "left" },
            lineHeight: 1.8,
            order:{md:1, xs:2}
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{mb:{md:4,xs:2}}}
            fontSize={{ xs: "1.6rem", sm: "1.8rem", md: "2rem" }}
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
            <Box key={i} sx={{mb:{md:3, xs:0}}}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.05rem", sm: "1.1rem", md: "1.2rem" },
                }}
              >
                {heading}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  lineHeight: 1.9,
                  color: "text.secondary",
                  mt: 1,
                  fontSize: { xs: "0.95rem", sm: "1rem" },
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
            width: { xs: "100%", md: "50%" },
            textAlign: "center",
            mt: { xs: 3, lg: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            order:{md:2,xs:1}
          }}
        >
          <Link href="/product" underline="none" sx={{ width: "100%" }}>
            <Box
              component="img"
              src={ecosystem}
              alt="Ecosystem illustration"
              sx={{
                width: "100%",
                maxWidth: 520,
                height: "auto",
                cursor: "pointer",
                borderRadius: 2,
                // boxShadow: { xs: "none", md: "0 4px 12px rgba(0,0,0,0.08)" },
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.02)" },
              }}
            />
          </Link>

          {/* Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              mt: {md:3, xs:0},
              gap: { xs: 0, sm: 4 },
            }}
          >
            <Link
              variant="h6"
              underline="none"
              href="/product"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "primary.main",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Explore our products <ArrowRightAltIcon fontSize="small" />
            </Link>

            <Link
              target="_blank"
              variant="h6"
              underline="none"
              href={`${import.meta.env.VITE_Dashboard_Url}`}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "primary.main",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Try Kite demo <ArrowRightAltIcon fontSize="small" />
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Bottom Logos */}
      <Box sx={{ textAlign: "center", mt: { xs: 5, md: 7 } }}>
        <Link
          href="https://www.brecorder.com/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <Box
            component="img"
            src={pressLogos}
            alt="Press logos"
            sx={{
              width: "100%",
              maxWidth: 900,
              height: "auto",
              mx: "auto",
              opacity: 0.9,
              transition: "opacity 0.3s ease",
              "&:hover": { opacity: 1 },
            }}
          />
        </Link>
      </Box>
    </Box>
  );
}
