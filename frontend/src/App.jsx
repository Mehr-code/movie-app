import "./css/App.css";
import Home from "../src/pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorities from "./pages/Favorities";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorities />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
