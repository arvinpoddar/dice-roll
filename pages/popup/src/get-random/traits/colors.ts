import { PickRandom, getRandomFromArray } from './core';

const colors = [
  'alizarin',
  'amber',
  'amethyst',
  'apricot',
  'aqua',
  'aquamarine',
  'asparagus',
  'auburn',
  'azure',
  'beige',
  'bistre',
  'blue',
  'brass',
  'bronze',
  'brown',
  'buff',
  'burgundy',
  'cardinal',
  'carmine',
  'celadon',
  'cerise',
  'cerulean',
  'champagne',
  'charcoal',
  'chartreuse',
  'chestnut',
  'chocolate',
  'cinnabar',
  'cinnamon',
  'cobalt',
  'copper',
  'coral',
  'cornflower',
  'cream',
  'crimson',
  'cyan',
  'dandelion',
  'denim',
  'emerald',
  'firebrick',
  'fuchsia',
  'gold',
  'goldenrod',
  'green',
  'grey',
  'heliotrope',
  'indigo',
  'ivory',
  'jade',
  'khaki',
  'lavender',
  'lemon',
  'lilac',
  'lime',
  'linen',
  'magenta',
  'magnolia',
  'malachite',
  'maroon',
  'mauve',
  'mustard',
  'myrtle',
  'ochre',
  'olive',
  'olivine',
  'orange',
  'orchid',
  'peach',
  'pear',
  'periwinkle',
  'persimmon',
  'pink',
  'platinum',
  'plum',
  'pumpkin',
  'purple',
  'razzmatazz',
  'red',
  'rose',
  'ruby',
  'russet',
  'rust',
  'saffron',
  'salmon',
  'sangria',
  'sapphire',
  'scarlet',
  'seashell',
  'sepia',
  'silver',
  'smalt',
  'tangerine',
  'taupe',
  'teal',
  'thistle',
  'tomato',
  'turquoise',
  'ultramarine',
  'vermilion',
  'violet',
  'viridian',
  'wheat',
  'wisteria',
  'zucchini',
];

export const randomColor: PickRandom<string> = {
  getRandom: () => getRandomFromArray(colors),
};
