import {
  equals, isObject, keys,
} from 'lodash/fp';

import isPositiveNumber from 'utils/is-positive-number';

export interface Interval {
    min: number;
    max: number;
    step: number;
    defaultValue: number;
}

// This checks only if the object has the required properties
const isInterval = (x: unknown): x is Interval => isObject(x)
    && equals(keys(x))(['min', 'max', 'step', 'defaultValue']);

// Data type validation could be generally implemented
export const isValidInterval = (x: unknown): boolean => isInterval(x)
    && isPositiveNumber(x.min)
    && isPositiveNumber(x.max)
    && x.min <= x.max
    && isPositiveNumber(x.step)
    && isPositiveNumber(x.defaultValue);
