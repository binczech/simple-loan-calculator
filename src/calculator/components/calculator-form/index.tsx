import React, {
  FunctionComponent, memo, useCallback, useState,
} from 'react';

import { useGetFirstLoanOffer } from 'calculator/model';
import { CalculatorConfiguration, LoanParams } from 'calculator/types';
import { Loader, Slider } from 'layout';

import { LoanOffer } from '../loan-offer';
import { LoanParam } from '../loan-param';

interface Props {
    calculatorConfiguration: CalculatorConfiguration;
}

const CalculatorFormBase: FunctionComponent<Props> = (props) => {
  const { calculatorConfiguration } = props;
  const { amountInterval, termInterval } = calculatorConfiguration;
  const [amount, setAmount] = useState(amountInterval.defaultValue);
  const [term, setTerm] = useState(termInterval.defaultValue);
  const [isFormPristine, setIsFormPristine] = useState(true);
  const [loanParams, setLoanParams] = useState<LoanParams>({
    amount: amountInterval.defaultValue,
    term: termInterval.defaultValue,
  });

  const { data, isLoading, isPreviousData } = useGetFirstLoanOffer({ loan: loanParams, enabled: !isFormPristine });

  const onAfterAmountChange = useCallback((newAmount: number) => {
    setLoanParams({ amount: newAmount, term });
    if (isFormPristine) {
      setIsFormPristine(false);
    }
  }, [isFormPristine, term]);

  const onAfterTermChange = useCallback((newTerm: number) => {
    setLoanParams({ amount, term: newTerm });
    if (isFormPristine) {
      setIsFormPristine(false);
    }
  }, [amount, isFormPristine]);

  return (
    <div>
      <LoanParam
        text="Total amount"
        unit="$"
        value={amount}
        unitPlacement="before"
      />
      <Slider
        value={amount}
        max={amountInterval.max}
        min={amountInterval.min}
        step={amountInterval.step}
        onChange={setAmount}
        onAfterChange={onAfterAmountChange}
      />
      <LoanParam
        text="Term"
        unit="days"
        value={term}
      />
      <Slider
        value={term}
        max={termInterval.max}
        min={termInterval.min}
        step={termInterval.step}
        onChange={setTerm}
        onAfterChange={onAfterTermChange}
      />

      {!isFormPristine && (
      <Loader loading={isLoading || isPreviousData}>
        <LoanOffer loanOffer={data} />
      </Loader>
      )}

    </div>
  );
};

export const CalculatorForm = memo(CalculatorFormBase);
