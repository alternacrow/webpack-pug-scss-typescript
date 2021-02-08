import { minos } from '../constants';

export const createMino = (type: keyof typeof minos) => {
  const mino = minos[type];

  return mino;
};
