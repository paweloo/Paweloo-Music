import React from "react";
import styled, { css } from "styled-components";

const StyledParagraph = styled.h2`
  color: ${({ theme }) => theme.header};
  font-size: 18;
  display: block;
  font-weight: 700;
  padding: 28px 20px;

  ${({ top }) =>
    top &&
    css`
      padding: 8px 20px 28px 20px;
    `};
`;

const ParagraphBreaker = ({ children, top }) => (
  <StyledParagraph top={top}>{children}</StyledParagraph>
);

export default ParagraphBreaker;
