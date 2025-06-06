'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const clickHandler = (x: number, y: number) => {
    if (board[y][x] !== 0) {
      return;
    }
    const newBoard = structuredClone(board);
    //おける・右上
    if (board[y - 1] !== undefined && board[y - 2] !== undefined) {
      if (board[x + 1] !== undefined && board[x + 2] !== undefined) {
        if (board[y - 1][x + 1] === 2 / turnColor && board[y - 2][x + 2] === turnColor) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (board[y - 1] !== undefined && board[y - 2] !== undefined && board[y - 3] !== undefined) {
      if (board[x + 1] !== undefined && board[x + 2] !== undefined && board[x + 3] !== undefined) {
        if (
          board[y - 1][x + 1] === 2 / turnColor &&
          board[y - 2][x + 2] === 2 / turnColor &&
          board[y - 3][x + 3] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined
      ) {
        if (
          board[y - 1][x + 1] === 2 / turnColor &&
          board[y - 2][x + 2] === 2 / turnColor &&
          board[y - 3][x + 3] === 2 / turnColor &&
          board[y - 4][x + 4] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined
      ) {
        if (
          board[y - 1][x + 1] === 2 / turnColor &&
          board[y - 2][x + 2] === 2 / turnColor &&
          board[y - 3][x + 3] === 2 / turnColor &&
          board[y - 4][x + 4] === 2 / turnColor &&
          board[y - 5][x + 5] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined &&
      board[y - 6] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined &&
        board[x + 6] !== undefined
      ) {
        if (
          board[y - 1][x + 1] === 2 / turnColor &&
          board[y - 2][x + 2] === 2 / turnColor &&
          board[y - 3][x + 3] === 2 / turnColor &&
          board[y - 4][x + 4] === 2 / turnColor &&
          board[y - 5][x + 5] === 2 / turnColor &&
          board[y - 6][x + 6] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined &&
      board[y - 6] !== undefined &&
      board[y - 7] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined &&
        board[x + 6] !== undefined &&
        board[x + 7] !== undefined
      ) {
        if (
          board[y - 1][x + 1] === 2 / turnColor &&
          board[y - 2][x + 2] === 2 / turnColor &&
          board[y - 3][x + 3] === 2 / turnColor &&
          board[y - 4][x + 4] === 2 / turnColor &&
          board[y - 5][x + 5] === 2 / turnColor &&
          board[y - 6][x + 6] === 2 / turnColor &&
          board[y - 7][x + 7] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    //左下おく
    if (board[y + 1] !== undefined && board[y + 2] !== undefined) {
      if (board[x - 1] !== undefined && board[x - 2] !== undefined) {
        if (board[y + 1][x - 1] === 2 / turnColor && board[y + 2][x - 2] === turnColor) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (board[y + 1] !== undefined && board[y + 2] !== undefined && board[y + 3] !== undefined) {
      if (board[x - 1] !== undefined && board[x - 2] !== undefined && board[x - 3] !== undefined) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === 2 / turnColor &&
          board[y + 3][x - 3] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined
      ) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === 2 / turnColor &&
          board[y + 3][x - 3] === 2 / turnColor &&
          board[y + 4][x - 4] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined
      ) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === 2 / turnColor &&
          board[y + 3][x - 3] === 2 / turnColor &&
          board[y + 4][x - 4] === 2 / turnColor &&
          board[y + 5][x - 5] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined &&
      board[y + 6] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined &&
        board[x - 6] !== undefined
      ) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === 2 / turnColor &&
          board[y + 3][x - 3] === 2 / turnColor &&
          board[y + 4][x - 4] === 2 / turnColor &&
          board[y + 5][x - 5] === 2 / turnColor &&
          board[y + 6][x - 6] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined &&
      board[y + 6] !== undefined &&
      board[y + 7] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined &&
        board[x - 6] !== undefined &&
        board[x - 7] !== undefined
      ) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === 2 / turnColor &&
          board[y + 3][x - 3] === 2 / turnColor &&
          board[y + 4][x - 4] === 2 / turnColor &&
          board[y + 5][x - 5] === 2 / turnColor &&
          board[y + 6][x - 6] === 2 / turnColor &&
          board[y + 7][x - 7] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    //左上おく
    if (board[y - 1] !== undefined && board[y - 2] !== undefined) {
      if (board[x - 1] !== undefined && board[x - 2] !== undefined) {
        if (board[y - 1][x - 1] === 2 / turnColor && board[y - 2][x - 2] === turnColor) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (board[y - 1] !== undefined && board[y - 2] !== undefined && board[y - 3] !== undefined) {
      if (board[x - 1] !== undefined && board[x - 2] !== undefined && board[x - 3] !== undefined) {
        if (
          board[y - 1][x - 1] === 2 / turnColor &&
          board[y - 2][x - 2] === 2 / turnColor &&
          board[y - 3][x - 3] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined
      ) {
        if (
          board[y - 1][x - 1] === 2 / turnColor &&
          board[y - 2][x - 2] === 2 / turnColor &&
          board[y - 3][x - 3] === 2 / turnColor &&
          board[y - 4][x - 4] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined
      ) {
        if (
          board[y - 1][x - 1] === 2 / turnColor &&
          board[y - 2][x - 2] === 2 / turnColor &&
          board[y - 3][x - 3] === 2 / turnColor &&
          board[y - 4][x - 4] === 2 / turnColor &&
          board[y - 5][x - 5] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined &&
      board[y - 6] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined &&
        board[x - 6] !== undefined
      ) {
        if (
          board[y - 1][x - 1] === 2 / turnColor &&
          board[y - 2][x - 2] === 2 / turnColor &&
          board[y - 3][x - 3] === 2 / turnColor &&
          board[y - 4][x - 4] === 2 / turnColor &&
          board[y - 5][x - 5] === 2 / turnColor &&
          board[y - 6][x - 6] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined &&
      board[y - 6] !== undefined &&
      board[y - 7] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined &&
        board[x - 6] !== undefined &&
        board[x - 7] !== undefined
      ) {
        if (
          board[y - 1][x - 1] === 2 / turnColor &&
          board[y - 2][x - 2] === 2 / turnColor &&
          board[y - 3][x - 3] === 2 / turnColor &&
          board[y - 4][x - 4] === 2 / turnColor &&
          board[y - 5][x - 5] === 2 / turnColor &&
          board[y - 6][x - 6] === 2 / turnColor &&
          board[y - 7][x - 7] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    //右下おく
    if (board[y + 1] !== undefined && board[y + 2] !== undefined) {
      if (board[x + 1] !== undefined && board[x + 2] !== undefined) {
        if (board[y + 1][x + 1] === 2 / turnColor && board[y + 2][x + 2] === turnColor) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (board[y + 1] !== undefined && board[y + 2] !== undefined && board[y + 3] !== undefined) {
      if (board[x + 1] !== undefined && board[x + 2] !== undefined && board[x + 3] !== undefined) {
        if (
          board[y + 1][x + 1] === 2 / turnColor &&
          board[y + 2][x + 2] === 2 / turnColor &&
          board[y + 3][x + 3] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined
      ) {
        if (
          board[y + 1][x + 1] === 2 / turnColor &&
          board[y + 2][x + 2] === 2 / turnColor &&
          board[y + 3][x + 3] === 2 / turnColor &&
          board[y + 4][x + 4] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined
      ) {
        if (
          board[y + 1][x + 1] === 2 / turnColor &&
          board[y + 2][x + 2] === 2 / turnColor &&
          board[y + 3][x + 3] === 2 / turnColor &&
          board[y + 4][x + 4] === 2 / turnColor &&
          board[y + 5][x + 5] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined &&
      board[y + 6] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined &&
        board[x + 6] !== undefined
      ) {
        if (
          board[y + 1][x + 1] === 2 / turnColor &&
          board[y + 2][x + 2] === 2 / turnColor &&
          board[y + 3][x + 3] === 2 / turnColor &&
          board[y + 4][x + 4] === 2 / turnColor &&
          board[y + 5][x + 5] === 2 / turnColor &&
          board[y + 6][x + 6] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined &&
      board[y + 6] !== undefined &&
      board[y + 7] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined &&
        board[x + 6] !== undefined &&
        board[x + 7] !== undefined
      ) {
        if (
          board[y + 1][x + 1] === 2 / turnColor &&
          board[y + 2][x + 2] === 2 / turnColor &&
          board[y + 3][x + 3] === 2 / turnColor &&
          board[y + 4][x + 4] === 2 / turnColor &&
          board[y + 5][x + 5] === 2 / turnColor &&
          board[y + 6][x + 6] === 2 / turnColor &&
          board[y + 7][x + 7] === turnColor
        ) {
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }
    //横におく(1)
    if (board[x - 1] !== undefined && board[y][x - 1] === 2 / turnColor) {
      if (board[x - 2] !== undefined && board[y][x - 2] === turnColor) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[x - 3] !== undefined &&
        board[y][x - 3] === turnColor &&
        board[y][x - 2] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[x - 4] !== undefined &&
        board[y][x - 4] === turnColor &&
        board[y][x - 3] === 2 / turnColor &&
        board[y][x - 2] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[x - 5] !== undefined &&
        board[y][x - 5] === turnColor &&
        board[y][x - 4] === 2 / turnColor &&
        board[y][x - 3] === 2 / turnColor &&
        board[y][x - 2] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[x - 6] !== undefined &&
        board[y][x - 6] === turnColor &&
        board[y][x - 5] === 2 / turnColor &&
        board[y][x - 4] === 2 / turnColor &&
        board[y][x - 3] === 2 / turnColor &&
        board[y][x - 2] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[x - 7] !== undefined &&
        board[y][x - 7] === turnColor &&
        board[y][x - 6] === 2 / turnColor &&
        board[y][x - 5] === 2 / turnColor &&
        board[y][x - 4] === 2 / turnColor &&
        board[y][x - 3] === 2 / turnColor &&
        board[y][x - 2] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
    }
    //横におく(2)
    if (board[x + 1] !== undefined && board[y][x + 1] === 2 / turnColor) {
      if (board[x + 2] !== undefined && board[y][x + 2] === turnColor) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[x + 3] !== undefined &&
        board[y][x + 3] === turnColor &&
        board[y][x + 2] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[x + 4] !== undefined &&
        board[y][x + 4] === turnColor &&
        board[y][x + 3] === 2 / turnColor &&
        board[y][x + 2] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[x + 5] !== undefined &&
        board[y][x + 5] === turnColor &&
        board[y][x + 4] === 2 / turnColor &&
        board[y][x + 3] === 2 / turnColor &&
        board[y][x + 2] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[x + 6] !== undefined &&
        board[y][x + 6] === turnColor &&
        board[y][x + 5] === 2 / turnColor &&
        board[y][x + 4] === 2 / turnColor &&
        board[y][x + 3] === 2 / turnColor &&
        board[y][x + 2] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[x + 7] !== undefined &&
        board[y][x + 7] === turnColor &&
        board[y][x + 6] === 2 / turnColor &&
        board[y][x + 5] === 2 / turnColor &&
        board[y][x + 4] === 2 / turnColor &&
        board[y][x + 3] === 2 / turnColor &&
        board[y][x + 2] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
    }
    //縦におく(1)
    if (board[y + 1] !== undefined && board[y + 1][x] === 2 / turnColor) {
      if (board[y + 2] !== undefined && board[y + 2][x] === turnColor) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[y + 3] !== undefined &&
        board[y + 3][x] === turnColor &&
        board[y + 2][x] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[y + 4] !== undefined &&
        board[y + 4][x] === turnColor &&
        board[y + 3][x] === 2 / turnColor &&
        board[y + 2][x] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[y + 5] !== undefined &&
        board[y + 5][x] === turnColor &&
        board[y + 4][x] === 2 / turnColor &&
        board[y + 3][x] === 2 / turnColor &&
        board[y + 2][x] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[y + 6] !== undefined &&
        board[y + 6][x] === turnColor &&
        board[y + 5][x] === 2 / turnColor &&
        board[y + 4][x] === 2 / turnColor &&
        board[y + 3][x] === 2 / turnColor &&
        board[y + 2][x] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[y + 7] !== undefined &&
        board[y + 7][x] === turnColor &&
        board[y + 6][x] === 2 / turnColor &&
        board[y + 5][x] === 2 / turnColor &&
        board[y + 4][x] === 2 / turnColor &&
        board[y + 3][x] === 2 / turnColor &&
        board[y + 2][x] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
    }
    // 縦におく(2)
    if (board[y - 1] !== undefined && board[y - 1][x] === 2 / turnColor) {
      if (board[y - 2] !== undefined && board[y - 2][x] === turnColor) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[y - 3] !== undefined &&
        board[y - 3][x] === turnColor &&
        board[y - 2][x] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[y - 4] !== undefined &&
        board[y - 4][x] === turnColor &&
        board[y - 3][x] === 2 / turnColor &&
        board[y - 2][x] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[y - 5] !== undefined &&
        board[y - 5][x] === turnColor &&
        board[y - 4][x] === 2 / turnColor &&
        board[y - 3][x] === 2 / turnColor &&
        board[y - 2][x] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[y - 6] !== undefined &&
        board[y - 6][x] === turnColor &&
        board[y - 5][x] === 2 / turnColor &&
        board[y - 4][x] === 2 / turnColor &&
        board[y - 3][x] === 2 / turnColor &&
        board[y - 2][x] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
      if (
        board[y - 7] !== undefined &&
        board[y - 7][x] === turnColor &&
        board[y - 6][x] === 2 / turnColor &&
        board[y - 5][x] === 2 / turnColor &&
        board[y - 4][x] === 2 / turnColor &&
        board[y - 3][x] === 2 / turnColor &&
        board[y - 2][x] === 2 / turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
    }
    //横めくり(1)
    if (board[x + 1] !== undefined && board[y][x + 1] === 2 / turnColor) {
      if (
        board[x + 2] !== undefined &&
        board[y][x + 2] === turnColor &&
        newBoard[y][x] === turnColor
      ) {
        newBoard[y][x + 1] = turnColor;
      }
      if (board[x + 2] !== undefined && board[x + 3] !== undefined) {
        if (
          board[y][x + 2] === 2 / turnColor &&
          board[y][x + 3] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y][x + 1] = turnColor;
          newBoard[y][x + 2] = turnColor;
        }
      }
      if (board[x + 2] !== undefined && board[x + 3] !== undefined && board[x + 4] !== undefined) {
        if (
          board[y][x + 2] === 2 / turnColor &&
          board[y][x + 3] === 2 / turnColor &&
          board[y][x + 4] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y][x + 1] = turnColor;
          newBoard[y][x + 2] = turnColor;
          newBoard[y][x + 3] = turnColor;
        }
      }
      if (
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined
      ) {
        if (
          board[y][x + 2] === 2 / turnColor &&
          board[y][x + 3] === 2 / turnColor &&
          board[y][x + 4] === 2 / turnColor &&
          board[y][x + 5] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y][x + 1] = turnColor;
          newBoard[y][x + 2] = turnColor;
          newBoard[y][x + 3] = turnColor;
          newBoard[y][x + 4] = turnColor;
        }
      }
      if (
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined &&
        board[x + 6] !== undefined
      ) {
        if (
          board[y][x + 2] === 2 / turnColor &&
          board[y][x + 3] === 2 / turnColor &&
          board[y][x + 4] === 2 / turnColor &&
          board[y][x + 5] === 2 / turnColor &&
          board[y][x + 6] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y][x + 1] = turnColor;
          newBoard[y][x + 2] = turnColor;
          newBoard[y][x + 3] = turnColor;
          newBoard[y][x + 4] = turnColor;
          newBoard[y][x + 5] = turnColor;
        }
      }
      if (
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined &&
        board[x + 6] !== undefined &&
        board[x + 7] !== undefined
      ) {
        if (
          board[y][x + 2] === 2 / turnColor &&
          board[y][x + 3] === 2 / turnColor &&
          board[y][x + 4] === 2 / turnColor &&
          board[y][x + 5] === 2 / turnColor &&
          board[y][x + 6] === 2 / turnColor &&
          board[y][x + 7] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y][x + 1] = turnColor;
          newBoard[y][x + 2] = turnColor;
          newBoard[y][x + 3] = turnColor;
          newBoard[y][x + 4] = turnColor;
          newBoard[y][x + 5] = turnColor;
          newBoard[y][x + 6] = turnColor;
        }
      }
    }
    //横めくり(2)
    if (board[x - 1] !== undefined && board[y][x - 1] === 2 / turnColor) {
      if (
        board[x - 2] !== undefined &&
        board[y][x - 2] === turnColor &&
        newBoard[y][x] === turnColor
      ) {
        newBoard[y][x - 1] = turnColor;
      }
      if (board[x - 2] !== undefined && board[x - 3] !== undefined) {
        if (
          board[y][x - 2] === 2 / turnColor &&
          board[y][x - 3] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y][x - 1] = turnColor;
          newBoard[y][x - 2] = turnColor;
        }
      }
      if (board[x - 2] !== undefined && board[x - 3] !== undefined && board[x - 4] !== undefined) {
        if (
          board[y][x - 2] === 2 / turnColor &&
          board[y][x - 3] === 2 / turnColor &&
          board[y][x - 4] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y][x - 1] = turnColor;
          newBoard[y][x - 2] = turnColor;
          newBoard[y][x - 3] = turnColor;
        }
      }
      if (
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined
      ) {
        if (
          board[y][x - 2] === 2 / turnColor &&
          board[y][x - 3] === 2 / turnColor &&
          board[y][x - 4] === 2 / turnColor &&
          board[y][x - 5] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y][x - 1] = turnColor;
          newBoard[y][x - 2] = turnColor;
          newBoard[y][x - 3] = turnColor;
          newBoard[y][x - 4] = turnColor;
        }
      }
      if (
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined &&
        board[x - 6] !== undefined
      ) {
        if (
          board[y][x - 2] === 2 / turnColor &&
          board[y][x - 3] === 2 / turnColor &&
          board[y][x - 4] === 2 / turnColor &&
          board[y][x - 5] === 2 / turnColor &&
          board[y][x - 6] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y][x - 1] = turnColor;
          newBoard[y][x - 2] = turnColor;
          newBoard[y][x - 3] = turnColor;
          newBoard[y][x - 4] = turnColor;
          newBoard[y][x - 5] = turnColor;
        }
      }
      if (
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined &&
        board[x - 6] !== undefined &&
        board[x - 7] !== undefined
      ) {
        if (
          board[y][x - 2] === 2 / turnColor &&
          board[y][x - 3] === 2 / turnColor &&
          board[y][x - 4] === 2 / turnColor &&
          board[y][x - 5] === 2 / turnColor &&
          board[y][x - 6] === 2 / turnColor &&
          board[y][x - 7] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y][x - 1] = turnColor;
          newBoard[y][x - 2] = turnColor;
          newBoard[y][x - 3] = turnColor;
          newBoard[y][x - 4] = turnColor;
          newBoard[y][x - 5] = turnColor;
          newBoard[y][x - 6] = turnColor;
        }
      }
    }
    //縦めくり(1)
    if (board[y + 1] !== undefined && board[y + 1][x] === 2 / turnColor) {
      if (board[y + 2] !== undefined) {
        if (board[y + 2][x] === turnColor && newBoard[y][x] === turnColor) {
          newBoard[y + 1][x] = turnColor;
        }
      }
      if (board[y + 2] !== undefined && board[y + 3] !== undefined) {
        if (
          board[y + 2][x] === 2 / turnColor &&
          board[y + 3][x] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x] = turnColor;
          newBoard[y + 2][x] = turnColor;
        }
      }
      if (board[y + 2] !== undefined && board[y + 3] !== undefined && board[y + 4] !== undefined) {
        if (
          board[y + 2][x] === 2 / turnColor &&
          board[y + 3][x] === 2 / turnColor &&
          board[y + 4][x] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x] = turnColor;
          newBoard[y + 2][x] = turnColor;
          newBoard[y + 3][x] = turnColor;
        }
      }
      if (
        board[y + 2] !== undefined &&
        board[y + 3] !== undefined &&
        board[y + 4] !== undefined &&
        board[y + 5] !== undefined
      ) {
        if (
          board[y + 2][x] === 2 / turnColor &&
          board[y + 3][x] === 2 / turnColor &&
          board[y + 4][x] === 2 / turnColor &&
          board[y + 5][x] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x] = turnColor;
          newBoard[y + 2][x] = turnColor;
          newBoard[y + 3][x] = turnColor;
          newBoard[y + 4][x] = turnColor;
        }
      }
      if (
        board[y + 2] !== undefined &&
        board[y + 3] !== undefined &&
        board[y + 4] !== undefined &&
        board[y + 5] !== undefined &&
        board[y + 6] !== undefined
      ) {
        if (
          board[y + 2][x] === 2 / turnColor &&
          board[y + 3][x] === 2 / turnColor &&
          board[y + 4][x] === 2 / turnColor &&
          board[y + 5][x] === 2 / turnColor &&
          board[y + 6][x] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x] = turnColor;
          newBoard[y + 2][x] = turnColor;
          newBoard[y + 3][x] = turnColor;
          newBoard[y + 4][x] = turnColor;
          newBoard[y + 5][x] = turnColor;
        }
      }
      if (
        board[y + 2] !== undefined &&
        board[y + 3] !== undefined &&
        board[y + 4] !== undefined &&
        board[y + 5] !== undefined &&
        board[y + 6] !== undefined &&
        board[y + 7] !== undefined
      ) {
        if (
          board[y + 2][x] === 2 / turnColor &&
          board[y + 3][x] === 2 / turnColor &&
          board[y + 4][x] === 2 / turnColor &&
          board[y + 5][x] === 2 / turnColor &&
          board[y + 6][x] === 2 / turnColor &&
          board[y + 7][x] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x] = turnColor;
          newBoard[y + 2][x] = turnColor;
          newBoard[y + 3][x] = turnColor;
          newBoard[y + 4][x] = turnColor;
          newBoard[y + 5][x] = turnColor;
          newBoard[y + 6][x] = turnColor;
        }
      }
    }
    //縦めくり(2)
    if (board[y - 1] !== undefined && board[y - 1][x] === 2 / turnColor) {
      if (
        board[y - 2] !== undefined &&
        board[y - 2][x] === turnColor &&
        newBoard[y][x] === turnColor
      ) {
        newBoard[y - 1][x] = turnColor;
      }
      if (board[y - 2] !== undefined && board[y - 3] !== undefined) {
        if (
          board[y - 2][x] === 2 / turnColor &&
          board[y - 3][x] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x] = turnColor;
          newBoard[y - 2][x] = turnColor;
        }
      }
      if (board[y - 2] !== undefined && board[y - 3] !== undefined && board[y - 4] !== undefined) {
        if (
          board[y - 2][x] === 2 / turnColor &&
          board[y - 3][x] === 2 / turnColor &&
          board[y - 4][x] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x] = turnColor;
          newBoard[y - 2][x] = turnColor;
          newBoard[y - 3][x] = turnColor;
        }
      }
      if (
        board[y - 2] !== undefined &&
        board[y - 3] !== undefined &&
        board[y - 4] !== undefined &&
        board[y - 5] !== undefined
      ) {
        if (
          board[y - 2][x] === 2 / turnColor &&
          board[y - 3][x] === 2 / turnColor &&
          board[y - 4][x] === 2 / turnColor &&
          board[y - 5][x] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x] = turnColor;
          newBoard[y - 2][x] = turnColor;
          newBoard[y - 3][x] = turnColor;
          newBoard[y - 4][x] = turnColor;
        }
      }
      if (
        board[y - 2] !== undefined &&
        board[y - 3] !== undefined &&
        board[y - 4] !== undefined &&
        board[y - 5] !== undefined &&
        board[y - 6] !== undefined
      ) {
        if (
          board[y - 2][x] === 2 / turnColor &&
          board[y - 3][x] === 2 / turnColor &&
          board[y - 4][x] === 2 / turnColor &&
          board[y - 5][x] === 2 / turnColor &&
          board[y - 6][x] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x] = turnColor;
          newBoard[y - 2][x] = turnColor;
          newBoard[y - 3][x] = turnColor;
          newBoard[y - 4][x] = turnColor;
          newBoard[y - 5][x] = turnColor;
        }
      }
      if (
        board[y - 2] !== undefined &&
        board[y - 3] !== undefined &&
        board[y - 4] !== undefined &&
        board[y - 5] !== undefined &&
        board[y - 6] !== undefined &&
        board[y - 7] !== undefined
      ) {
        if (
          board[y - 2][x] === 2 / turnColor &&
          board[y - 3][x] === 2 / turnColor &&
          board[y - 4][x] === 2 / turnColor &&
          board[y - 5][x] === 2 / turnColor &&
          board[y - 6][x] === 2 / turnColor &&
          board[y - 7][x] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x] = turnColor;
          newBoard[y - 2][x] = turnColor;
          newBoard[y - 3][x] = turnColor;
          newBoard[y - 4][x] = turnColor;
          newBoard[y - 5][x] = turnColor;
          newBoard[y - 6][x] = turnColor;
        }
      }
    }
    //左下めくり
    if (board[y + 1] !== undefined && board[y + 2] !== undefined) {
      if (board[x - 1] !== undefined && board[x - 2] !== undefined) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x - 1] = turnColor;
        }
      }
    }
    if (board[y + 1] !== undefined && board[y + 2] !== undefined) {
      if (board[x - 1] !== undefined && board[x - 2] !== undefined) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x - 1] = turnColor;
        }
      }
    }
    if (board[y + 1] !== undefined && board[y + 2] !== undefined && board[y + 3] !== undefined) {
      if (board[x - 1] !== undefined && board[x - 2] !== undefined && board[x - 3] !== undefined) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === 2 / turnColor &&
          board[y + 3][x - 3] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x - 1] = turnColor;
          newBoard[y + 2][x - 2] = turnColor;
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined
      ) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === 2 / turnColor &&
          board[y + 3][x - 3] === 2 / turnColor &&
          board[y + 4][x - 4] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x - 1] = turnColor;
          newBoard[y + 2][x - 2] = turnColor;
          newBoard[y + 3][x - 3] = turnColor;
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined
      ) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === 2 / turnColor &&
          board[y + 3][x - 3] === 2 / turnColor &&
          board[y + 4][x - 4] === 2 / turnColor &&
          board[y + 5][x - 5] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x - 1] = turnColor;
          newBoard[y + 2][x - 2] = turnColor;
          newBoard[y + 3][x - 3] = turnColor;
          newBoard[y + 4][x - 4] = turnColor;
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined &&
      board[y + 6] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined &&
        board[x - 6] !== undefined
      ) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === 2 / turnColor &&
          board[y + 3][x - 3] === 2 / turnColor &&
          board[y + 4][x - 4] === 2 / turnColor &&
          board[y + 5][x - 5] === 2 / turnColor &&
          board[y + 6][x - 6] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x - 1] = turnColor;
          newBoard[y + 2][x - 2] = turnColor;
          newBoard[y + 3][x - 3] = turnColor;
          newBoard[y + 4][x - 4] = turnColor;
          newBoard[y + 5][x - 5] = turnColor;
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined &&
      board[y + 6] !== undefined &&
      board[y + 7] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined &&
        board[x - 6] !== undefined &&
        board[x - 7] !== undefined
      ) {
        if (
          board[y + 1][x - 1] === 2 / turnColor &&
          board[y + 2][x - 2] === 2 / turnColor &&
          board[y + 3][x - 3] === 2 / turnColor &&
          board[y + 4][x - 4] === 2 / turnColor &&
          board[y + 5][x - 5] === 2 / turnColor &&
          board[y + 6][x - 6] === 2 / turnColor &&
          board[y + 7][x - 7] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x - 1] = turnColor;
          newBoard[y + 2][x - 2] = turnColor;
          newBoard[y + 3][x - 3] = turnColor;
          newBoard[y + 4][x - 4] = turnColor;
          newBoard[y + 5][x - 5] = turnColor;
          newBoard[y + 6][x - 6] = turnColor;
        }
      }
    }
    //右下めくり
    if (board[y + 1] !== undefined && board[y + 2] !== undefined) {
      if (board[x + 1] !== undefined && board[x + 2] !== undefined) {
        if (
          board[y + 1][x + 1] === 2 / turnColor &&
          board[y + 2][x + 2] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x + 1] = turnColor;
        }
      }
    }
    if (board[y + 1] !== undefined && board[y + 2] !== undefined && board[y + 3] !== undefined) {
      if (board[x + 1] !== undefined && board[x + 2] !== undefined && board[x + 3] !== undefined) {
        if (
          board[y + 1][x + 1] === 2 / turnColor &&
          board[y + 2][x + 2] === 2 / turnColor &&
          board[y + 3][x + 3] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x + 1] = turnColor;
          newBoard[y + 2][x + 2] = turnColor;
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined
      ) {
        if (
          board[y + 1][x + 1] === 2 / turnColor &&
          board[y + 2][x + 2] === 2 / turnColor &&
          board[y + 3][x + 3] === 2 / turnColor &&
          board[y + 4][x + 4] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x + 1] = turnColor;
          newBoard[y + 2][x + 2] = turnColor;
          newBoard[y + 3][x + 3] = turnColor;
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined
      ) {
        if (
          board[y + 1][x + 1] === 2 / turnColor &&
          board[y + 2][x + 2] === 2 / turnColor &&
          board[y + 3][x + 3] === 2 / turnColor &&
          board[y + 4][x + 4] === 2 / turnColor &&
          board[y + 5][x + 5] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x + 1] = turnColor;
          newBoard[y + 2][x + 2] = turnColor;
          newBoard[y + 3][x + 3] = turnColor;
          newBoard[y + 4][x + 4] = turnColor;
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined &&
      board[y + 6] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined &&
        board[x + 6] !== undefined
      ) {
        if (
          board[y + 1][x + 1] === 2 / turnColor &&
          board[y + 2][x + 2] === 2 / turnColor &&
          board[y + 3][x + 3] === 2 / turnColor &&
          board[y + 4][x + 4] === 2 / turnColor &&
          board[y + 5][x + 5] === 2 / turnColor &&
          board[y + 6][x + 6] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x + 1] = turnColor;
          newBoard[y + 2][x + 2] = turnColor;
          newBoard[y + 3][x + 3] = turnColor;
          newBoard[y + 4][x + 4] = turnColor;
          newBoard[y + 5][x + 5] = turnColor;
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 2] !== undefined &&
      board[y + 3] !== undefined &&
      board[y + 4] !== undefined &&
      board[y + 5] !== undefined &&
      board[y + 6] !== undefined &&
      board[y + 7] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined &&
        board[x + 6] !== undefined &&
        board[x + 7] !== undefined
      ) {
        if (
          board[y + 1][x + 1] === 2 / turnColor &&
          board[y + 2][x + 2] === 2 / turnColor &&
          board[y + 3][x + 3] === 2 / turnColor &&
          board[y + 4][x + 4] === 2 / turnColor &&
          board[y + 5][x + 5] === 2 / turnColor &&
          board[y + 6][x + 6] === 2 / turnColor &&
          board[y + 7][x + 7] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y + 1][x + 1] = turnColor;
          newBoard[y + 2][x + 2] = turnColor;
          newBoard[y + 3][x + 3] = turnColor;
          newBoard[y + 4][x + 4] = turnColor;
          newBoard[y + 5][x + 5] = turnColor;
          newBoard[y + 6][x + 6] = turnColor;
        }
      }
    }
    //左上めくり
    if (board[y - 1] !== undefined && board[y - 2] !== undefined) {
      if (board[x - 1] !== undefined && board[x - 2] !== undefined) {
        if (
          board[y - 1][x - 1] === 2 / turnColor &&
          board[y - 2][x - 2] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x - 1] = turnColor;
        }
      }
    }
    if (board[y - 1] !== undefined && board[y - 2] !== undefined && board[y - 3] !== undefined) {
      if (board[x - 1] !== undefined && board[x - 2] !== undefined && board[x - 3] !== undefined) {
        if (
          board[y - 1][x - 1] === 2 / turnColor &&
          board[y - 2][x - 2] === 2 / turnColor &&
          board[y - 3][x - 3] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x - 1] = turnColor;
          newBoard[y - 2][x - 2] = turnColor;
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined
      ) {
        if (
          board[y - 1][x - 1] === 2 / turnColor &&
          board[y - 2][x - 2] === 2 / turnColor &&
          board[y - 3][x - 3] === 2 / turnColor &&
          board[y - 4][x - 4] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x - 1] = turnColor;
          newBoard[y - 2][x - 2] = turnColor;
          newBoard[y - 3][x - 3] = turnColor;
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined
      ) {
        if (
          board[y - 1][x - 1] === 2 / turnColor &&
          board[y - 2][x - 2] === 2 / turnColor &&
          board[y - 3][x - 3] === 2 / turnColor &&
          board[y - 4][x - 4] === 2 / turnColor &&
          board[y - 5][x - 5] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x - 1] = turnColor;
          newBoard[y - 2][x - 2] = turnColor;
          newBoard[y - 3][x - 3] = turnColor;
          newBoard[y - 4][x - 4] = turnColor;
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined &&
      board[y - 6] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined &&
        board[x - 6] !== undefined
      ) {
        if (
          board[y - 1][x - 1] === 2 / turnColor &&
          board[y - 2][x - 2] === 2 / turnColor &&
          board[y - 3][x - 3] === 2 / turnColor &&
          board[y - 4][x - 4] === 2 / turnColor &&
          board[y - 5][x - 5] === 2 / turnColor &&
          board[y - 6][x - 6] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x - 1] = turnColor;
          newBoard[y - 2][x - 2] = turnColor;
          newBoard[y - 3][x - 3] = turnColor;
          newBoard[y - 4][x - 4] = turnColor;
          newBoard[y - 5][x - 5] = turnColor;
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined &&
      board[y - 6] !== undefined &&
      board[y - 7] !== undefined
    ) {
      if (
        board[x - 1] !== undefined &&
        board[x - 2] !== undefined &&
        board[x - 3] !== undefined &&
        board[x - 4] !== undefined &&
        board[x - 5] !== undefined &&
        board[x - 6] !== undefined &&
        board[x - 7] !== undefined
      ) {
        if (
          board[y - 1][x - 1] === 2 / turnColor &&
          board[y - 2][x - 2] === 2 / turnColor &&
          board[y - 3][x - 3] === 2 / turnColor &&
          board[y - 4][x - 4] === 2 / turnColor &&
          board[y - 5][x - 5] === 2 / turnColor &&
          board[y - 6][x - 6] === 2 / turnColor &&
          board[y - 7][x - 7] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x - 1] = turnColor;
          newBoard[y - 2][x - 2] = turnColor;
          newBoard[y - 3][x - 3] = turnColor;
          newBoard[y - 4][x - 4] = turnColor;
          newBoard[y - 5][x - 5] = turnColor;
          newBoard[y - 6][x - 6] = turnColor;
        }
      }
    }
    //右上めくり
    if (board[y - 1] !== undefined && board[y - 2] !== undefined) {
      if (board[x + 1] !== undefined && board[x + 2] !== undefined) {
        if (
          board[y - 1][x + 1] === 2 / turnColor &&
          board[y - 2][x + 2] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x + 1] = turnColor;
        }
      }
    }
    if (board[y - 1] !== undefined && board[y - 2] !== undefined && board[y - 3] !== undefined) {
      if (board[x + 1] !== undefined && board[x + 2] !== undefined && board[x + 3] !== undefined) {
        if (
          board[y - 1][x + 1] === 2 / turnColor &&
          board[y - 2][x + 2] === 2 / turnColor &&
          board[y - 3][x + 3] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x + 1] = turnColor;
          newBoard[y - 2][x + 2] = turnColor;
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined
      ) {
        if (
          board[y - 1][x + 1] === 2 / turnColor &&
          board[y - 2][x + 2] === 2 / turnColor &&
          board[y - 3][x + 3] === 2 / turnColor &&
          board[y - 4][x + 4] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x + 1] = turnColor;
          newBoard[y - 2][x + 2] = turnColor;
          newBoard[y - 3][x + 3] = turnColor;
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined
      ) {
        if (
          board[y - 1][x + 1] === 2 / turnColor &&
          board[y - 2][x + 2] === 2 / turnColor &&
          board[y - 3][x + 3] === 2 / turnColor &&
          board[y - 4][x + 4] === 2 / turnColor &&
          board[y - 5][x + 5] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x + 1] = turnColor;
          newBoard[y - 2][x + 2] = turnColor;
          newBoard[y - 3][x + 3] = turnColor;
          newBoard[y - 4][x + 4] = turnColor;
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined &&
      board[y - 6] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined &&
        board[x + 6] !== undefined
      ) {
        if (
          board[y - 1][x + 1] === 2 / turnColor &&
          board[y - 2][x + 2] === 2 / turnColor &&
          board[y - 3][x + 3] === 2 / turnColor &&
          board[y - 4][x + 4] === 2 / turnColor &&
          board[y - 5][x + 5] === 2 / turnColor &&
          board[y - 6][x + 6] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x + 1] = turnColor;
          newBoard[y - 2][x + 2] = turnColor;
          newBoard[y - 3][x + 3] = turnColor;
          newBoard[y - 4][x + 4] = turnColor;
          newBoard[y - 5][x + 5] = turnColor;
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 2] !== undefined &&
      board[y - 3] !== undefined &&
      board[y - 4] !== undefined &&
      board[y - 5] !== undefined &&
      board[y - 6] !== undefined &&
      board[y - 7] !== undefined
    ) {
      if (
        board[x + 1] !== undefined &&
        board[x + 2] !== undefined &&
        board[x + 3] !== undefined &&
        board[x + 4] !== undefined &&
        board[x + 5] !== undefined &&
        board[x + 6] !== undefined &&
        board[x + 7] !== undefined
      ) {
        if (
          board[y - 1][x + 1] === 2 / turnColor &&
          board[y - 2][x + 2] === 2 / turnColor &&
          board[y - 3][x + 3] === 2 / turnColor &&
          board[y - 4][x + 4] === 2 / turnColor &&
          board[y - 5][x + 5] === 2 / turnColor &&
          board[y - 6][x + 6] === 2 / turnColor &&
          board[y - 7][x + 7] === turnColor &&
          newBoard[y][x] === turnColor
        ) {
          newBoard[y - 1][x + 1] = turnColor;
          newBoard[y - 2][x + 2] = turnColor;
          newBoard[y - 3][x + 3] = turnColor;
          newBoard[y - 4][x + 4] = turnColor;
          newBoard[y - 5][x + 5] = turnColor;
          newBoard[y - 6][x + 6] = turnColor;
        }
      }
    }

    setBoard(newBoard);
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
