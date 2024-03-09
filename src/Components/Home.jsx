import Products from "./Products"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-cont">
        <div className="navbar">
          <div>
            <h1>Redux Toolkit</h1>
            <p>Products</p>
          </div>
          <div>
            <Link to="/cart">
              {" "}
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
            <p>1</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
