import React, { FunctionComponent, memo } from 'react';

interface Props {
    text: string;
    value?: number | string;
    unit: string;
    twoDecimalPlaces?: boolean;
    unitPlacement?: 'before' | 'after';
}

const LoanParamBase: FunctionComponent<Props> = (props) => {
  const {
    text, unit, value, unitPlacement = 'after', twoDecimalPlaces,
  } = props;

  const valueOrZero = Number(value || 0);
  const formattedValue = twoDecimalPlaces ? valueOrZero.toFixed(2) : valueOrZero;

  return (
    <div className="d-flex justify-content-between">
      <div className="fw-bold fs-6">
        {text}
      </div>
      <div className="fw-bold fs-3">
        {unitPlacement === 'before' ? `${unit} ${formattedValue} ` : `${formattedValue} ${unit}`}
      </div>
    </div>
  );
};

export const LoanParam = memo(LoanParamBase);
