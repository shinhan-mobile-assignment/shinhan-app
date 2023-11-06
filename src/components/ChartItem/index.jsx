import React from 'react';
import { Text } from '../../components';
import { StyledCard, Image } from './styled';
import kor from '../../assets/images/kor.png';
import usa from '../../assets/images/usa.png';

const ChartItem = ({
  chartName,
  chartPrice,
  chartChange,
  chartRate,
  chartStatus,
  country,
}) => {
  let text1UpTheme = 'text1_up';
  let chartRateTheme = 'text2_up';
  let upDownIcon = '▲';
  let countryImage = null;

  if (chartRate > 0) {
    text1UpTheme = 'text1_up';
    chartRateTheme = 'text2_up';
    upDownIcon = '▲';
  } else if (chartRate < 0) {
    text1UpTheme = 'text1_down';
    chartRateTheme = 'text2_down';
    upDownIcon = '▼';
  }

  if (country === 'kor') {
    countryImage = kor;
  } else if (country === 'usa') {
    countryImage = usa;
  }

  return (
    <StyledCard theme="chartItem">
      <StyledCard theme="chartInfo">
        <Text theme="text2">{chartName}</Text>
        {countryImage && <Image src={countryImage} alt={country} />}
      </StyledCard>
      <Text theme={text1UpTheme}>{chartPrice}</Text>
      <StyledCard theme="rateInfo">
        <Text theme={chartRateTheme}>
          {upDownIcon} {chartChange}
        </Text>
        <Text theme={chartRateTheme}>{chartRate}%</Text>
      </StyledCard>
      <Text theme="text3_other">{chartStatus}</Text>
    </StyledCard>
  );
};

export default ChartItem;
