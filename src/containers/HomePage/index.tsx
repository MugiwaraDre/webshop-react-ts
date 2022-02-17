import React from 'react';
import { QualityAdds } from '../../components/QualityAdds';
import { motion } from 'framer-motion';

import { BackgroundImage } from './HomePage.styles';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p style={{ opacity: '0' }}>HomePage</p>
      <BackgroundImage />
      <QualityAdds></QualityAdds>
    </motion.div>
  );
};

export default HomePage;
