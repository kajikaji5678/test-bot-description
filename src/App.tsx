import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Agreements from "./pages/agreements";
import Vote from "./pages/vote";
import Callback from "./pages/callback";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agreements" element={<Agreements />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/callback" element={<Callback />} />
    </Routes>
  )
}

export default App;