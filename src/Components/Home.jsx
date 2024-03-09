import Products from "./Products";

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
            <i class="fa-solid fa-cart-shopping"></i>
            <p>1</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
