import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
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

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt="" />
          <h1>{product.title}</h1>
          <div>
            <button>Add To Cart</button>
            <p>{product.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
}
