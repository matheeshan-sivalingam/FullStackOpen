import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



const App = () => {
  var [counter,setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const Display = ({counter}) => <div>{counter}</div>

  const Button = ({handleClick,text}) => <button onClick = {handleClick}> {text}</button>



  return (
    <div>
      <Display counter = {counter}/>
      <Button
        handleClick={increaseByOne}
        text = 'plus'
      ></Button>
      <Button
        handleClick={decreaseByOne}
        text = 'minus'>
      </Button>
      <Button
        handleClick={setToZero}
        text = 'zero'>
      </Button>
    </div>
  )

  }

export default App;
