import './App.css';
import Square from './components/Square/Square';
import { useState } from 'react';
import { calculateWinner } from './helper';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));

  function handleClick(i){

    // will not allow to change 'X' & '0' data into same box
    if(squareValue[i] || calculateWinner(squareValue)) {
      return;
    }
    
    const nextSquares = squareValue.slice();

    if(xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
  
    setSquareValue(nextSquares);
    setXIsNext(!xIsNext)
    console.log(nextSquares[i])
  }

  let status = '';
  let winner = calculateWinner(squareValue);

  if(winner) {
    status = `Winner is : ${winner}`
  } else {
    status = `next player : ${ xIsNext ? 'X' : 'O' }`
  }

  return (
    <>
    <h3 className='player-status' > { status } </h3>
    <div className='board-row'>
      <Square squareValue={squareValue[0]} onSelect={() => handleClick(0)}/>
      <Square squareValue={squareValue[1]} onSelect={() => handleClick(1)}/>
      <Square squareValue={squareValue[2]} onSelect={() => handleClick(2)}/>
    </div>

    <div className='board-row'>
      <Square squareValue={squareValue[3]} onSelect={() => handleClick(3)}/>
      <Square squareValue={squareValue[4]} onSelect={() => handleClick(4)}/>
      <Square squareValue={squareValue[5]} onSelect={() => handleClick(5)}/>
    </div>

    <div className='board-row'>
      <Square squareValue={squareValue[6]} onSelect={() => handleClick(6)}/>
      <Square squareValue={squareValue[7]} onSelect={() => handleClick(7)}/>
      <Square squareValue={squareValue[8]} onSelect={() => handleClick(8)}/>
    </div>

    </>

  );
}

export default App;
