import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
   </Router>
  );
}

export default App;
