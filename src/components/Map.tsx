import React from "react";
import styled from "styled-components";

import Mapbox from "./Mapbox/Mapbox";

const Container = styled.section`
  height: 70vh;
  color: black;
`;

const Map: React.FC = () => {
  return (
    <Container>
      <Mapbox />
    </Container>
  );
};

export default Map;
