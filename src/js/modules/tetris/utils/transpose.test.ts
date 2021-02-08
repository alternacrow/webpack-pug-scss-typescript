import { transpose } from './transpose';

describe('utils/transpose: 配列の転置を行う', () => {
  it('配列を渡すと、転置して返す', () => {
    expect(
      transpose([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ]),
    ).toStrictEqual([
      [1, 5],
      [2, 6],
      [3, 7],
      [4, 8],
    ]);
  });

  it('配列を渡すと、転置して返す', () => {
    expect(
      transpose([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ]),
    ).toStrictEqual([
      [1, 5],
      [2, 6],
      [3, 7],
      [4, 8],
    ]);
  });

  it('空の配列を渡すと、そのまま返す', () => {
    expect(transpose([])).toStrictEqual([]);
  });
});
