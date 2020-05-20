import React from "react";
import styled from "styled-components";

let date = new Date();
let hours = date.getHours();

const StyledParagraph = styled.h2`
  color: ${({ theme }) => theme.header};
  font-size: 18;
  display: block;
  font-weight: 700;
  padding: 20px 20px 28px 20px;
`;

class WelcomeParagraph extends React.Component {
  state = {
    night: "Good night",
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
  };

  current = this.state.evening;

  render() {
    if (hours < 4) {
      this.current = this.state.night;
    } else if (hours < 12) {
      this.current = this.state.morning;
    } else if (hours < 19) {
      this.current = this.state.afternoon;
    } else {
      this.current = this.state.evening;
    }
    return (
      <StyledParagraph>
        {this.current}, {this.props.children}!
      </StyledParagraph>
    );
  }
}

export default WelcomeParagraph;
