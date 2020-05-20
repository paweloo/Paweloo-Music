import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ColorContext } from "../../App";

const Switch = styled.div`
  border-radius: 50px;
  width: 70px;
  height: 32px;
  margin: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  transition: background 0.4s ease-out;

  ${(props) =>
    props.dark &&
    css`
      background-color: ${({ color }) => color};
    `};
`;

const Dot = styled.div`
  background-color: black;
  width: 28px;
  height: 28px;
  border-radius: 50px;
  margin-left: 2px;
  transition: margin-left 0.4s, background 0.4s ease-out;

  ${(props) =>
    props.dark &&
    css`
      background-color: white;
      margin-left: 40px;
    `};
`;

function ToggleSwitch({ dark, onClick }) {
  const [backColor] = useContext(ColorContext);
  return (
    <Switch dark={dark} onClick={onClick} color={backColor}>
      <Dot dark={dark} onClick={onClick} color={backColor} />
    </Switch>
  );
}

export default ToggleSwitch;
