import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
