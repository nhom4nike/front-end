import React from 'react';

import Logo from '@/components/header/logo';
import CreateSignature from './create_signature';

const LeftHeader = () => (
    <div className="wrap-header__left">
      <Logo />
      <CreateSignature />
    </div>
  );

export default LeftHeader;
