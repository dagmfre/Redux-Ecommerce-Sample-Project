import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
  );
};

export default App;
