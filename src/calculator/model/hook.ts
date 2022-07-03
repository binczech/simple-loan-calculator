import { useQuery } from 'react-query';

import { CalculatorConfiguration, FirstLoanOffer, LoanParams } from 'calculator/types';

import { fetchCalculatorConfiguration, fetchFirstLoanOffer } from './api';

export const useGetCalculatorConfiguration = () => useQuery<CalculatorConfiguration, Error>(
  'calculatorConfiguration',
  fetchCalculatorConfiguration,
  { staleTime: 300000 },
);

interface UseGetFirstLoanOfferParams {
    loan: LoanParams;
    enabled: boolean;
}

export const useGetFirstLoanOffer = (
  { loan, enabled }: UseGetFirstLoanOfferParams,
) => useQuery<FirstLoanOffer, Error>(
  ['firstLoanOffer', loan],
  () => fetchFirstLoanOffer(loan),
  { staleTime: 300000, enabled, keepPreviousData: true },
);
