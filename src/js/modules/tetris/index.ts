import { Module } from '../index';
import { Matrix, Player, Pos } from './types';
import {
  createMatrix,
  createMino,
  merge,
  collide,
  rotate,
  sweep,
} from './utils';
import { colors } from './constants';

export default class tetris extends Module {
  static moduleName = 'tetris';

  readonly SCALE = 20;
  readonly BOARD_WIDTH = 10;
  readonly BOARD_HEIGHT = 20;

  private dropCounter = 0;
  private dropInterval = 1000;
  private lastTime = 0;

  private context: CanvasRenderingContext2D | null = null;

  private board: Matrix = [];

  private player: Player = {
    mino: [],
    pos: {
      x: 0,
      y: 0,
    },
    score: 0,
  };

  public init() {
    const canvas = this.el.querySelector<HTMLCanvasElement>('canvas.js-tetris');
    this.context = canvas?.getContext('2d') ?? null;

    if (!canvas || !this.context) {
      throw new Error('Cannot find canvas');
    }

    // canvas settings
    canvas.width = this.BOARD_WIDTH * this.SCALE;
    canvas.height = this.BOARD_HEIGHT * this.SCALE;
    this.context.scale(this.SCALE, this.SCALE);

    // initialize board
    this.board = createMatrix(this.BOARD_HEIGHT, this.BOARD_WIDTH);

    // initialize context
    this.context.fillStyle = '#000';
    this.context.fillRect(
      0,
      0,
      canvas.width * this.SCALE,
      canvas.height * this.SCALE,
    );

    // initialize event listener
    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        this.playerMove(-1);
      } else if (event.key === 'ArrowRight') {
        this.playerMove(1);
      } else if (event.key === 'ArrowDown') {
        this.playerDrop();
      } else if (event.key === 'z') {
        this.playerRotate(-1);
      } else if (event.key === 'x') {
        this.playerRotate(1);
      }
    });

    this.playerReset();
    this.updateScore();
    this.update();
  }

  private draw = (
    context: CanvasRenderingContext2D,
    board: Matrix,
    player: Player,
  ) => {
    context.fillStyle = '#000';
    context.fillRect(0, 0, this.BOARD_WIDTH, this.BOARD_HEIGHT);

    this.drawMatrix(context, board, { x: 0, y: 0 });
    this.drawMatrix(context, player.mino, player.pos);
  };

  private drawMatrix = (
    context: CanvasRenderingContext2D,
    matrix: Matrix,
    offset: Pos,
  ) => {
    //
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === 0) return;

        context.fillStyle = colors[value];
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      });
    });
  };

  boardSweep = () => {
    const [sweeped, rowCount] = sweep(this.board);

    this.board = sweeped;
    this.player.score += 10 ** 2 * rowCount;
  };

  playerDrop = () => {
    this.player.pos.y++;
    if (collide(this.board, this.player.mino, this.player.pos)) {
      this.player.pos.y--;
      this.board = merge(this.board, this.player.mino, this.player.pos);
      this.playerReset();
      this.boardSweep();
      this.updateScore();
    }
    this.dropCounter = 0;
  };

  playerMove = (offset: number) => {
    this.player.pos.x += offset;
    if (collide(this.board, this.player.mino, this.player.pos)) {
      this.player.pos.x -= offset;
    }
  };

  playerReset = () => {
    const pieces = ['T', 'J', 'L', 'O', 'S', 'Z', 'I'] as const;
    this.player.mino = createMino(pieces[(pieces.length * Math.random()) | 0]);
    this.player.pos.y = 0;
    this.player.pos.x =
      ((this.board[0].length / 2) | 0) - ((this.player.mino[0].length / 2) | 0);
    if (collide(this.board, this.player.mino, this.player.pos)) {
      // game over
      this.board.forEach(row => row.fill(0));
      this.player.score = 0;
      this.updateScore();
    }
  };

  playerRotate = (dir: number) => {
    const pos = this.player.pos.x;
    let offset = 1;
    this.player.mino = rotate(this.player.mino, dir);
    while (collide(this.board, this.player.mino, this.player.pos)) {
      this.player.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > this.player.mino[0].length) {
        this.player.mino = rotate(this.player.mino, -dir);
        this.player.pos.x = pos;
        return;
      }
    }
  };

  update = (time = 0) => {
    if (!this.context) return;

    const deltaTime = time - this.lastTime;

    this.dropCounter += deltaTime;
    if (this.dropCounter > this.dropInterval) {
      this.playerDrop();
    }

    this.lastTime = time;

    this.draw(this.context, this.board, this.player);
    requestAnimationFrame(this.update);
  };

  updateScore = () => {
    const scoreEl = document.querySelector<HTMLElement>('.js-score');
    if (scoreEl) scoreEl.innerText = this.player.score.toString();
  };
}
