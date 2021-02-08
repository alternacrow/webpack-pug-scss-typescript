import { Matrix } from './types';

export const imino: Matrix = [
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
];

export const omino: Matrix = [
  [2, 2],
  [2, 2],
];

export const smino: Matrix = [
  [0, 3, 3],
  [3, 3, 0],
  [0, 0, 0],
];

export const zmino: Matrix = [
  [4, 4, 0],
  [0, 4, 4],
  [0, 0, 0],
];

export const jmino: Matrix = [
  [0, 5, 0],
  [0, 5, 0],
  [5, 5, 0],
];

export const lmino: Matrix = [
  [0, 6, 0],
  [0, 6, 0],
  [0, 6, 6],
];

export const tmino: Matrix = [
  [0, 7, 0],
  [7, 7, 7],
  [0, 0, 0],
];

export const minos = {
  I: imino,
  O: omino,
  S: smino,
  Z: zmino,
  J: jmino,
  L: lmino,
  T: tmino,
};

export const colors = [
  '#000000',
  '#00ffff',
  '#ffff00',
  '#008000',
  '#ff0000',
  '#0000ff',
  '#ffa500',
  '#800080',
];
