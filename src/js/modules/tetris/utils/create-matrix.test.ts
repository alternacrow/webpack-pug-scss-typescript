import { createMatrix } from './create-matrix';

describe('utils/create-matrix', () => {
  it('行1列1の配列をかえす ', () => {
    expect(createMatrix(1, 1)).toStrictEqual([[0]]);
  });

  it('行2列5の配列をかえす ', () => {
    expect(createMatrix(2, 5)).toStrictEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

  it('行5列2の配列をかえす ', () => {
    expect(createMatrix(5, 2)).toStrictEqual([
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
  });
});
