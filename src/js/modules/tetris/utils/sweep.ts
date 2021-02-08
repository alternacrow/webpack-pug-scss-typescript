import { Matrix } from '../types';

export const sweep = (matrix: Matrix): [Matrix, number] => {
  let count = 0;
  const sweeped: Matrix = [];

  matrix.forEach(row => {
    const isFilled = row.every(value => value !== 0);

    if (isFilled) {
      sweeped.unshift(row.fill(0));
      count++;
    } else {
      sweeped.push(row);
    }
  });

  return [sweeped, count];
};
