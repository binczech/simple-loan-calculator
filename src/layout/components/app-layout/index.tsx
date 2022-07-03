import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, memo, PropsWithChildren } from 'react';

import { Title } from '../title';

import './styles.scss';

const AppLayoutBase: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Layout>
    <Header>
      <div>
        <Title isSiteTitle text="Loan Calculator" />
      </div>
      <div className="content">
        <Content>
          {children}
        </Content>
      </div>
    </Header>
  </Layout>
);

export const AppLayout = memo(AppLayoutBase);
