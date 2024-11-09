import { UserProvider } from './contexts/UserContext'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  )
}

export default App
