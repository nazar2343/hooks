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


// import './App.css';
// import React, { useState, useEffect } from 'react'

// const App = () => {

//   const [resource, setResource] = useState('posts')
//   const [items, setItems] = useState([])
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resource}`)
//       .then(response => response.json())
//       .then(json => setItems(json))
//   }, [resource])

//   return (
//     <>
//       <div>
//         <button onClick={() => setResource('posts')}>Posts</button>
//         <button onClick={() => setResource('users')}>Users</button>
//         <button onClick={() => setResource('comments')}>Comments</button>
//       </div>
//       <h1>{resource}</h1>
//       {items.map(item => {
//         return <pre>{JSON.stringify(item)}</pre>
//       })}
//     </>
//   );
// }

// export default App;

// import './App.css';
// import React, { useState, useEffect, useRef } from 'react'

// const App = () => {

//   const [name, setName] = useState('')
//   const [surname, setSurname] = useState('')

//   const nameInputTargetValue = useRef();
//   const surnameInputTargetValue = useRef();


//   const handlerKeyUp1 = (e) => {
//     if(e.key == 'Enter') {
//       surnameInputTargetValue.current.focus()
//     }
//   }

//   const handlerKeyUp2 = (e) => {
//     if(e.key == 'Enter') {
//       nameInputTargetValue.current.focus()
//     }
//   }

//   return (
//     <>
//     <form>
//       <input 
//       ref={nameInputTargetValue}
//       type='text'
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       onKeyUp={handlerKeyUp1} ></input>
//       <br />
//       <input 
//       ref = {surnameInputTargetValue}
//       type='text'
//       value={surname}
//       onChange={(e) => setSurname(e.target.value)}
//       onKeyUp={handlerKeyUp2}></input>
//     </form>
      
//     </>
//   );
// }

// export default App;





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

