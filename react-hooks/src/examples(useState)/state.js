import './App.css';
import React, { useState, useEffect } from 'react'

const App = () => {

  function competitionRandomNumber() {
    console.log('Some calculations...')
    return Math.trunc(Math.random() * 20)
  }

  function updateTitle() {
    setState((prev) => {
      return {
      ...prev,
      title: 'Нова заголовок'
    }
  })
  }

  const [counter, setCounter] = useState(() => competitionRandomNumber())
  const [state, setState] = useState({
    title: 'Лічильник',
    date: Date.now()
  })

  const increment = () => {
    setCounter((prev) => prev + 1)
  }

  const decrement = () => {
    setCounter((prev) => prev - 1)
  }

  return (
    <div>
      <h1>Лічильник: {counter}</h1>
      <button className='success' onClick={increment}>Додати</button>
      <button className='danger' onClick={decrement}>Забрати</button>
      <button className='yellow' onClick={updateTitle}>Змінити назву</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
