import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Pages
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/about/AboutUs";
import Advocacy from "./pages/advocacy/Advocacy";
import Blog from "./pages/blog/Blog";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import ContactUs from "./pages/contactUs/ContactUs";
import Donate from "./pages/donate/Donate";
import EduResources from "./pages/eduResources/EduResources";
import JoinUs from "./pages/joinUs/JoinUs";
import Login from "./pages/login/Login";
import Projects from "./pages/projects/Projects";
import Shop from "./pages/shop/Shop";
import SignUp from "./pages/signUp/SignUp";
import Volunteer from "./pages/volunteer/Volunteer";

import ErrorPage from "./pages/error404/ErrorPage";

const App = () => {
  return (
    <div>
      <Router basename="/panda-haven">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/eduresources" element={<EduResources />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/volunteer" element={<Volunteer />} />

          {/* Error Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
