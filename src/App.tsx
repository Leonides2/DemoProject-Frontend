import { useState } from 'react'
import useGetUsers from './api/hooks/user/getUsersHook'
import ChangeModeButton from './components/ChangeModeButton'
import { useGlobalSettings } from './hooks/useGlobalSettingsHook'

function App() {
  const [count, setCount] = useState(0)
  const { isDarkMode } = useGlobalSettings()

  const { data: Users, isError: userError } = useGetUsers()

  if (userError || !Users) return <> Error</>

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
          <div className={`user-score-list ${isDarkMode ? '' : 'light'}`}>
            {
              Users.map(
                item => {
                  return <p key={item.id}>
                    {item.username}  {item.score}
                  </p>
                }
              )
            }
          </div>
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
