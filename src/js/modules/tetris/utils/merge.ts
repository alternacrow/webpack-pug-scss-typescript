import { Matrix, Pos } from '../types';

export const merge = (
  base: Matrix,
  matrix: Matrix,
  offset: Pos = {
    x: 0,
    y: 0,
  },
) => {
  const merged = base.map((row, y) =>
    row.map((value, x) => {
      const posY = y - offset.y;
      const posX = x - offset.x;

      if (
        0 <= posY &&
        posY <= matrix.length - 1 &&
        0 <= posX &&
        posX <= matrix[0].length - 1
      ) {
        return matrix[posY][posX] || value;
      } else {
        return value;
      }
    }),
  );

  return merged;
};
