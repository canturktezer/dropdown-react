import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dropdown />} />
    </Routes>
  );
}

export default App;
