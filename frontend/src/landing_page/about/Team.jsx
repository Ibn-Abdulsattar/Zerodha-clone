import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import nithinKamath from "../../assets/image/nithinKamath.jpg";
import hanan from "../../assets/image/hanan.png";
import Austin from "../../assets/image/Austin.png";
import kailash_nadh from "../../assets/image/kailash-nadh.png";
import karthik from "../../assets/image/karthik.png";
import venu from "../../assets/image/venu.png";
import Seema from "../../assets/image/Seema.png";

export default function Team() {
  const team = [
    {
      img: nithinKamath,
      name: "Nikhil Kamath",
      category: "Co-founder & CFO",
      description:
        "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.",
    },
    {
      img: kailash_nadh,
      name: "Dr. Kailash Nadh",
      category: "CTO",
      description:
        "Kailash has a PhD in AI & Computational Linguistics, and is the brain behind all our tech. He continues to write code every day.",
    },
    {
      img: venu,
      name: "Venu Madhav",
      category: "COO",
      description:
        "Venu takes care of operations and compliance. He’s an expert in financial markets and loves fitness & adventures.",
    },
    {
      img: hanan,
      name: "Hanan Delvi",
      category: "CCO",
      description:
        "Hanan ensures we stay ahead in support. His energy powers many client initiatives. A free thinker beyond work.",
    },
    {
      img: Seema,
      name: "Seema Patil",
      category: "Director",
      description:
        "Seema led the quality team and is now a Director. Disciplined and a fitness enthusiast.",
    },
    {
      img: karthik,
      name: "Karthik Rangappa",
      category: "Chief of Education",
      description:
        "Karthik wrote Varsity and heads investor education. Loves markets, rock music, and photography.",
    },
    {
      img: Austin,
      name: "Austin Prakesh",
      category: "Director Strategy",
      description:
        "Austin helps optimize growth. He’s an entrepreneur, boxing fan, and watch collector.",
    },
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        width: "100%", // Fixed from 98.8vw to prevent horizontal scroll
        py: { xs: 6, md: 12 }, 
        overflowX: "hidden" 
      }}
    >
      <Container maxWidth="lg">
        {/* === Header Section === */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: { xs: 6, md: 10 },
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          People
        </Typography>

        {/* === Nithin Kamath Section === */}
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="flex-start"
          sx={{ mb: { xs: 10, md: 15 } }}
        >
          <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={nithinKamath}
              alt="Nithin Kamath"
              sx={{
                width: { xs: "200px", md: "300px" },
                aspectRatio: "1/1",
                borderRadius: "50%",
                objectFit: "cover",
                mb: 2,
              }}
            />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Nithin Kamath
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Founder, CEO
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            {[
              `Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.`,
              `He is a member of SEBI's Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).`,
              `Playing basketball is his zen.`,
            ].map((text, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  color: "text.primary",
                  mb: 2,
                }}
              >
                {text}
              </Typography>
            ))}
            <Typography sx={{ fontSize: "1.1rem", mt: 2 }}>
              Connect on{" "}
              <Link href="#" underline="hover">Homepage</Link> /{" "}
              <Link href="#" underline="hover">TradingQnA</Link> /{" "}
              <Link href="#" underline="hover">Twitter</Link>
            </Typography>
          </Grid>
        </Grid>

        {/* === Team Grid === */}
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {team.map((member, idx) => (
            <Grid
              key={idx}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={member.img}
                alt={member.name}
                sx={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  mb: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" }
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {member.category}
              </Typography>

              {/* Improved Accordion for Bio */}
              <Accordion
                elevation={0}
                disableGutters
                sx={{
                  width: "100%",
                  backgroundColor: "transparent",
                  "&:before": { display: "none" }, // Remove default divider
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    justifyContent: "center",
                    flexDirection: "row-reverse",
                    "& .MuiAccordionSummary-content": {
                      flexGrow: 0,
                      ml: 1,
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Bio
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 1, pb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textAlign: "center",
                      lineHeight: 1.6,
                    }}
                  >
                    {member.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
