import React from "react";
import styled, { css } from "styled-components";
import SearchBar from "./SearchBar/SearchBar";
import ProfileCircle from "./ProfileCircle/ProfileCircle";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import { CSSTransition } from "react-transition-group";
import authenticate from "../../Authenticate.js";

const token = authenticate();

const PurpleBack = styled.div`
  width: 100%;
  height: 400px;
  position: fixed;
  z-index: -1;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 10px;

  ${({ onTop }) =>
    onTop &&
    css`
      z-index: 999;
    `};
`;

class PurpleTop extends React.Component {
  state = {
    name: "",
    profilePic: "",
    settingsMenu: false,
  };

  toggleSettingsMenu = () => {
    this.setState({ settingsMenu: !this.state.settingsMenu });
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
          name: data.display_name,
          profilePic: data.images.map(function (Object) {
            return Object.url;
          }),
        });
      });
  }

  render() {
    return (
      <>
        <PurpleBack onTop={this.state.settingsMenu}>
          <SearchBar></SearchBar>
          <ProfileCircle
            name={this.state.name}
            picture={this.state.profilePic}
            isOpen={this.toggleSettingsMenu}
          ></ProfileCircle>
        </PurpleBack>

        <CSSTransition
          in={this.state.settingsMenu}
          timeout={100}
          classNames="fade"
          unmountOnExit
        >
          <SettingsMenu />
        </CSSTransition>
      </>
    );
  }
}

export default PurpleTop;
