import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Project from './Components/Project';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Projects" component={Project}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
