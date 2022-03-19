// import './App.css';
// import React, { useState, useEffect } from 'react'

// const App = () => {

//   function competitionRandomNumber() {
//     console.log('Some calculations...')
//     return Math.trunc(Math.random() * 20)
//   }

//   function updateTitle() {
//     setState((prev) => {
//       return {
//       ...prev,
//       title: 'Нова заголовок'
//     }
//   })
//   }

//   const [counter, setCounter] = useState(() => competitionRandomNumber())
//   const [state, setState] = useState({
//     title: 'Лічильник',
//     date: Date.now()
//   })

//   const increment = () => {
//     setCounter((prev) => prev + 1)
//   }

//   const decrement = () => {
//     setCounter((prev) => prev - 1)
//   }

//   return (
//     <div>
//       <h1>Лічильник: {counter}</h1>
//       <button className='success' onClick={increment}>Додати</button>
//       <button className='danger' onClick={decrement}>Забрати</button>
//       <button className='yellow' onClick={updateTitle}>Змінити назву</button>
//       <pre>{JSON.stringify(state, null, 2)}</pre>
//     </div>
//   );
// }

// export default App;



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
