import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Agreements from "./pages/agreements";
import Vote from "./pages/vote";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agreements" element={<Agreements />} />
      <Route path="/vote" element={<Vote />} />
    </Routes>
  )
}

export default App;