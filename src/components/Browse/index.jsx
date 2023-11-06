import { useState } from 'react';
import { Text, BrowseItem } from '../index';
import { SlideContainer, SlideWrapper, Slide, ListItem, Item } from './styled';
import sol from '../../assets/images/sol.svg';
import lino from '../../assets/images/lino.svg';
import lulu from '../../assets/images/lulu.svg';
import moli from '../../assets/images/moli.svg';
import shoo from '../../assets/images/shoo.svg';

const slides = [
  {
    title: '알아두면 쓸모 있는 주식 정보',
    imgsrc: sol,
  },
  { title: '공지', imgsrc: moli },
  { title: '알파 TV', imgsrc: lino },
  { title: '투자플러스', imgsrc: lulu },
  { title: '글로벌리포트', imgsrc: shoo },
];

const Browse = () => {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <SlideContainer>
      <Text theme="text6">둘러보기</Text>
      <SlideWrapper onMouseEnter={onStop} onMouseLeave={onRun}>
        <Slide className={'slide original'.concat(animate ? '' : ' stop')}>
          {slides.map((s, i) => (
            <ListItem key={i}>
              <Item>
                <BrowseItem title={s.title} imgsrc={s.imgsrc} />
              </Item>
            </ListItem>
          ))}
        </Slide>
        <Slide className={'slide clone'.concat(animate ? '' : ' stop')}>
          {slides.map((s, i) => (
            <ListItem key={i}>
              <Item>
                <BrowseItem title={s.title} imgsrc={s.imgsrc} />
              </Item>
            </ListItem>
          ))}
        </Slide>
      </SlideWrapper>
    </SlideContainer>
  );
};

export default Browse;
