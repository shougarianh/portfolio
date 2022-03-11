import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Projectspage from './Components/Projectspage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/Projects" element={<Projectspage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
