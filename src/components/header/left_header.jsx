import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '@/components/header/logo';
import CreateSignature from './create_signature';

const location = useLocation();
const LeftHeader = () => (
  <div className="wrap-header__left">
    <Logo />
    {location.pathname === '/' && <CreateSignature />}
  </div>
);

export default LeftHeader;
