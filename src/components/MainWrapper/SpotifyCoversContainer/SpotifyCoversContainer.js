import React from "react";
import styled from "styled-components";
import SpotifyCovers from "./SpotifyCovers/SpotifyCovers";

const TrackWrapper = styled.div`
  width: 100vw;
  display: float;
  padding: 0 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SpotifyCoversContainer = (props) => (
  <TrackWrapper>
    {props.items.map((item) => (
      <SpotifyCovers key={item.name} {...item} />
    ))}
  </TrackWrapper>
);

export default SpotifyCoversContainer;
