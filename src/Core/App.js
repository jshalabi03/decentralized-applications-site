import NavBar from "../components/NavBar/Navbar";
import Header from "../components/Header/Header.js";
import Anime from "../components/Animation/Anime.js";
import PageOne from "../components/Pages/PageOne/PageOne";
import './App.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Header />
        <Anime/>
        <PageOne />
      </header>
    </div>
  );
}

export default App;
