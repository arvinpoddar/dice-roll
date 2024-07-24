import { PickRandom, getRandomFromArray } from './core';

const natoAlphabet = [
  'alpha',
  'bravo',
  'charlie',
  'delta',
  'echo',
  'foxtrot',
  'golf',
  'hotel',
  'india',
  'juliett',
  'kilo',
  'lima',
  'mike',
  'november',
  'oscar',
  'papa',
  'quebec',
  'romeo',
  'sierra',
  'tango',
  'uniform',
  'victor',
  'whiskey',
  'xray',
  'yankee',
  'zulu',
];

export const randomNatoAlphabet: PickRandom<string> = {
  getRandom: () => getRandomFromArray(natoAlphabet),
};
