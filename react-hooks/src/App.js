import './App.css';
import React, { useState, useEffect } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const [bet, setBet] = useState([])
  const [change, setChange] = useState('')

  useEffect(() => {
    const raw = localStorage.getItem('data') || []
    setData(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setData(json))
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${change}`)
    .then(res => res.json())
    .then(json => setBet(json))
  }, [change])

  useEffect(() => {
    const war = localStorage.getItem('bet') || []
    setBet(JSON.parse(war))
  }, [])

  useEffect(() => {
    localStorage.setItem('bet', JSON.stringify(bet))
  },[bet])

  const removeData = () => {
    setData([])
  }

  const remove = () => {
    setBet([])
  }

  return (
    <>
      <div>
        <h1>{change}</h1>
        <pre>{JSON.stringify(bet, null, 2)}</pre>
        <button onClick={() => setChange('users')}>Користувачі</button>
        <button onClick={() => setChange('comments')}>Коменти</button>
        <button onClick={() => setChange('posts')}>Пости</button>
        <button onClick={() => remove()}>Delete everything</button>

        <pre>{JSON.stringify(data, null ,2)}</pre>

        <hr />
        <hr />

        <button onClick={() => getData()}>Add from JSON</button>
        <button onClick={() => removeData()}>Delete from JSON</button>
      </div>
    </>
  );
}

export default App;

