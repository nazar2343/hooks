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



// import './App.css';
// import React, { useState, useEffect } from 'react'

// const App = () => {

//   const [type, setType] = useState('users')
//   const [data, setData] = useState([])

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then(response => response.json())
//       .then(json => setData(json))
//   },[type])

//   useEffect(() => {
//     localStorage.setItem('data', JSON.stringify(data))
//   },[data])

//   useEffect(() => {
//     const raw = localStorage.getItem('data') || []
//     setData(JSON.parse(raw))
//   }, [])

//   return (
//     <div>
//       <h1>Ресурс: {type}</h1>
//       <button onClick={() => setType('users')}>Користувачі</button>
//       <button onClick={() => setType('todo')}>Todo</button>
//       <button onClick={() => setType('posts')}>Пости</button>

//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

// export default App;





// import './App.css';
// import React, { useState, useEffect } from 'react'

// const App = () => {

//   const [goOut, setGoOut] = useState(0)
//   const [realGoOut, setRealGoOut] = useState(0)
//   const [yulia, setYulia] = useState('')

//   useEffect(() => {
//     setTimeout(() => {
//       setGoOut((count) => count + 10)
//     }, 3000)
//   }, [])

//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setRealGoOut((prev) => prev + 30)
//     }, 6000)
//     return  () => clearTimeout(timer)
//   }, [])

//   return (
//     <div>
//       <p>За скільки хвилин ти вийдеш по твоїх словах: {goOut}хв</p>
//       <p>А це реальний час за який ти вийдеш: {realGoOut}хв</p>
//       <button onClick={() => setYulia((prev) => 'Стецик')}>Mark +</button>
//       <h1>Юлічька {yulia} </h1>
//     </div>
//   );
// }

// export default App;
