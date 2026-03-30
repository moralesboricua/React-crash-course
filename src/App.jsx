import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import Users from './pages/Users.jsx';


function App() {
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:username" element={<Users />} />
      </Routes>
    </Router>
    );
}

export default App;
