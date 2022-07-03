import { equals, isObject, keys } from 'lodash/fp';

import { Interval, isValidInterval } from './interval';

export interface CalculatorConfiguration {
    amountInterval: Interval;
    termInterval: Interval;
}

// This checks only if the object has the required properties
const isCalculatorConfiguration = (x: unknown): x is CalculatorConfiguration => isObject(x)
    && equals(keys(x))(['amountInterval', 'termInterval']);

// Data type validation could be generally implemented
export const isValidCalculatorConfiguration = (x: unknown): boolean => isCalculatorConfiguration(x)
    && isValidInterval(x.amountInterval) && isValidInterval(x.termInterval);
