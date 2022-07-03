import { Spin } from 'antd';
import classNames from 'classnames';
import React, { FunctionComponent, memo, PropsWithChildren } from 'react';

import './styles.scss';

interface Props {
    loading?: boolean;
    withoutChildren?: boolean;
}

const LoaderBase: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const { children, loading, withoutChildren } = props;

  return loading ? (
    <Spin tip="Loading...">
      <div className={classNames('w-100', withoutChildren && 'withoutChildren')}>
        {children}
      </div>
    </Spin>
  ) : (
    <div>
      {children}
    </div>
  );
};

export const Loader = memo(LoaderBase);
