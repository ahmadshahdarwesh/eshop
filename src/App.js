import { Link, Route, Routes } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="./">ERLA</Link>
      </header>
      <main>
        <Routes>
          <Route path="/product:id" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
