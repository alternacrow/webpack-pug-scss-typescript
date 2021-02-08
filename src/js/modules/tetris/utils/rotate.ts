import { transpose } from './transpose';
import { Matrix } from '../types';

export const rotate = (matrix: Matrix, dir: number) => {
  const transposed = transpose(matrix);

  const rotated =
    dir > 0 ? transposed.map(row => row.reverse()) : transposed.reverse();

  return rotated;
};
