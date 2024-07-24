import { PickRandom, getRandomFromArray } from './core';

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const randomDigit: PickRandom<string> = {
  getRandom: () => getRandomFromArray(digits),
};
