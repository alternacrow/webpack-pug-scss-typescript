export type Matrix = number[][];

export type Pos = {
  x: number;
  y: number;
};

export type Player = {
  mino: Matrix;
  pos: Pos;
  score: number;
};
