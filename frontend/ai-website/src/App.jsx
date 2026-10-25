import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NavBar from "./components/NavBar"
function App() {


  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
