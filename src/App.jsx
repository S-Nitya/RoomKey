import { useState } from "react";
import Map from "./components/Map"; // Import the Map component

function App() {
  const [count, setCount] = useState(0); // Counter is not needed for this example, but can be removed if not used

  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Dormitory Management</h1>
      <Map /> {/* Render the Map component */}
    </div>
  );
}

export default App;
