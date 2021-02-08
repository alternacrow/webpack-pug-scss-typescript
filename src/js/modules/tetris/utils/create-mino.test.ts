import { createMino } from './create-mino';
import { imino, lmino, jmino, omino, zmino, smino, tmino } from '../constants';

describe('utils/create-mino', () => {
  it('Iミノを返す', () => {
    expect(createMino('I')).toStrictEqual(imino);
  });
  it('Oミノを返す', () => {
    expect(createMino('O')).toStrictEqual(omino);
  });
  it('Sミノを返す', () => {
    expect(createMino('S')).toStrictEqual(smino);
  });
  it('Zミノを返す', () => {
    expect(createMino('Z')).toStrictEqual(zmino);
  });
  it('Jミノを返す', () => {
    expect(createMino('J')).toStrictEqual(jmino);
  });
  it('Lミノを返す', () => {
    expect(createMino('L')).toStrictEqual(lmino);
  });
  it('Tミノを返す', () => {
    expect(createMino('T')).toStrictEqual(tmino);
  });
});
