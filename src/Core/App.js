import NavBar from "../components/NavBar/Navbar";
import Header from "../components/Header/Header.js";
import Anime from "../components/Animation/Anime.js";
import PageOne from "../components/Pages/PageOne/PageOne";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import './App.css';


function App() {
  return (
    <Router> 
      <div className="App">
        <NavBar />
        <div className="home-page">
          <Switch>
            <Route path = "/home">
              <Header />
              <PageOne />
            </Route>
            <Route path = "/blog">
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
