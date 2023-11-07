import React from 'react';
import { Text } from '../index';
import { Wrapper, Image, ContentWrapper } from './styled';

const BrowseItem = ({ title, imgsrc }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Text theme="text2">{title}</Text>
        <Image src={imgsrc} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default BrowseItem;
