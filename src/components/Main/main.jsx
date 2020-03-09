import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import "./main.css";
import MainGrid from "../Grid/maingrid";

const Main = () => {
  return (
    <Container className="Container">
      <MainGrid></MainGrid>
    </Container>
  );
};

export default Main;
