import React, { useState } from "react";
import styled from "styled-components";

import { IoChevronForward } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { setInputValue } from "../redux/slice/inputSlice";
import {
  getIpFromAPI,
  updateLat,
  updateLng,
} from "../redux/slice/IpGeolocationSlice";

import { isIP } from "is-ip";

const Form = styled.form`
  display: flex;

  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 1.5rem 2rem;
  width: 50rem;

  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  outline: none;
  border: none;

  font-size: 1.8rem;
  color: var(--color-primary-dark-gray);
`;

const Button = styled.button`
  padding: 1.5rem 2rem;
  cursor: pointer;

  background-color: black;
  border: none;

  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  transition: all 0.2s ease-in;

  :hover {
    background-color: var(--color-primary-dark-gray);
  }
`;

const Error = styled.div`
  position: absolute;
  bottom: 7rem;
  left: 50%;
  transform: translate(-50%);

  color: red;
  font-size: 1.8rem;
  font-weight: 500;
`;

const CustomInput: React.FC = () => {
  const [error, setError] = useState<boolean>(false);

  const input = useAppSelector((state) => state.inputReducer.inputValue);

  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.ipReducer.data);

  const handleUpdate = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (!isIP(input)) {
      setError((prev) => (prev = true));
      return;
    } else {
      setError((prev) => (prev = false));
      dispatch(getIpFromAPI(input));
      // dispatch(updateLat(data.location.lat));
      // dispatch(updateLng(data.location.lng));
    }
  };

  return (
    <Form>
      <Input
        placeholder="Search for any IP address or domain"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          dispatch(setInputValue(e.currentTarget.value));
        }}
      />

      {error && <Error>Invalid IP! </Error>}
      <Button onClick={handleUpdate}>
        <IoChevronForward size={25} style={{ color: "white" }} />
      </Button>
    </Form>
  );
};

export default CustomInput;
