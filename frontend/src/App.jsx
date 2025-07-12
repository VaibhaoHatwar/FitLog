import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages and components
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App