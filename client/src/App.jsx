import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from '../components/NavBar/index.jsx'
import CampsDisplay from './pages/CampDisplay'
import CampForm from './CampForm'
import SingleCamp from './pages/SingleCamp'
import { useEffect } from 'react'
import axios from 'axios'


function App() {
  // go get states data, put in context

  useEffect(() => {
    try {
      axios({
        method: 'GET',
        url: "/server/states"
      }).then(response => {
        console.log(response.data)
        // The states data should be in response.data
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<CampsDisplay />} />
        <Route path="/camps/new" element={<CampForm />} />
        {/* query, param, put it into context */}
        <Route path="/camps/:campId" element={<SingleCamp />} />
      </Routes>
    </div>
  )
}

export default App


