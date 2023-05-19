import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  pageSize = 5;
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0 
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress}
                  key="genral"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                ></News>
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                ></News>
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                ></News>
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                ></News>
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                ></News>
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
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
}
