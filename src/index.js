import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import { HashRouter as Router, Route, Routes} from "react-router-dom"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"
import Navbar from "./functionBased/components/Navbar"
import SinglePage from "./functionBased/pages/SinglePage"

//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer/>} />
        <Route path="/about" element={<About />} />
        <Route  path="/about/:slug" element={ <SinglePage /> }/>
        <Route path="*" element={<NotMatch/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);