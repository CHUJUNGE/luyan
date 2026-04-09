import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BoardPage from './pages/BoardPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/board" element={<BoardPage />} />
      </Routes>
    </HashRouter>
  )
}
