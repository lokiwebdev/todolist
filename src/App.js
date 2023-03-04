import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Errorpage from "./components/pages/Errorpage";



import "./components/stylesheets/layout.css";
import TodoList from "./components/pages/TodoList";


function App() {



  return (
    <Router>
      <>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/todolist" exact element={<TodoList />} />


            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;