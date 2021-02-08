import { Matrix } from '../types';

export const transpose = (matrix: Matrix) => {
  if (!matrix.length) {
    return matrix;
  }

  const transposed = matrix[0].map((_col, i) => matrix.map(row => row[i]));

  return transposed;
};
