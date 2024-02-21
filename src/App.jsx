import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/MainContent'

function App() {
 const [darkMode, setDarkMode] = React.useState(false)
 function toggleDarkMode() {
  setDarkMode(prevMode => !prevMode)
 }

  return (
    <div className='container'>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}/
      >
      <Main darkMode = {darkMode}/>
    </div>
  )
}

export default App
