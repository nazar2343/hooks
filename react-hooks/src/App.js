import './App.css';
import React, {useState, useEffect} from 'react'

const App = () => {
  const APP_ID = "yourData Application-ID";
  const APP_KEY="yourData Application-Kyes";

  useEffect(() => {
    getRecipes()
  },[]);

  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    console.log("useEffect has been run")
  },[counter]);


  const getRecipes = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json()
    setRecipes(data)
    console.log(data)
  }

  return (
    <div className="App">
      <form className = 'search-form'>
        <input className = 'search-bar' type='text' />
        <button className = 'search-button' type='submit'>Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
