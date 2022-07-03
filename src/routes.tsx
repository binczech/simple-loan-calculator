import React, { FunctionComponent, memo } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

import { calculatorRoutes } from 'calculator';

interface Props {}

const OurRoutesBase: FunctionComponent<Props> = () => (
  <BrowserRouter>
    <Routes>
      {calculatorRoutes}
    </Routes>
  </BrowserRouter>
);

export const OurRoutes = memo(OurRoutesBase);
