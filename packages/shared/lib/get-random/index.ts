import {
  randomAdjective,
  randomAnimal,
  randomColor,
  randomDigit,
  randomFigure,
  randomNatoAlphabet,
  randomUUID,
} from './traits';
import { PickRandom, getRandomFromArray } from './traits/core';

export const Traits = {
  Adjective: 'Adjective',
  Animal: 'Animal',
  Color: 'Color',
  Digit: 'Digit',
  Figure: 'Figure',
  NatoAlphabet: 'Nato Alphabet',
  UUID: 'UUID',
};

const traitMap: Record<string, PickRandom<string>> = {
  [Traits.Adjective]: randomAdjective,
  [Traits.Animal]: randomAnimal,
  [Traits.Color]: randomColor,
  [Traits.Digit]: randomDigit,
  [Traits.Figure]: randomFigure,
  [Traits.NatoAlphabet]: randomNatoAlphabet,
  [Traits.UUID]: randomUUID,
} as const;

type Options = {
  delimiter?: string;
  prefix?: string;
  suffix?: string;
};

export const createRandom = (schema: string[], { delimiter = '-', prefix = '', suffix = '' }: Options) => {
  const result = schema
    .filter(trait => traitMap[trait] != null)
    .map(trait => traitMap[trait].getRandom())
    .join(delimiter);

  return `${prefix}${result}${suffix}`;
};

export const DEFAULT_SCHEMA = [Traits.Adjective, Traits.Figure];

export { getRandomFromArray };
