import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, increment } from "./cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (item) => {
    dispatch(addToCart(item));
    dispatch(increment());
  };

  return (
    <div className="products">
      {products.map((product) => (
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
