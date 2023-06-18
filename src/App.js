import { Routes, Route } from 'react-router-dom'
import HomePage from './routes/home/HomePage'
import Navigation from './routes/navigation/Navigation'
import SignIn from './routes/sign-in/SignIn'

const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signIn' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
