import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function FaqsComponent() {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: 4, paddingBottom: 8 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        {/* Header Section */}
        {/* <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="h3" color="primary" gutterBottom>
            Terms and Conditions
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Please read the following terms and conditions carefully before using our platform.
          </Typography>
        </Box> */}

        <Box sx={{ maxWidth: "xl", margin: "0 auto", padding: 0 }}>
          {/* <Typography variant="h3" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            Last Updated: January 2025
          </Typography> */}

          <Typography variant="h5" color="primary" gutterBottom>
            1. How to withdraw funds?
          </Typography>
          <Typography variant="body1" paragraph>
            You can withdraw your money in your personal account in the Withdraw Section.
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            2. How fast is my withdrawal processed?
          </Typography>
          <Typography variant="body1" paragraph>
            Withdrawal requests are processed instantly. Other transactions are approved and paid within 48 business hours.
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            3. Who manages the funds?
          </Typography>
          <Typography variant="body1" paragraph>
           Our team of investment experts manage all the funds.
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            4. Are there risks to lose money?
          </Typography>
          <Typography variant="body1" paragraph>
           There are no risks in any investment programs. There are some simple ways that we help to reduce risks of losing your money. First, set a certain financial goal and deposit such sum of money that you can afford. Remember that our expert trading team is always ready to consult you in any questions.
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            5. How to check my account balance?
          </Typography>
          <Typography variant="body1" paragraph>
            You can check your balance in your personal account any time you need.
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            6. May I make additional deposits?
          </Typography>
          <Typography variant="body1" paragraph>
           Yes, but note that all the transactions are handled separately.
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            7. How is the interest calculated?
          </Typography>
          <Typography variant="body1" paragraph>
            Your interest is calculated every business day based on the size of your deposit.
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            8. How fast are my deposits added to my account?
          </Typography>
          <Typography variant="body1" paragraph>
           Your account is credited once payment is confirmed and it is from a few minutes.
          </Typography>
          

          <Typography variant="h5" color="primary" gutterBottom>
            9. What payment systems do you use?
          </Typography>
          <Typography variant="body1" paragraph>
           We accept Western Union, Moneygram, Crypto, Skrill, Bank deposit.
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            10. What is the process of investing?
          </Typography>
          <Typography variant="body1" paragraph>
            To make investments you should register to create an account and then you can make your deposit. All the investments are made in your personal account after login.
          </Typography>

        
        </Box>
      </Paper>
    </Container>
  );
}

export default FaqsComponent;
