import { isNumber } from 'lodash/fp';

const isPositiveNumber = (value: number): boolean => isNumber(value) && value > 0;

export default isPositiveNumber;
