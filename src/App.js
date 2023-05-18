import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import News from "./components/News"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="genral"  pageSize={5} country="in" category="general"></News>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment"></News>} />
            <Route exact path="/health" element={<News key="health" pageSize={5} country="in" category="health"></News>} />
            <Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science"></News>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology"></News>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"></News>} />
          </Routes>
        </Router>
      </div>
    )
  }
}