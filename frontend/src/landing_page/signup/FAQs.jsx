import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function FAQs() {
  const faqs = [
    {
      question: "What is a Zerodha account?",
      answer:
        "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
    },
    {
      question: "What documents are required to open a demat account?",
      answer: (
        <Box>
          <Typography
            sx={{
              mb: 1,
              fontSize: { xs: "0.95rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
            The following documents are required to open a Zerodha account
            online:
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            {[
              "PAN number",
              "Aadhaar Card (Linked with a phone number for OTP verification)",
              "Cancelled cheque or bank account statement (To link your bank account)",
              "Income proof (Required only if you wish to trade in Futures & Options)",
            ].map((item, i) => (
              <ListItem
                key={i}
                sx={{
                  display: "list-item",
                  py: 0.5,
                  "&::marker": { color: "primary.main" },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    color: "text.secondary",
                  }}
                  primary={item}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ),
    },
    {
      question: "Is Zerodha account opening free?",
      answer: "Yes, it is completely free.",
    },
    {
      question: "Are there any maintenance charges for a demat account?",
      answer:
        "The account maintenance charges depend on the account type. For Basic Services Demat Account (BSDA): zero charges if the holding value is less than ₹4,00,000. For non-BSDA accounts: ₹300 per year + GST.",
    },
    {
      question: "Can I open a demat account without a bank account?",
      answer:
        "You must have a bank account in your name. If UPI verification is completed successfully, no proof of bank is needed. Otherwise, a cancelled cheque or bank statement is required.",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#fafafaff",
        pb: { xs: 3, md: 6 },
        pt:3
      }}
    >
      <Container maxWidth="xxl">
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: { xs: 4, sm: 6 },
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.4rem" },
            fontWeight: 600,
            color: "text.primary",
            lineHeight: 1.3,
          }}
        >
          Frequently Asked Questions
        </Typography>

        {/* Accordion Section */}
        {faqs.map((item, idx) => (
          <Accordion
            key={idx}
            expanded={expanded === `panel${idx}`}
            onChange={handleChange(`panel${idx}`)}
            sx={{
              backgroundColor: "background.paper",
              borderRadius: "8px",
              mb: 2,
              boxShadow: expanded
                ? "0 2px 10px rgba(0,0,0,0.08)"
                : "0 1px 4px rgba(0,0,0,0.04)",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
              aria-controls={`panel${idx}-content`}
              id={`panel${idx}-header`}
              sx={{
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>

            <Divider />

            <AccordionDetails
              sx={{
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 2 },
                bgcolor: "#fff",
              }}
            >
              {typeof item.answer === "string" ? (
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  {item.answer}
                </Typography>
              ) : (
                item.answer
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
