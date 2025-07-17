import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages and components
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App