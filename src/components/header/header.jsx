import React from 'react';
import './index.less';

import RightHeader from '@/components/header/right_header';
import LeftHeader from '@/components/header/left_header';

const Header = () => (
    <div className="wrap">
      <LeftHeader />
      <RightHeader />
    </div>
  );

export default Header;
