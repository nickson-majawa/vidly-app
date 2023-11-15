import { useState } from "react";
import "./App.css";
import Movies from "./components/movies";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="container">
        <Movies />
      </main>
    </>
  );
}

export default App;
