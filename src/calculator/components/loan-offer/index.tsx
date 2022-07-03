import React, { FunctionComponent, memo } from 'react';

import { FirstLoanOffer } from 'calculator/types';
import { Divider } from 'layout';

import { LoanParam } from '../loan-param';

interface Props {
    loanOffer?: FirstLoanOffer;
}

const LoanOfferBase: FunctionComponent<Props> = (props) => {
  const { loanOffer } = props;
  const {
    monthlyPayment, term, totalCostOfCredit, totalPrincipal, totalRepayableAmount,
  } = loanOffer || {};

  return (
    <div>
      <LoanParam
        text="Total principal"
        unit="$"
        value={totalPrincipal}
        unitPlacement="before"
      />
      <Divider />
      <LoanParam
        text="Term"
        unit="days"
        value={term}
      />
      <Divider />
      <LoanParam
        text="Total cost of credit"
        unit="$"
        value={totalCostOfCredit}
        unitPlacement="before"
      />
      <Divider />
      <LoanParam
        text="Total repayable amount"
        unit="$"
        value={totalRepayableAmount}
        unitPlacement="before"
      />
      <Divider />
      <LoanParam
        text="Monthly payment"
        unit="$"
        value={monthlyPayment}
        unitPlacement="before"
        twoDecimalPlaces
      />
    </div>
  );
};

export const LoanOffer = memo(LoanOfferBase);
