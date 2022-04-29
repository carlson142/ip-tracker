import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Map from "./components/Map";

const Container = styled.main`
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Map></Map>
    </Container>
  );
};

export default App;
