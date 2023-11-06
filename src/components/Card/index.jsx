import React from "react";
import { StyledCard } from "./styled";

const Card = ({ theme, children }) => {
  return (
    <StyledCard theme={theme}>
      {children}
    </StyledCard>
  );
};

export default Card;
