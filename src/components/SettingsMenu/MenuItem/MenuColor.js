import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ColorContext } from "../../../App";

const Item = styled.div`
  border-radius: 50px;
  width: 35px;
  height: 35px;
  margin: 10px;

  ${(props) =>
    props.wide &&
    css`
      width: 38%;
    `};
`;

function MenuColor({ color, wide }) {
  const [, setBackColor] = useContext(ColorContext);
  return (
    <Item
      wide={wide}
      onClick={() => setBackColor(color)}
      style={{ backgroundColor: color }}
    ></Item>
  );
}

export default MenuColor;
