import React from "react";
import styled from "styled-components";

const TrackWrapper = styled.div`
  padding-bottom: 20px;
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
`;

const StyledArtist = styled.p`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.6;
  color: ${({ theme }) => theme.text};
`;

const TrackCovers = ({ image, title, artist }) => (
  <TrackWrapper>
    <Track alt={title} style={{ backgroundImage: `url(${image})` }}></Track>
    <StyledTitle>{title}</StyledTitle>
    <StyledArtist>{artist}</StyledArtist>
  </TrackWrapper>
);

export default TrackCovers;
