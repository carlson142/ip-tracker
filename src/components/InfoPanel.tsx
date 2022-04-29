import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks/hooks";

const Container = styled.div`
  padding: 5rem;
  width: 80vw;

  background-color: white;

  border-radius: 2rem;

  position: absolute;
  bottom: -10rem;

  display: flex;

  z-index: 1000;
`;

const Box = styled.div`
  flex: 1;
  height: 100%;

  :not(:last-child) {
    border-right: 1px solid var(--color-primary-gray);
  }

  :not(:first-child) {
    margin-left: 2rem;
  }
`;

const BoxName = styled.h4`
  color: var(--color-primary-gray);
  font-size: 1.8rem;
  font-weight: 500;
`;

const BoxValue = styled.h2`
  color: black;
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 1rem;
`;

const InfoPanel: React.FC = () => {
  const data = useAppSelector((state) => state.ipReducer.data);
  console.log(data);

  return (
    <Container>
      <Box>
        <BoxName>IP Address</BoxName>
        <BoxValue>{data.ip}</BoxValue>
      </Box>

      <Box>
        <BoxName>Location</BoxName>
        <BoxValue>
          {data.location.city}, {data.location.country}
        </BoxValue>
      </Box>

      <Box>
        <BoxName>Timezone</BoxName>
        <BoxValue>{data.location.timezone}</BoxValue>
      </Box>

      <Box>
        <BoxName>ISP</BoxName>
        <BoxValue>{data.isp || "none"}</BoxValue>
      </Box>
    </Container>
  );
};

export default InfoPanel;
