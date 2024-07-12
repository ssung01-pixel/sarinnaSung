import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    // return in a function in a jsx template
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
export default App;
// export the component so that it is useable in other files
