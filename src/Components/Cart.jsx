import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "./cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const handleClick = (item) => {
    dispatch(removeFromCart(item));
  };

  return products.map((product) => (
    <div className="products">
      <div key={product.id} className="product-card">
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
        <div>
          <button
            onClick={() =>
              handleClick({
                id: product.id,
              })
            }
          >
            Remove From Cart
          </button>
          <p>{product.price}$</p>
        </div>
      </div>
    </div>
  ));
}
