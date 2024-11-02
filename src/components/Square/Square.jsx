import './Square.css'

export default function Square({squareValue, onSelect}) {

  return (
    <>
    <button onClick={onSelect} className="square">{squareValue}</button>
    </>
  )
}
