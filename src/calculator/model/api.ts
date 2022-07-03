import {
  CalculatorConfiguration, FirstLoanOffer, isValidCalculatorConfiguration, isValidFirstLoanOffer, LoanParams,
} from 'calculator/types';

export const fetchCalculatorConfiguration = async (): Promise<CalculatorConfiguration> => {
  const response = await fetch('https://js-developer-second-round.herokuapp.com/api/v1/application/constraints');

  const data = await response.json();
  if (!isValidCalculatorConfiguration(data)) {
    throw new Error('Calculator configuration from server is not valid');
  }

  return data;
};

export const fetchFirstLoanOffer = async ({ amount, term }: LoanParams): Promise<FirstLoanOffer> => {
  const response = await fetch(`https://js-developer-second-round.herokuapp.com\
/api/v1/application/real-first-loan-offer?amount=${amount}&term=${term}`);

  const data = await response.json();
  if (!isValidFirstLoanOffer(data)) {
    throw new Error('Loan offer from server is not valid');
  }

  return data;
};
