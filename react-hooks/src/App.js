import './App.css';
import React, { useState, useEffect } from 'react'

const App = () => {

  const [type, setType] = useState('users')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  },[type])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  },[data])

  useEffect(() => {
    const raw = localStorage.getItem('data') || []
    setData(JSON.parse(raw))
  }, [])

  return (
    <div>
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType('users')}>Користувачі</button>
      <button onClick={() => setType('todo')}>Todo</button>
      <button onClick={() => setType('posts')}>Пости</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
