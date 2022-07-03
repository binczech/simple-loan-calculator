import React from 'react';
import { Route } from 'react-router-dom';

import { Calculator } from './screens';

export const calculatorRoutes = [
  (
    <Route
      key="calculator"
      path="/calculator"
      element={<Calculator />}
    />
  ),
  (
    <Route
      key="default"
      path="*"
      element={<Calculator />}
    />
  ),
];
