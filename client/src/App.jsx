import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from '../components/NavBar/index.jsx'
import CampsDisplay from './pages/CampDisplay'

function App() {
  

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<CampsDisplay />} />
       </Routes>
    </div>
  )
}

export default App
