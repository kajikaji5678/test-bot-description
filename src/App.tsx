import Header from "./components/Header.js";
import Feature from "./components/feature.js";
import Logs from "./components/logs.js";

function App() {
  return (
    <>
      <main className="bg-[#010b1d] pt-24">
        <Header />
        <Feature />
        <Logs />
      </main>
    </>
  )
}

export default App;