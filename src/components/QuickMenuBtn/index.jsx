import React from "react";
import { Button, Text } from '../../components';
import { StyledCard } from "./styled";

const QuickMenuBtn = ({ title, imageSource }) => {
  return (
    <StyledCard theme="quick" title={title}>
    <Button theme="quickBtn">
      <img src={imageSource} alt={title} />
    </Button>

      <Text theme="text4"> {title} </Text>
    </StyledCard>
  );
};

export default QuickMenuBtn;
