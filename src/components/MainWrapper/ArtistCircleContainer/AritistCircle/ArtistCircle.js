import React from "react";
import styled from "styled-components";

const Artist = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50px;
  background-size: cover;
  background-position: center;
`;

const ArtistCircle = ({ image, name }) => (
  <Artist alt={name} style={{ backgroundImage: `url(${image})` }}></Artist>
);

export default ArtistCircle;
