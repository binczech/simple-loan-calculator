import React, { FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AppLayout } from 'layout';

import { OurRoutes } from './routes';

import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const queryClient = new QueryClient();

const App: FunctionComponent = () => (
  <QueryClientProvider client={queryClient}>
    <AppLayout>
      <OurRoutes />
    </AppLayout>
  </QueryClientProvider>
);

export default App;
