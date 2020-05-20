import React, { useContext } from "react";
import { ColorContext } from "../App.js";
import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  background-color: ${({ color }) => color};
}
`;

function GlobalStyles() {
  const [backColor] = useContext(ColorContext);
  return <Style color={backColor}></Style>;
}

export default GlobalStyles;
