import React from "react";
import data from "../data";

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      {
        <div className="products">
          {data.products.map((product, i) => (
            <div key={i} className="product">
              <a href={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.id}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong> €{product.price}</strong>
                </p>
                <button>Add to Basket</button>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default HomeScreen;
