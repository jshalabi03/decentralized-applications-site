import NavBar from "../components/NavBar/Navbar";
import Header from "../components/Header/Header.js";
import Anime from "../components/Animation/Anime.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Header />
        <Anime />
      </header>
    </div>
  );
}

export default App;
