import React from 'react';
import { Outlet } from 'react-router-dom';
import VisitTrackingWrapper from './VisitTrackingWrapper';

const RootLayout: React.FC = () => {
  return (
    <VisitTrackingWrapper>
      <Outlet />
    </VisitTrackingWrapper>
  );
};

export default RootLayout;
