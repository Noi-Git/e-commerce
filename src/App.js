import { Routes, Route } from 'react-router-dom'
import HomePage from './routes/home/HomePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
  )
}

export default App
