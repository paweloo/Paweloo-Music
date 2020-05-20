import React from "react";
import styled from "styled-components";

const Playlist = styled.div`
  width: 296px;
  height: 154px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  margin-right: 18px;
`;

const RecommendedPlaylists = ({ image, name }) => (
  <Playlist alt={name} style={{ backgroundImage: `url(${image})` }}></Playlist>
);

export default RecommendedPlaylists;
