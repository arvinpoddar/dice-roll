export function getRandomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export interface PickRandom<T> {
  getRandom(): T;
}
