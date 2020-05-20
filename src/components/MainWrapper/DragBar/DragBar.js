import React, { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "../../../App";

const Bar = styled.div`
  /* background-color: #d8a7e1; */
  background-color: ${({ color }) => color};
  opacity: 0.4;
  width: 40px;
  height: 4px;
  border-radius: 100px;
  margin-top: 6px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

function DragBar() {
  const [backColor] = useContext(ColorContext);
  return <Bar color={backColor}></Bar>;
}

export default DragBar;
