import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState();

  async function getData() {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    setProducts(result);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row my-5">
          {products?.map((product) => {
            return (
              <div key={product.id} className="col-md-3">
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
