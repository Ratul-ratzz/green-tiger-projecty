import "./App.css";
import Home from "./components/Home/Home";
import Album from "./components/Album/Album";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NAvabar/Navbar";
import Footer from "./components/Footer/Footer";
import Todo from "./components/Todo/Todo";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/posts" element={<Album />} />
        <Route path="/todos" element={<Todo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
