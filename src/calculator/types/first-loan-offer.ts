import {
  equals, isObject, keys,
} from 'lodash/fp';

import isPositiveNumber from 'utils/is-positive-number';

export interface FirstLoanOffer {
    totalPrincipal: string;
    term: string;
    totalCostOfCredit: number;
    totalRepayableAmount: number;
    monthlyPayment: number;
}

// This checks only if the object has the required properties
const isFirstLoanOffer = (x: unknown): x is FirstLoanOffer => isObject(x)
    && equals(keys(x))(['totalPrincipal', 'term', 'totalCostOfCredit', 'totalRepayableAmount', 'monthlyPayment']);

// Data type validation could be generally implemented
export const isValidFirstLoanOffer = (x: unknown): boolean => isFirstLoanOffer(x)
    && isPositiveNumber(Number(x.totalPrincipal))
    && isPositiveNumber(Number(x.term))
    && isPositiveNumber(x.totalCostOfCredit)
    && isPositiveNumber(x.totalRepayableAmount)
    && isPositiveNumber(x.monthlyPayment);
