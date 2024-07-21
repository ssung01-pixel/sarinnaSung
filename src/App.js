import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}
export default App;
