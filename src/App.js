import About from "./components/About";
import Home from "./components/Home";
import Wallet from "./components/Wallet";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/wallet" element={<Wallet/>}  />
          <Route path="/about" element={<About/>}  />
        </Routes>
    </div>
  );
}

export default App;
