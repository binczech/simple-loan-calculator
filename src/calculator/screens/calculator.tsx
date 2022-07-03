import React, { FunctionComponent, memo } from 'react';

import { CalculatorForm } from 'calculator/components';
import { useGetCalculatorConfiguration } from 'calculator/model';
import { Loader } from 'layout';

const CalculatorBase: FunctionComponent = () => {
  const {
    data, isError, error, isSuccess,
  } = useGetCalculatorConfiguration();

  if (isError) {
    return (
      <div>{error.message}</div>
    );
  }

  if (isSuccess) {
    return (
      <CalculatorForm calculatorConfiguration={data} />
    );
  }

  return (
    <Loader loading withoutChildren />
  );
};

export const Calculator = memo(CalculatorBase);
