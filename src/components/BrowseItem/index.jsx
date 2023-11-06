import React from 'react';
import { Text } from '../index';
import { Wrapper, Image } from './styled';

const BrowseItem = ({ title, imgsrc }) => {
  return (
    <Wrapper>
      <Text theme="text2">{title}</Text>
      <Image src={imgsrc} />
    </Wrapper>
  );
};

export default BrowseItem;
