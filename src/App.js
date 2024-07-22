import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./footer";
import Projects from "./Projects"
import { HashRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="#/sarinnaSung" element={<Home />} />
          <Route path="#/sarinnaSung/Projects" element={<Projects />} />
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}
export default App;
