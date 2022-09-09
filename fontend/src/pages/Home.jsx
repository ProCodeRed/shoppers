import React from "react";
import { Container } from "react-bootstrap";
import HomeScreen from "../pages/HomeScreen";

const Home = () => {
  return (
    <>
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
    </>
  );
};

export default Home;
