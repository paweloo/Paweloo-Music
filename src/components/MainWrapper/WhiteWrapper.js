import React from "react";
import styled from "styled-components";
import DragBar from "./DragBar/DragBar";
import ArtistCircleContainer from "./ArtistCircleContainer/ArtistCircleContainer";
import art1 from "../../img/artistsImages/AVB.jpeg";
import art2 from "../../img/artistsImages/LF.jpg";
import art3 from "../../img/artistsImages/OR.jpeg";
import art4 from "../../img/artistsImages/M.jpg";
import play1 from "../../img/playlistsImages/back_pink.jpeg";
import play2 from "../../img/playlistsImages/back_blue.jpeg";
import ParagraphBreaker from "./ParagraphBreaker/ParagraphBreaker";
import RecommendedPlaylistsContainer from "./RecomendedPlaylistsContainer/RecommendedPlaylistsContainer";
import WelcomeParagraph from "./WelcomeParagraph/WelcomeParagraph";
import TrackCoversContainer from "./TrackCoversContainer/TrackCoversContainer";
import track1 from "../../img/tracksImages/AliveAndFeelingFine.jpg";
import track2 from "../../img/tracksImages/DidntI.jpg";
import track3 from "../../img/tracksImages/TheNightWeMet.jpg";
import track4 from "../../img/tracksImages/Embrace.jpg";
import SpotifyCoversContainer from "./SpotifyCoversContainer/SpotifyCoversContainer";
import authenticate from "../../Authenticate.js";

const token = authenticate();

const artists = [
  {
    image: art1,
    name: "Armin Van Buuren",
  },
  {
    image: art2,
    name: "Lost Frequencies",
  },
  {
    image: art3,
    name: "OneRepublic",
  },
  {
    image: art4,
    name: "Macklemore",
  },
];

const playlists = [
  {
    image: play1,
    name: "Home Time",
  },
  {
    image: play2,
    name: "Chill For Real",
  },
];

const tracks = [
  {
    image: track1,
    album: "Alive and Feeling Fine",
    title: "Lost Like Us",
    artist: "Lost Frequencies",
  },
  {
    image: track2,
    album: "Better Days",
    title: "Didn't I",
    artist: "OneRepublic",
  },
  {
    image: track3,
    album: "The Night We Met",
    title: "The Night We Met",
    artist: "Alle Farben",
  },
  {
    image: track4,
    album: "Embrace",
    title: "Freefall",
    artist: "Armin Van Buuren",
  },
];

const WhiteBack = styled.div`
  background-color: ${({ theme }) => theme.body};
  width: 100%;
  border-radius: 28px 28px 0 0;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;

class WhiteWrapper extends React.Component {
  state = {
    name: "",
    spotifyTracks: [],
  };

  componentDidMount() {
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.display_name.split(" ")[0],
        });
      });

    fetch("https://api.spotify.com/v1/browse/new-releases", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ spotifyTracks: data.albums.items });
      });
  }

  render() {
    return (
      <WhiteBack>
        <DragBar />
        <ArtistCircleContainer items={artists} />
        <WelcomeParagraph>{this.state.name}</WelcomeParagraph>
        <RecommendedPlaylistsContainer items={playlists} />
        <ParagraphBreaker>Continue Listening</ParagraphBreaker>
        <TrackCoversContainer items={tracks} />
        <ParagraphBreaker top>New Releases</ParagraphBreaker>
        <SpotifyCoversContainer items={this.state.spotifyTracks} />
      </WhiteBack>
    );
  }
}

export default WhiteWrapper;
