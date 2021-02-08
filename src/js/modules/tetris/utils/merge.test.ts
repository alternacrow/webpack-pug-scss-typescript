import { merge } from './merge';

describe('utils/merge: 配列にオフセット付き配列を上書きする', () => {
  it('配列にオフセット付き配列を渡すと、上書きされた配列を返す', () => {
    //
    expect(
      merge(
        [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        { x: 1, y: 2 },
      ),
    ).toStrictEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 2, 3, 0],
      [0, 4, 5, 6, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

  it('配列にはみ出るオフセット付き配列を渡すと、はみ出ない配列部分を上書きされた配列を返す', () => {
    //
    expect(
      merge(
        [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        { x: 2, y: 1 },
      ),
    ).toStrictEqual([
      [0, 0, 0, 0],
      [0, 0, 1, 2],
      [0, 0, 4, 5],
    ]);
  });

  it('上書きされるのは、0以外の値の場合のみ', () => {
    //
    expect(
      merge(
        [
          [1, 0, 0, 0, 1],
          [1, 0, 0, 0, 1],
          [1, 0, 0, 0, 1],
          [1, 0, 0, 0, 1],
          [1, 0, 0, 0, 1],
          [1, 1, 1, 1, 1],
        ],
        [
          [0, 2, 0],
          [4, 5, 6],
          [0, 0, 0],
        ],
        { x: 1, y: 4 },
      ),
    ).toStrictEqual([
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 2, 0, 1],
      [1, 4, 5, 6, 1],
      [1, 1, 1, 1, 1],
    ]);
  });

  it('空配列に空配列を上書きする', () => {
    //
    expect(merge([], [])).toStrictEqual([]);
  });
});
