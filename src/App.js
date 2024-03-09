import { useDispatch, useSelector } from "react-redux";
import Home from "./Components/Home";
import cartSlice from "./Components/cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);
  const isLoggedIn = useSelector((state) => state.counter.isLogged);
  return (
    <div className="App">
      <Home />
      {/* <h1>Counter: {counterValue}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addByNumber(10))}>Add By 10</button>
      <button onClick={() => dispatch(login())}>Sign In</button>
      <p>{isLoggedIn ? "Secret" : ""}</p> */}
    </div>
  );
};

export default App;
