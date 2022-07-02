import NavBar from "../Components/NavBar/Navbar";
import Background from "../Files/Videos/newvid.mp4";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video autoPlay loop muted style = {{
           position: "absolute", width: "100%", left: "50%", top: "50%", height: "77.43234%", objectFit: "cover", transform: "translate(-50%, -50%"}}>
          <source src = {Background} type = "video/mp4"/>
        </video>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
