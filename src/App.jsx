import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import FlexboxPage from './pages/FlexboxPage.jsx'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flexbox" element={<FlexboxPage />} />
      </Routes>
    </BrowserRouter>
  )
}
