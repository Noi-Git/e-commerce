import { Routes, Route } from 'react-router-dom'
import HomePage from './routes/home/HomePage'
import Navigation from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
import CheckOut from './routes/checkout/CheckOut'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  )
}

export default App
