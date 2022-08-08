import NavBar from "../components/NavBar/Navbar";
import Header from "../components/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import BlogPage from "../components/Pages/BlogPage.js";

function App() {
  return (
    <Router> 
      <div className="App">
        <NavBar />
        <div className="home-page">
          <Switch>
            <Route exact path = "/">
              <Header />
            </Route>
            <Route path = "/blog">
              <BlogPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
