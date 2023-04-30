import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./pages/About";
import "./styles.css";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
