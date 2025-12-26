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
    <Box sx={{ width: { md: "98.8vw", xs: "98.8vw" }, py: { xs: 5, md: 10 } }}>
      <Container maxWidth="lg">
        {/* === Nithin Kamath Section === */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          sx={{ mb: { xs: 6, md: 10 } }}
        >
          <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
            <Box>
              <Box
                component="img"
                src={nithinKamath}
                alt="Nithin Kamath"
                sx={{
                  width: { xs: "180px", sm: "220px", md: "260px" },
                  height: "auto",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                Nithin Kamath
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Founder, CEO
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontSize: { xs: "1.6rem", md: "2rem" },
                fontWeight: 700,
              }}
            >
              People
            </Typography>

            {[
              `Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.`,
              `He is a member of SEBI's Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).`,
              `Playing basketball is his zen.`,
              `Connect on `,
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
                {text.includes("Connect") ? (
                  <>
                    Connect on{" "}
                    <Link href="/" underline="hover">
                      Homepage
                    </Link>{" "}
                    /{" "}
                    <Link href={import.meta.env.VITE_Backend_Url} underline="hover">
                      TradingQnA
                    </Link>{" "}
                    /{" "}
                    <Link href="https://yourstory.com/people/nithin-kamath" underline="hover">
                      Twitter
                    </Link>
                  </>
                ) : (
                  text
                )}
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* === Team Grid === */}
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {team.map((member, idx) => (
            <Grid
              item
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
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, textAlign: "center" }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1, textAlign: "center" }}
              >
                {member.category}
              </Typography>

              <Accordion
                elevation={0}
                sx={{
                  width: "100%",
                  maxWidth: "300px",
                  mt: 1,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                      width: "20px",
                    }}
                  >
                    Bio
                  </AccordionSummary>
                </Box>
                <AccordionDetails>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.95rem",
                      textAlign: "left",
                      lineHeight: 1.6,
                      backgroundColor: "#fff",
                      border: "1px solid #eee",
                      borderRadius: "8px",
                      padding: "1rem",
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
