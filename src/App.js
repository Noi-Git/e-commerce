import { Routes, Route } from 'react-router-dom'
import HomePage from './routes/home/HomePage'
import Navigation from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'

const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
