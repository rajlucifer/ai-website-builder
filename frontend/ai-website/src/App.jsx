import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import { useState } from "react";
function App() {
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => {
    setOpenLogin(true);
  }
  const handleCloseLogin = ()=>{
    setOpenLogin(false);
  }



  return (
    <div>
      <NavBar open={handleOpenLogin}    />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage open={handleOpenLogin}   />} />
        </Routes>

      </BrowserRouter>
      <Login open={openLogin} onClose={handleCloseLogin} />
    </div>
  )
}

export default App
