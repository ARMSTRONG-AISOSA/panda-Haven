import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Pages
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/about/AboutUs";

import ErrorPage from "./pages/error404/ErrorPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />

          {/* Error Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
