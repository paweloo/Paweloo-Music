import React, { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "../../../App";
import defaultProf from "../../../img/profileImage/defaultProfileImage.jpg";

const Profile = styled.button`
  background-color: white;
  width: 42px;
  height: 42px;
  border-radius: 50px;
  border: none;
  outline: none;
  margin: -60px 0 0 0;
  background-size: contain;
  background-position: center;
  box-shadow: 0px 6px 16px 0px ${({ color }) => color};
`;

function ProfileCircle(props) {
  const [backColor] = useContext(ColorContext);
  return (
    <Profile
      alt={props.name}
      style={{
        backgroundImage: `url(${
          props.picture.length !== 0 ? props.picture : defaultProf
        })`,
      }}
      onClick={props.isOpen}
      color={backColor}
    ></Profile>
  );
}

export default ProfileCircle;
