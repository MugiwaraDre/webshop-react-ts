import React from 'react';
import { Card } from '../Card';
import { Wrapper, CardContainer } from './QualityAdds.styles';
import img1 from '../../assets/images/sunpwr.jpeg';
import img2 from '../../assets/images/windpwr.jpeg';
import img3 from '../../assets/images/globe.jpg';

export const QualityAdds: React.FC = () => {
  return (
    <Wrapper>
      <h1>Perserving earth while delivering quality products</h1>
      <CardContainer>
        <Card
          title={'Renewable energy'}
          description={
            'All our products are from local businesses, all compliant to saveEarth foundation'
          }
          imgUrl={img1}
        />
        <Card
          title={'Sun is good'}
          description={'Our warehouse harness true infinte free power'}
          imgUrl={img2}
        />
        <Card
          title={'Go Green sponsor'}
          description={'2% of all profits goes yearly to the Go Green Alliance'}
          imgUrl={img3}
        />
      </CardContainer>
    </Wrapper>
  );
};
