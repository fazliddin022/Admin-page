import { Route, Routes } from "react-router-dom"
import { Category, Home, Login, NotFound, Products, Register } from "./pages"
import { useContext } from "react"
import { Context } from "./context/Context"

const App = () => {
  const {token} = useContext(Context)
  return (token) ? ( 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}
export default App