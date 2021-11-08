import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4">Please Login</Typography>
      <Box
        sx={{
          bgcolor: "#f7f7f7",
          p: 4,
          textAlign: "center",
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        <Button
          onClick={signInWithGoogle}
          variant="outlined"
          startIcon={<GoogleIcon />}
        >
          Sign In With Google
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
