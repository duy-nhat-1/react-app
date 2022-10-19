import Home from "./page/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Admin from "./page/Admin";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route  path="/*" element = {<Home/>}/>
        <Route path="/admin/*" element = {<Admin/>}/>
      </Routes>
      </Router>
    </div>

  );
}

export default App;
