import React from "react";
import styled from "styled-components";

import topBG from "../img/pattern-bg.png";
import CustomInput from "./CustomInput";
import InfoPanel from "./InfoPanel";

const Container = styled.section`
  height: 30vh;

  background-image: url(${topBG});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 5rem;
  font-weight: 500;

  position: relative;
`;

const Heading = styled.h1`
  font-size: 4rem;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Heading>IP Address Tracker</Heading>
      <CustomInput />
      <InfoPanel />
    </Container>
  );
};

export default Header;
