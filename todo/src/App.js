import React, { useState, useEffect} from "react";
import './App.css'

import TodoList from './components/todolist'
import LightMode from './imgs/lightmode.png'
import DarkMode from './imgs/darkmode.png'

function App() {
  const [theme, setTheme] = useState('Day')

  const toggleNight = ()=> {
    localStorage.setItem('Theme', 'Night')
    setTheme('Night')
  }

  const toggleLight = ()=> {
    localStorage.setItem('Theme', 'Day')
    setTheme('Day')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('Day')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])
  return (
      <div className={"App " + theme}>
        <h1 className='appH1'>
          Todo App Utilizing Local Storage{" "}
        </h1>
        <button className='button'
            onClick={toggleLight}>
            {theme === 'Day'}
            <img src={LightMode} style={{width:'25px', height: '25px'}}/>
          </button>
          <button className='button'
            onClick={toggleNight}>
            {theme === 'Night'}
            <img src={DarkMode} style={{width:'25px', height: '25px' }}/>
          </button>
        <TodoList />
      </div>
  );
}

export default App;
