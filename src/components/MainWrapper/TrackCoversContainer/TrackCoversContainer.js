import React from "react";
import styled from "styled-components";
import TrackCovers from "./TrackCovers/TrackCovers";

const TrackWrapper = styled.div`
  width: 100vw;
  display: float;
  padding: 0 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TrackCoversContainer = (props) => (
  <TrackWrapper>
    {props.items.map((item) => (
      <TrackCovers key={item.title} {...item} />
    ))}
  </TrackWrapper>
);

export default TrackCoversContainer;
