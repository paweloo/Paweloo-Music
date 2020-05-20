import React from "react";
import styled from "styled-components";
import ArtistCircle from "./AritistCircle/ArtistCircle";

const ArtistWrapper = styled.div`
  width: 100vw;
  height: 72px;
  display: float;
  justify-content: space-between;
  margin-top: 28px;
  padding: 0 20px;
`;

const ArtistCircleContainer = (props) => (
  <ArtistWrapper>
    {props.items.map((item) => (
      <ArtistCircle key={item.name} {...item} />
    ))}
  </ArtistWrapper>
);

export default ArtistCircleContainer;
