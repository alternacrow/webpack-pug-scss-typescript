export const createMatrix = (row: number, col: number) => {
  const matrix = Array<number[]>(row).fill(Array<number>(col).fill(0));

  return matrix;
};
