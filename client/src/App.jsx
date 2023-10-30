import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from '../components/NavBar/index.jsx'
import CampsDisplay from './pages/CampDisplay'
import CampForm from './CampForm'
import SingleCamp from './pages/SingleCamp'

function App() {
  

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<CampsDisplay />} />
        <Route pathe="/camps/new" element={ <CampForm />} />
        {/* query, param, put it into context */}
        <Route path="/camps/:campId" element={<SingleCamp />} />
       </Routes>
    </div>
  )
}

export default App


