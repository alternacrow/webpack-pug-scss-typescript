import { Matrix, Pos } from '../types';

export const collide = (base: Matrix, matrix: Matrix, offset: Pos) => {
  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < matrix[y].length; ++x) {
      if (
        matrix[y][x] !== 0 &&
        (base[y + offset.y] && base[y + offset.y][x + offset.x]) !== 0
      ) {
        return true;
      }
    }
  }

  return false;
};
