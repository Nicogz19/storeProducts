import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Inicio</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<h1><RegisterPage /></h1>} />
        <Route path='/productos' element={<h1>Productos</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App