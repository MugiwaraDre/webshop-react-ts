import React from 'react';
import { QualityAdds } from '../../components/QualityAdds';

import { BackgroundImage } from './HomePage.styles';

const HomePage: React.FC = () => {
  return (
    <div>
      <p style={{ opacity: '0' }}>HomePage</p>
      <BackgroundImage />
      <QualityAdds></QualityAdds>
    </div>
  );
};

export default HomePage;
