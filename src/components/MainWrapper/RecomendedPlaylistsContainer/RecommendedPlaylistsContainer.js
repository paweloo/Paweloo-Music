import React from "react";
import styled from "styled-components";
import RecommendedPlaylists from "./RecommendedPlaylists/RecommendedPlaylists";

const PlaylistWrapper = styled.div`
  width: 100vw;
  height: 154px;
  display: float;
  padding: 0 20px;
  overflow-x: scroll;
`;

const RecommendedPlaylistsContainer = (props) => (
  <PlaylistWrapper>
    {props.items.map((item) => (
      <RecommendedPlaylists key={item.name} {...item} />
    ))}
  </PlaylistWrapper>
);

export default RecommendedPlaylistsContainer;
