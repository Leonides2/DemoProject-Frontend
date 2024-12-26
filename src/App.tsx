import { useEffect, useState } from 'react'
import ChangeModeButton from './components/ChangeModeButton/ChangeModeButton'
import { useGlobalSettings } from './hooks/useGlobalSettingsHook'
import ScoreList from './components/ScoreList/ScoreList'
import HideModalButton from './components/HideModalButton.tsx/HideModalButton'

import "./App.css"
import SubmitScoreInput from './components/SubmitScoreInput/SubmitScoreInput'


function App() {
  const [count, setCount] = useState(0)
  const { isDarkMode } = useGlobalSettings()


  useEffect(() => {
    localStorage.setItem("score", String(count))
    let score = localStorage.getItem("score")
    console.log(score)
  }, [count]);
  return (
    <>
      <header className={`header `}>
        Tools: 
        <ChangeModeButton />
        <HideModalButton />
        <SubmitScoreInput />

        
      </header>
      <main className={`main ${isDarkMode ? '' : 'light-component'}`}>

        <div className='main-container'>
          <div id='left'>
            <div>
              <h3> High Scores</h3>
            </div>
            <ScoreList />
          </div>
          <div id='center'>
            <h3>
              Clicker Game
            </h3>

            
            
            <div className={`counter-container ${isDarkMode ? '' : 'light-component'}`}>
              <button type='button' className='counter-text-container' onClick={() => setCount(count + 1)}>
                <h3>
                  Click count: {count}
                </h3>
                <p>Click here</p>
              </button>

              <button className='reset-button' onClick={() => setCount(0)}>
                reset count
              </button>
            </div>
          </div>
          <div id='right'>
            <div>
              <h3> Latest Events </h3>
            </div>
          </div>

        </div>
      </main>
      <footer className='footer'>
          <div>
            <h1>
              About
            </h1>
          </div>
      </footer>
    </>
  )
}

export default App
