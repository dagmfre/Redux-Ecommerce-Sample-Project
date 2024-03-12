import { fetchProducts } from "./cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment } from "./cartSlice";

export default function CartProducts() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  const handleClick = (item) => {
    dispatch(addToCart(item));
    dispatch(increment());
  };

  return (
    <div className="products">
      {cartProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt="" />
          <h1>{product.title}</h1>
          <div>
            <button
              onClick={() =>
                handleClick({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                })
              }
            >
              Add To Cart
            </button>
            <p>{product.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
}
