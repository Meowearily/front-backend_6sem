import { useState } from 'react';
import StyledButton from './components/Button/Button';
import StyledCell from './components/Cell/Cell';
import StyledDiv from './components/Div/Div';


function Square({ value, onSquareClick }) {
  return (
    <StyledCell onClick={onSquareClick}>
      {value}
    </StyledCell>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Победил: ' + winner;
  } else if (isDraw(squares)) {
    status = 'Ничья';
  } else {
    status = 'Следующий ходит: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <StyledDiv className="status">{status}</StyledDiv>
      <StyledDiv className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </StyledDiv>
      <StyledDiv className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </StyledDiv>
      <StyledDiv className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </StyledDiv>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Вернуться к ходу #' + move;
    } else {
      description = 'Вернуться к началу игры';
    }
    return (
      <li key={move}>
        {/* <button onClick={() => jumpTo(move)}>{description}</button> */}
        <StyledButton onClick={() => jumpTo(move)}>{description}</StyledButton>
      </li>
    );
  });

  return (
    <StyledDiv className="game">
      <StyledDiv className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </StyledDiv>
      <StyledDiv className="game-info">
        <ol>{moves}</ol>
      </StyledDiv>
    </StyledDiv>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isDraw(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] != 'X' && squares[i] != 'O') {
      return false;
    }
  }
  return true;
}
