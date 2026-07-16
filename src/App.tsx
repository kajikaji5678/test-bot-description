import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Agreements from "./pages/agreements";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agreements" element={<Agreements />} />
    </Routes>
  )
}

export default App;