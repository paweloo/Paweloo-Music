import React from "react";
import styled from "styled-components";

const Item = styled.p`
  width: 100%;
  padding: 10px 20px;
  font-weight: 500;
  transition: background 0.1s;
  background-color: grey;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: lightgrey;
  }
`;

const MenuItem = ({ children, onClick }) => (
  <Item onClick={onClick}>{children}</Item>
);

export default MenuItem;
