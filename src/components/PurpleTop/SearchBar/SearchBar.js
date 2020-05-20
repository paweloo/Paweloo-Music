import React, { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "../../../App";
import searchIconGrey from "../../../img/icons/search_grey.svg";

const Search = styled.div`
  background-color: ${({ theme }) => theme.body};
  width: calc(100% - 52px);
  height: 42px;
  border-radius: 20px;
  margin: -60px 10px 0 0;
  box-shadow: 0px 6px 16px 0px ${({ color }) => color};
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  outline: none;
  padding: 0 10px;
  color: ${({ theme }) => theme.header};
`;

function SearchBar() {
  const [backColor] = useContext(ColorContext);
  return (
    <Search color={backColor}>
      <img alt="Search Icon" src={searchIconGrey} />
      <StyledInput placeholder="What's playing in your soul?" />
    </Search>
  );
}

export default SearchBar;
