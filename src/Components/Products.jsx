import { fetchProducts } from "./cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment } from "./cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleClick = (item) => {
    dispatch(addToCart(item));
    dispatch(increment());
  };

  return (
    <div className="products">
      {products && products.length > 0 ? (
        products[0].map((product, index) => (
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
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}
