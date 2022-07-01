import Niran from "./components/Niran"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to nfta</h1>
        <Niran niranToggled={false} togglePicture=""/>
      </header>
    </div>
  );
}

export default App;
