import { PickRandom, getRandomFromArray } from './core';

const colors = ['red', 'blue', 'yellow', 'purple', 'orange', 'green', 'teal'];

export const randomColor: PickRandom<string> = {
  getRandom: () => getRandomFromArray(colors),
};
