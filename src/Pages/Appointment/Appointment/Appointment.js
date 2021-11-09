import { Container, Typography } from "@mui/material";
import React from "react";

import service1 from "../../../images/service1.png";
import service2 from "../../../images/service2.png";
import service3 from "../../../images/service3.png";

const services = [
  { id: 1, serviceName: "Anti Age Face Treatment", price: 199, img: service1 },
  { id: 2, serviceName: "Hair Color & Styleing", price: 99, img: service2 },
  { id: 3, serviceName: "Skin Care Treatment", price: 299, img: service3 },
];

const Appointment = () => {
  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4">Appointments</Typography>
    </Container>
  );
};

export default Appointment;
