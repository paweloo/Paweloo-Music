import React from "react";
import styled from "styled-components";

const TrackWrapper = styled.div`
  padding-bottom: 20px;
  width: calc(50vw - 40px);
`;

const Track = styled.div`
  width: calc(50vw - 40px);
  height: calc(50vw - 40px);
  border-radius: 20px;
  background-size: cover;
  background-position: center;
`;

const StyledTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  overflow: hidden;
`;

const StyledArtist = styled.p`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.6;
  color: ${({ theme }) => theme.text};
  width: 100%;
  overflow: hidden;
`;

const SpotifyCovers = (props) => (
  <TrackWrapper>
    <Track
      alt={props.name}
      style={{
        backgroundImage: `url(${props.images[1].url})`,
      }}
    ></Track>
    <StyledTitle>{props.name}</StyledTitle>
    <StyledArtist>
      {props.artists.map(function (object) {
        return object.name;
      })}
    </StyledArtist>
  </TrackWrapper>
);

export default SpotifyCovers;
