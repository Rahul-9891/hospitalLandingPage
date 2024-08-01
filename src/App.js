import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css';
import MainLandingpage from "./component/MainLandingpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLandingpage/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
