import data from "./data";

function App() {
  console.log(data.products);
  return (
    <div className="App">
      <header>
        <a href="./">eshop</a>
      </header>
      <main>
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
      </main>
    </div>
  );
}

export default App;
