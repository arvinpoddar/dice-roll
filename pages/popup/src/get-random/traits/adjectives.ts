import { getRandomFromArray, type PickRandom } from './core';

const adjectives = [
  'admiring',
  'adoring',
  'affectionate',
  'agitated',
  'amazing',
  'angry',
  'awesome',
  'beautiful',
  'blissful',
  'bold',
  'brave',
  'busy',
  'charming',
  'clever',
  'compassionate',
  'competent',
  'confident',
  'cool',
  'cranky',
  'crazy',
  'dazzling',
  'determined',
  'distracted',
  'dreamy',
  'eager',
  'ecstatic',
  'elastic',
  'elated',
  'elegant',
  'eloquent',
  'epic',
  'exciting',
  'fervent',
  'festive',
  'flamboyant',
  'focused',
  'friendly',
  'frosty',
  'funny',
  'gallant',
  'gifted',
  'goofy',
  'gracious',
  'great',
  'happy',
  'hardcore',
  'heuristic',
  'hopeful',
  'hungry',
  'infallible',
  'inspiring',
  'intelligent',
  'interesting',
  'jolly',
  'jovial',
  'keen',
  'kind',
  'laughing',
  'loving',
  'lucid',
  'magical',
  'modest',
  'musing',
  'mystifying',
  'naughty',
  'nervous',
  'nice',
  'nifty',
  'nostalgic',
  'objective',
  'optimistic',
  'peaceful',
  'pedantic',
  'pensive',
  'practical',
  'priceless',
  'quirky',
  'quizzical',
  'recursing',
  'relaxed',
  'reverent',
  'romantic',
  'sad',
  'serene',
  'sharp',
  'silly',
  'sleepy',
  'stoic',
  'strange',
  'stupefied',
  'suspicious',
  'sweet',
  'tender',
  'thirsty',
  'trusting',
  'unruffled',
  'upbeat',
  'vibrant',
  'vigilant',
  'vigorous',
  'wizardly',
  'wonderful',
  'xenodochial',
  'youthful',
  'zealous',
  'zen',
];

export const randomAdjective: PickRandom<string> = {
  getRandom: () => getRandomFromArray(adjectives),
};
