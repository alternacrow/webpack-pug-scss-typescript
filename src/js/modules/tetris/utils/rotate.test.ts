import { rotate } from './rotate';

describe('utils/rotate: 配列を回転させる', () => {
  it('配列と1を渡すと、右回転した配列を返す', () => {
    expect(
      rotate(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        1,
      ),
    ).toStrictEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it('配列と-1を渡すと、左回転した配列を返す', () => {
    expect(
      rotate(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        -1,
      ),
    ).toStrictEqual([
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ]);
  });
});
