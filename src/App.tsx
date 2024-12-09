import { useEffect, useState } from 'react'
import ChangeModeButton from './components/ChangeModeButton/ChangeModeButton'
import { useGlobalSettings } from './hooks/useGlobalSettingsHook'
import ScoreList from './components/ScoreList/ScoreList'

function App() {
  const [count, setCount] = useState(0)
  const { isDarkMode } = useGlobalSettings()
  useEffect(()=>{

  });
  return (
    <main className={`main ${isDarkMode ? '' : 'light-component'}`}>
      <ChangeModeButton />
      <div className='main-container'>
        <div id='left'>

        </div>
        <div id='center'>
          <h3>
            Users:
          </h3>
          <ScoreList/>
          <div>
            <h3>
              Click count: {count}
            </h3>
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
