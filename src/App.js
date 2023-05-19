import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App =()=> {
  const pageSize = 5;
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress,setProgress]=useState(0);
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  key="genral"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                ></News>
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                ></News>
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                ></News>
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                ></News>
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                ></News>
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                ></News>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  
}
export default  App;