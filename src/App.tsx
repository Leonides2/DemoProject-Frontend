import { useEffect, useState } from 'react'
import ChangeModeButton from './components/ChangeModeButton/ChangeModeButton'
import { useGlobalSettings } from './hooks/useGlobalSettingsHook'
import ScoreList from './components/ScoreList/ScoreList'
import SubmitScoreInput from './components/SubmitScoreInput/SubmitScoreInput'
import HideModalButton from './components/HideModalButton.tsx/HideModalButton'

import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const { isDarkMode } = useGlobalSettings()


  useEffect(() => {
    localStorage.setItem("score", String(count))
    let score = localStorage.getItem("score")
    console.log(score)
  }, [count]);
  return (
    <main className={`main ${isDarkMode ? '' : 'light-component'}`}>
      <ChangeModeButton />
      <HideModalButton />
      <div className='main-container'>
        <div id='left'>

        </div>
        <div id='center'>
          <h3>
            Users:
          </h3>
          <SubmitScoreInput />
          <ScoreList />
          <div className={`counter-container ${isDarkMode ? '' : 'light-component'}`}>
            <div className='counter-text-container'>
              <h3>
                Click count: {count}
              </h3>
            </div>

            <button className='reset-button' onClick={() => setCount(0)}>
              reset count
            </button>
          </div>
          <button onClick={() => setCount(count + 1)}>
            click here
          </button>
        </div>
        <div id='right'>

        </div>

      </div>
    </main>
  )
}

export default App
