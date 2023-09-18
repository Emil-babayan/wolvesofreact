import './app.style.scss'
import {Routes, Route} from "react-router-dom"
import MainLayout from './layout/MainLayout'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <main>
      
      <Routes>
          <Route path="/" element={<MainLayout/>}>      
            <Route index element={<Products/>}/>
            <Route path='products/:id' element={<SingleProduct/>}/>
            <Route path='brands/:id' element={<SingleProduct/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route >

      </Routes>

    </main>
  )
}

export default App