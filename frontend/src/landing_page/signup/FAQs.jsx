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
  const initialFaqs = [
    {
      question: "What is a Zerodha account?",
      answer:
        "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
    },
    {
      question: "What documents are required to open a demat account?",
      answer: (
        <Box>
          <Typography>
            The following documents are required to open a Zerodha account
            online:
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="PAN number" />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Aadhaar Card (Linked with a phone number for OTP verification)" />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Cancelled cheque or bank account statement (To link your bank account)" />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Income proof (Required only if you wish to trade in Futures & options)" />
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      question: "Is Zerodha account opening free?",
      answer: "Yes, It is completely free.",
    },
    {
      question: "Are there any maintenance charges for a demat account?",
      answer:
        "The account maintaince charges is appliacable based on the account type.For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.To learn more about BSDA, Click here.",
    },
    {
      question: "Can I open a demat account without a bank account?",
      answer:
        "To open a demat account, you must have a bank account in your name.If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ mb: "4rem" }}>
          FAQs
        </Typography>
        {initialFaqs.map((sq, idx) => (
          <Accordion
            expanded={expanded === `panel${idx + 1}`}
            onChange={handleChange(`panel${idx + 1}`)}
            variant="outline"
            sx={{
              padding: "1rem 0",
              borderTop: expanded ? "1px solid #ccc" : "none",
            }}
            key={idx}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6">{sq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {typeof sq.answer === "string" ? (
                <Typography>{sq.answer}</Typography>
              ) : (
                sq.answer
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
}
